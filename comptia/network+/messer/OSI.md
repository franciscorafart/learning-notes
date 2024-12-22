# OSI Model

Mnemotecnia: `All People Seem To Need Data Processing` => 
Or
Mnemotecnica: `Please do not Throw Sausage Pizza Away`

### Application - Layer 7
- Layer we get to see
- HTTP, FTP, DNS, POP3

### Presentation - Layer 6
Layer before we get to see data

- Application encryption (SSL/TLS)
- Character encoding
- Often combined with Application layer

### Session - Layer 5
- Start and Stop communication between one endpoint (device) and another
- Tunneling protocols
- ASP, ADSP, NetBIOS, PAP
- Connectinos between applications

### Transport layer - Layer 4
- How and Where data is being delivered
- TCP and UDP protocols and port numbers associated

### Network - Layer 3
- Layer associated to IP addresses, Routers, packages
- Fragments frames to traverse different networks

### Data Link / Switching layer - Layer 2
- Foundation layer for protocols. Data Link Control (DLC) protocols
    - MAC (Media Access Control) address on Ethernet
    - Switches
    - Ethernet frames

### Physical - Layer 1
- Cables, physical connections, signal over network connection.

### Wireshark
On the middle window of wireshark you can see the different layers. Layers 5, 6, 7 are grouped together.

# Topologies

## Point-to-point
Direct connection between two points. Ex. Phone call.

## Start Topology
Type of LAN connection where all devices are connected to a central Hub