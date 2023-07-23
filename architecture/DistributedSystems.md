# Distributed Systems

### NGNIX

Why use NGNIX?

Open source web server commonly used as a `reverse proxy`. 

Reverse Proxy: Proxy server that sits behind the firewall in a private network. It receives request from the client and routes internally to the containers that need resources. The clients sees everything coming from the same IP address.

Similar functions to Amazon's Elastic Load Balancer does, but open source.

- Load balance and route traffic. Single entry point (ip address) to resource in a containerized environment. 
- Cache of static and dynamic content
- Access logs in a single place. Avoids having logs for each micro service on a separate server.
- Helps to establish a secure connection between data centers and outside network.

### Resources
[Considerations when Designing Distributed Systems](https://www.suse.com/c/rancher_blog/considerations-when-designing-distributed-systems/)

[What is NGNIX](https://medium.com/devopscurry/what-is-nginx-understanding-the-basics-of-nginx-in-2021-f8ee0f3d3d54)