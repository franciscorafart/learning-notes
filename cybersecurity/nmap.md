# NMAP (Network Scanner)

`nmap <url_or_ip_address>`
Open ports on url

### Agressive scan
Provides open ports and OS information. Slower.
`nmap -A 192.168.68.52`


# Scan devices on a LAN
nmap allows for the scan of a single ip address/url or a range of ip addresses

`ip add` => Show IP addresses on local machine. Find the last one, which should be the one of ypur machine. For example:`192.168.4.25/24`

Since the sub net mask is `/24`, to scan for al the addresses in the network we start from `192.168.4.0`

`sudo nmap -sn 192.168.4.0/24` => `sn` is scan no port, to make it faster and provides a clean list of active ips. Using sudo ensures we extract as much info as possible.

### Export ot a file
In case output is too large we can export it to a file.
`nmap 192.168.4.0/24 > nmap-list.txt`

### Identify devices manufacturer by MAC address
The first three bytes of the MAC address is known as the Organizationally Unique Identifier (OUI)
Find manufacturer: https://www.wireshark.org/tools/oui-lookup.html#