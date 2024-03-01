# Network interfaces

There's two commands to inspect network interfaces: `ifconfig` and `ip`

ifconfig is older and it's part of the `net-tools` package.

Example:
`$ ifconfig -a` => Display list of aa network interfaces (Active and inactive)
`$ ip address show` | `ip addr show` | `ip a show` | `ip a` => Same as above. Address is the object and `show` the default command (can be ommited)

`ip -4` => Show only ipv4 addresses
`ip -6` => Show only ipv6 addresses

# Interfaces
`lo` Loopback interface
`enp0s3` Internet interface

Linux uses a predictable name for interfaces, for example `enp0s3`
First character: `e` for ethernet and `wl` for wireless lan
2nd(Type): `n` Network
3rd (Port): `p0` Port 0
4th (Slot)`s3` Slot 3

### Display specific network interface
`ifconfig enp0s3`
Or
`ip addr show dev enp0s3` | `ip a s dev enp0s3`

### Route
Tool to display the deafult gateway and the DNS server

`route -n` =>

`UG` is the default gateway
Or

`ip route show`

### DNS servers
`resolvectl status`