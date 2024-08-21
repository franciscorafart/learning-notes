# Kubernetes Sysyem Architecture

## Cluster
- Cluster of interconnected Nodes (Servers - VM or bare metal)
- Nodes are broken into to groups
    - Control Plane
        All system components run here
        - Many cloud providers provide managed clusters that handle the components in the Control Plane group
    - Data Plane
        - Worker Nodes where client app would run

