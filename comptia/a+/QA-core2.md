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

- NFTS tracks security for each resource with an ACL (Access Control List). It contains user and group names with their corresponding access levels to that resource.

- A Contractor should be given a guest account. Guest accounts have the same rights as users but can’t access log files. => Access to the system for a limited time.

- PowerUsers group is kept for backwards compatibility, but same as someone from Users group.

## Messer

- Wireless encryption

WPA-2
- CCMP Block cipher mode: Takes block of data, encrypts it, and sends it over as a package
- CCMP: DAta confidentiality with AES encryption and Message integrity check with CBC-MAC
- WPA-2 has a brute-force problem: 4-ways hand shake shares a hash (or pre-shared key - PSK)

WPA-3
- GCMP Block Cipher Mode (Galois Counter Mode Protocol): Stronger encryption than WPA2
- AES encryption still, and GMAC for message integrity

