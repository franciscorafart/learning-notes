# System Design Interview - Notes

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