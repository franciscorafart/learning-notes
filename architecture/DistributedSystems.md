# Distributed Systems

Nowadays applications are very complex systems that integrate a number of services running on different machines and geographical locations. They act as distributed systems.

Client-server: Simple distributed architecture of the eaarly world wide web. Tends to have a monolithic code base, difficult to scale and maintain on the long run.

### NGNIX

Why use NGNIX?

Open source web server commonly used as a `reverse proxy`. 

Reverse Proxy: Proxy server that sits behind the firewall in a private network. It receives request from the client and routes internally to the containers that need resources. The clients sees everything coming from the same IP address.

Similar functions to Amazon's Elastic Load Balancer does, but open source.

- Load balance and route traffic. Single entry point (ip address) to resource in a containerized environment. 
- Cache of static and dynamic content
- Access logs in a single place. Avoids having logs for each micro service on a separate server.
- Helps to establish a secure connection between data centers and outside network.

### Kafka

**Event streaming**

Databases encourage developers to think in terms of things (objects such as users, people) with a state. Kafka takes an event-based approach.
Apache is a system to manage event logs at scale.

- Topics: Storage of sequence of events.
- Logs are easier to scale than databases
- Events first, things second

Kafka works better with microservice architectures. Services can interact between each other through Kakfa Topics (Sequence of events)
- Better for processing that used to be done in batch processes over night. Kafka allows for the event stream to be processed as soon as it happens.
- Using Kafka tends to influence the architecture of the systems that are built with it.
- Kafka allows to do relationships and filtering of Topics like a sql database would allow for tables. It has a Java API for making that easy.
- Kafka stores copies of Topics across data centers so that it is fault tolerant
- It divides actions into event Producers (Write/delete) and Consumer (Read)

Cons:
- Policies for deleting events
- Not great for retreiving large amounts of data complex queries. For that SQL is much more perfromant

Pros:
- Process events in real time, no need for periodic batch updates.

### Swagger
Open source API documentation framework.

- It provides HTML view of REST API documentation.

#### Kafka Connect (Data integration)
- It's a system that allows to connect Kafka with legacy Databases so that you can get data in and out of them.
- `Connectors` are modules that are already built (some open source) that allow you to do the In and Out of legacy databases without the need to write code.

### Resources
[Considerations when Designing Distributed Systems](https://www.suse.com/c/rancher_blog/considerations-when-designing-distributed-systems/)

[What is NGNIX](https://medium.com/devopscurry/what-is-nginx-understanding-the-basics-of-nginx-in-2021-f8ee0f3d3d54)

[NGNIX vs Load Balancer](https://www.sumologic.com/blog/aws-elb-vs-nginx-load-balancer/)