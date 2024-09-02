# System Design Interview - Notes

# Chapter 1

## Database replication

Applications usually require more Read than Write operations. For this reason both a Master database and several Slave copies of it can be implemented in an application . The servers will read data from the slave copies and direct write operations to Master database.A separate process of DB replication will keep the Slave copies in sync with the master one.
- Better performance, as it allows more queries to be processed in parallel.
- Reliability: If a Database is destroyed, data is still preserved as it stored in multiple locations.
- High availability: With data in multiple locations, a web platform can remain in operation even if one data base goes offline.

## Cache

### Cache tier 
A temporary data store layer. By caching requests we avoid slower DB queries, as queries to cache database are faster.

Putting a cache layer between the server and de DB is a strategy called `read-through cache`

### When and how to use cache
- Frequently read and infrequently modified data.
- Don't use to persist data, cache memory is volatile
- Add expiration to cache.
- Keep cache and db in-sync.
- Mitigating failures => Single cache server is a Single Point of Failure (SPOF). Multiple cache servers across different data centers.Also, overprovision required memory to have buffer.
- Eviction Policy: When memory is full, elements will be removed. Least Recently Used (LRU), Least Frequently Used (LFU) of FIFO are common eviction policies.

## Content Delivery Networks (CDN)

Geographically dispersed server network to deliver static content (css, js, images, videos).

If a CDN server doesn't have a piece of the content requested (ex. an image), it will request it from the original server or store for it. The CDN then stores the image to return it from cache next time it's requested as long as the Time-To-Live (TTL) hasn't expired.

Considerations
- Don't cache infrequently used content, as the CDN charges on traffic in and out of it.
- Set proper cache expiry.
- Remove file from CDN before expiry by using API provided by vendor, or use object versioning.

A CDN allows for static assets to not be served by the web servers, the database load is lightened.

### Stateless web tier
In order to scale servers horizontally we need to take user session information out of the server, into a NoSQL db or a redis cache. This is called a stateless server and it can scale horizontally.

## Data Centers

geoDNS is a DNS service that allows for domains to be solved to IP addresses based on the location of the user.
Challenges:
- Traffic redirection: Effective tools to route traffic to the correct and available data center.
- Data sync: Local servers with replicated data can be used for different geo locations, keeping them in sync is a challenge.
- Test and deploy: Tests and deploys should be run in different locations.

### Message queue
- Messaging queues are a key strategy for world distributed systems to scale.
The basic ideas of message queues are a two actors, a Producer and a Consumer of messages.
The Producer publishes an action into a message queue, a Consumer is subscribed to a message queue and consumes these messages, executing actions defined by the message.

The producer can publish messages when the Consumer is unavailable, and the Consumer can read messages when the producers is unavailable.
This simple idea allows for the scaling of large complex and distributed systems.

## Logging, metrics, and automation
When an app serves a business and scales, we need to be able to log errors effiiently and in a centralized way, track metrics of our system such as CPU, memory, disk as well as other business metrics. We will also need automation to test and deploy changes, to improve productivity.

## Database scaling

### Vertical Scaling
Adding more resources to an existing machine. The disadvantages is that there are hardware limits, risk of SPOF, and higher costs.

### Horizontal scaling
Sharding / horizontal scaling is adding more machines.
It's needed when one db is no longer enough to store all the data.
- How to distribute the data?
- Celebrity problem: One shard might have data that is more sought after than others, exhausting one particular resource.
- Joins and denormalizations: It's harder to make data joins when data is distributed in many shards. A common approach is to denormalize the db.

#### Sharding in DBs
Sharding is a form of partitioning, called horizontal partitionaing. For DBs the schemas are replicated and deviding the data by shard key.

#### Partitioning DB
When partitioning a DB it splits it into independent portions, so dividing the schema of th database.

### How to scale to millions of usrs
- Stateless web servers
- Redundancy on every tier
- Cache data as much as possible
- Multiple data centers
- Static assets on CDN
- Scale data tier by sharding
- Split tiers into individual services
- Monitor and automate

#### Scalability
System is scalable if increased performance is proportional to resources added.

### CAP Theorem
Consistency - Availability - Partition Tolerance => Distributed systems can't guarantee the three simultaneously ie. 2 of 3

- Consistency: State of data after DB update => For consistency, same queries should return the same result.
- Availability: DBs can't have downtime, should always be available.
- Partition Tolerance: DB should be functioning despite communication being unstable.


### Storage
- Blob / Object storage:
Store data in similar sized modules or blocks that are unstructured. Great for media, logs, and backup storage. Harder to index, unlimited scalability, cloud native, cost-effective. Searched by key-value to find it.

- File storage
Storage in a herarchical file structure.

# Chapter 2 Back-of-the-envelope estimations

# Chapter 3 Framework for System Design interviews
Never give quick answers to a system design interview, this is a red flag. These are always open-ended questions, so always clarify what the interviewer is asking you to build and test assumptions. Always communicate with the interviewer.

We can divide a system design interview in 4 steps:
1. Understand the problem and establish design scope (3-10 minutes)
At this point as all the relevant questions, such as features, amount of users, when scaling up will happen, tech stack, existing services company already has.

2. High level design and get buy-in (10-15 minutes)
Come up with a high level design and get feedback from the interviewer as it was a co-worker.
- Come up with Blue print
- Draw diagrams
- Do back of the envelope calculations
- Go through concrete use cases

3. Design Deep Dive (10-25 minutes)
In this stage we dive deeper into the implementation of some of the high-level components. It depends on the interviewer where they want to focus.

On this step it's important not to spend too much time in any unnecessary subject.

4. Wrap up (3-5 minutes)
Follow up questions or recap of the design.
- Bottlenecks
- Error handling
- Logs 
- How to scale the design?
- Propose refinements

# Chapter 4 - Design a Rate Limiter