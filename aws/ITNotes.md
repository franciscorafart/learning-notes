# IT terminology

Network: Cable, routers, servers connected to each other
Router: Networking device that forwards packages of data between computer networks.
Switch: Takes a package and sends it to the correct server.

Problems with traditional IT approach (Rooms with servers)
- Rent, power, maintenance.
- Adding and replace servers => Time
- Limited scaling
- Hire team to monitor infrastructure 24/7
- Disasters

Cloud externalizes this.

## Cloud computing
On demand delivery if IT resources.
- Pay as-you-go service
- Provision eact size of resources you need

### Types of cloud
Private cloud: Used by single organizations, not exposed to public. Complete control and custom security (Rackspace)

Public cloud: Microsoft Azure, Google Cloud and AWS.

Hybrid cloud: Keep some servers on premises and other servies on the cloud.

### Five characteristics cloud computing
- On demand service
- Broad network access
- Multi tenancy and resource pooling: Multiple customers share hardware and infrastructure with privacy and security.
- Rapid elasticity and scalability
- Measured Service

6 advantages
- Trade Capital expense (CAPEX) vs operational expense (OPEX) => Pay on demand, not buy hardware
- Benefits of economies of scale
- Stop guessing capacity
- Increase speed and agility
- Stop spending money running and maintining data centers.
- Go global in minutes

### Types of cloud computing
- Infrastructure as a service (IaaS) => EC2 (GCP, Azure, Rackspace, Digital Ocean, Linode)
    - Newtorking, computers, and data storage 
    - High level of flexibility

    You handle Application, Data, Runtime, Middleware, O/S

- Platform as a Service (PaaS) => Elastic Beanstalks / Heroku / Google App engine, Windows Azure
    - Removes the need of org to manage underlying infrastructure
    - Focus on deployment and managment of applications

    You handle Application and Data

- Software as a service (SaaS) => Google Apps, Dropbox, Zoom
    Everything is managed by AWS

On premise server:
 You handle Application, Data, Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking


### Pricing
- Compute: (Lambda, )
Pay for compute time

- Storage (S3)
Pay for amount of data

- Data Transfer
Pay for data transfer out of cloud

### AWS Global infrastructure
- AWS Regions
There's different AWS center clusters that are named Regions. They're around the world connected via a private network.
Most Services are scoped into a region.

How to chose a region? 
- Compliance with laws
- Latency (deploy it close to users)
- Not all regions have all services
- Pricing: Varies region to region

- Availability zones
Between 3-6 availability zones in each region, for example ap-southeast-2a, ap-southeast-2b, ap-southeast-2c.
Availability zones: One or more datacenters that have redundant power, network, and connectivity. => Separated from each other so that disasters don't spill into each other.


- AWS data centers

- Edge locations
400 points of presence. Content is delivered to users with the lowest latency.
