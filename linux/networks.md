### Ports
Network ports are not a physical connection. They are a logical connection used by software to exchange data.
They go from 0 to 65535

#### Common ports
80, 443: Web pages  (http, https)
21: FTP
25: email

A port is always associated with an IP address. They go together to allow for software to exchange data over a network. For example:
76.45.644.34:443

IP address: Determine geographical location of server / computer
Port: which service/programon that server I awnt to use

Netstat => Allows you to see the ip and ports the computer is connecting to.

`0-1023` : System or well-know ports. Commont ports used (used on a server)
`1024 - 49151`: User or registered ports. USed by companies for well know services. (used on a server)
`49151 - 65535`: Dynamic or Private ports. Client-side ports that are free to use (Used on a client)
