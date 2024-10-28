## Chapter 7
- net command allows Windows computers to connect to a remote server. 
    - net share is used to create shared folders and net use to connect to shared resources. 
    - net user allow admins to create and manage users. 
    - netstat shows which sockets (Ip and port) are being used and by which protocol
- Before formatting a disk format you need to create a partition diskpart

- Stop sharing local drive on network: net share <name_of_shared_doc> /delete

- Resilient file system is part of Windows versions Pro for Workstations and Enterprise. Detects when data on mirror drive is corrupt and fixes it with healthy copy.

- For a computer with 4 CPUs you need Windows Pro for Workstations. Pro supports 2 CPUs. Home edition 1 CPU.

- To Open task manager: ctrl+alt+del -> Pick Task Manager and ctrl+shift+esc
To access shared folders on a Workgroup (Not Windows Domain) the users PC will have to map the network drive and the manager’s PC will have to ensure each user has an account in the manager’s computer to access the mapped drive.
To block microphone from being active when using certain apps go to Windows Settings -> Privacy -> Microphone 

- If setting a static IP address you need to configure as a minimum: Ip address, subnet mask and default gateway

- Voice activation for applications can be enabled under Windows Settings -> Privacy -> Speech

## Chapter 7 - Security
When configuring a new router 1. Change the default username and password and 2. Change the default SSID

- In NTFS when moving a file on the same volume, it keeps its original permissions. If moved/copied to a different volume it inherits permissions from new parent directory

- RSA token -> Digipass. Hardware device or software that generates a temporary code every 60 seconds for MFA.

- Windows creates a default Guest account when installed that is disabled by default. Ensure it’s disabled because, even though it can’t do much, it can allow a hacker to learn about other accounts. Also, change the name of the default Administrator account.

- Best password practice is to have a minimum 8-10 character long password with different character types. Password ideal rotation is every 45 days,
    - Sometime not recommended because long passwords and different characters incentivice writing them down
    - MEmoral phrases are better
- NFTS tracks security for each resource with an ACL (Access Control List). It contains user and group names with their corresponding access levels to that resource.

- A Contractor should be given a guest account. Guest accounts have the same rights as users but can’t access log files. => Access to the system for a limited time.

- PowerUsers group is kept for backwards compatibility, but same as someone from Users group.

## Messer

- Wireless encryption

WPA-2
- CCMP Block cipher mode: Takes block of data, encrypts it, and sends it over as a package
- CCMP: DAta confidentiality with AES encryption and Message integrity check with CBC-MAC
- WPA-2 (used at home) has a brute-force problem: 4-ways hand shake when connecting to a WPA2 network with pre-shared key (PSK). Someone could capture the hash and brute force to find the associated PSK (or pre-sharerd key) => These days a couple of days is enough to brute force a PSK
- Encryption key 128-bit

WPA-3
- GCMP Block Cipher Mode (Galois Counter Mode Protocol): Stronger encryption than WPA2
- AES encryption still, and GMAC for message integrity
- SAE (Simultaneous Authentication of Equals) instead of PSK
    - Mutual authentication method mofidies WPA2 PSK authentication process.
    - Devices (host and AP) can create session keys without sending them across the network: No 4-way handshake, no shared PSK, no brute force
    - Diffie-HEllman derived key exchange without authentication component.
- Individualized data encryption
- Longer encryption keys (128/192/256 bit keys) -> More difficult to decrypt

-  Wireless security modes
    - Open system => No auth required
    - WPA2/3 or WPA3 Personal / WPA2/3-PSK with a pre-shared key
    - WPA2/3 Enterprise or WPA2/3-802.1X => Uses Authentication server.


## Comptia PBQs and Questions

- Windows 10 Edition features
Volume licensing and BranchCache available for Windows Pro, Pro for workstations, and Enterprise.
6TB max RAM for Enterprise and Pro for Workstations.

- BranchCache is feature in Windows 10 and Server that optimizes WAN bandwidth by caching content from remote servers at branch office locations.

Open Task Manager:
1. ctrl+alt+Delete
2. ctrl+Shift+Esc

- `start ctrl shift b` -> Command to restart graphic driver in Windows

- `df` : Disk free command in linux. `df --human-readable`
- `du` : Disk usage of files in Linux
- `rsync`: Utility to transfer and synchronize files between a computer and storage.

- When opening a support ticket, a) acknowedge request, b) establish a timeline, c) Explain time constraints

- Anti-static bag: shinny gray metallic bag.
- Connecting devices to UPS (Uninterrupted power supply) is an effective way of preventing short circuit and power surges.