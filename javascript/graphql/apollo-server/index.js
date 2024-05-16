const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const {v1: uuid} = require('uuid');
const {GraphQLError} = require('graphql');

let persons = [
    {
        name: 'Arto Hellas',
        phone: '040-123543',
        street: 'Tapiolankatu 5 A',
        city: 'Espoo',
        id: '3d594650-3436-11e9-bc57-8b80ba54c431'
    },
    {
        name: 'Matti Luukkainen',
        phone: '040-432342',
        street: 'Malminkaari 10 A',
        city: 'Helsinki',
        id: '3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
        name: 'Venla Ruuska',
        street: 'Nallemäent',
        city: 'Helsinki',
        id: '3d599471-3436-11e9-bc57-8b80ba54c431'
    }
]

// typeDefs have the schema that defines the data
const typeDefs = `
    type Address {
        street: String!
        city: String!
    }

    type Person {
        name: String!
        phone: String
        street: String!
        address: Address!
        city: String!
        id: ID!
    }

    enum YesNo {
        Yes
        No
    }

    type Query {
        personCount: Int!
        allPersons(phone: YesNo): [Person!]!
        findPerson(name: String!): Person
    }

    type Mutation {
        addPerson(
            name: String!
            phone: String
            street: String!
            city: String!
        ): Person
        editPhone(
            name: String!
            phone: String!
        ): Person
    }
`

// Resolvers have the code that define how GraphQl queries are responded to
// There's a resolver for each field on the query type
const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: (root, args) => {
            if (!args.phone) {
                return persons;
            }
            const byPhone = person => args.phone === 'Yes' ? Boolean(person.phone) : !Boolean(person.phone);

            return persons.filter(byPhone)
        },
        findPerson: (root, args) => persons.find(p => p.name === args.name)
    },
    // Default resolver (given for every field when not defined explicitly)
    Person: {    
        // name: (root) => root.name,
        // phone: (root) => root.phone,
        // street: (root) => root.street,
        // city: (root) => root.city,
        // id: (root) => root.id

        // By overwritting the fields, we can define our custom resolvers
        address: (root) => ({
            street: root.street,
            city: root.city,
        }),
    },
    Mutation: {
        addPerson: (root, args) => {
            if (persons.find(p => p.name ===args.name)) {
                throw new GraphQLError('Name must be unique', {
                    extensions: {
                        code: "BAD_USER_INPUT",
                        invalidArds: args.name,
                    }
                });
            }
            const person = {...args, id: uuid()};
            persons = persons.concat(person);
            return person;
        },
        editPhone: (root, args) => {
            const p = persons.find(person => person.name === args.name);

            if (!p) {
                return null;
            }

            const updatedPerson = {...p, phone: args.phone};
            const indexOfP = persons.findIndex(person => person.name === args.name);
            persons[indexOfP] = updatedPerson;
            return updatedPerson;
        }
    }
}

// server takes schema and code (resolvers) as parameter
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});