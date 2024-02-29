# 
Query language to implement server interfaces.

REST is resource based, meaning every resource has its own address (for example: api/users/<id>)

When we are querying for complex relationships, REST can become a bit awkward, as we either have to make several http requests to get and filter the data we need, or we have to build custom endpoints for it. In either case, REST usually returns more data than needed.

## GraphQl main principle
Front end makes a query describing the exact data it needs. In that way the query code stays simple and the front end gets exactly the data it needs.

With REST the query has not relationship to the response type, while in a GraphQL query a query speifies the response type.
GraphQL is a query language, there's no relation to Graph DBs, it can be implemented with any type of database.

## Apollo
Suite of tools for running and querying GrphQL servers: Mainly GraphQL server and GraphQL Client (Also Engine)

### Apollo server

When running an apollo server and go to the port o dev mode, we will get the apollo studio interface. This allows us to test queries in a GUI.

### Default resolvers
How does the server know to send exactly the data the query requests? Apollo server needs a resolver for each field of a query. When we don't define it, it gives us the default resolver for the field.


