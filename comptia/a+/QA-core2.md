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

- To remove Malware from Windows machine:
    - WinRe
        - Windows Recovery Environment. Very powerful command line you can run without starting the whole OS. Access to all files in OS, dangerous way to remove malware. Complete control.
        - Copy, rename or replace files from OS
        - Enable or Disable services
        - You can start WinRE 
            1. From Windows itself. Shift + Restart button on Start menu. => Find installation media for version of Windows and boot from there.
            2. Restart in Advanced Startup
            Window 10: Startup mode Settings -> Update & Security -> Recovery -> Advanced Startup
            After reboot, in blue screen options:  Trobuleshoot -> Advanced -> Command Prompt

- Only warantee of removing Malware -> Fresh install of the OS or restore from the known-good backup
- To prevent Shoulder Surfing => Privacy filter on screen (only allows to see it from the front)
- On-path attack (Man-in-the-middle). Redirects traffic.
    - ARP poisoning: On-path attack on a local subnet.
        Each device has an ARP cache with list of IP addresses and MAC addresses associated to those devices
        - Device broadcasts "Who is 192.168.1.1" for example, when communicating with a device and the device with that IP address responds with its MAC address, which is cached by the requestin device.
        - No security associated to the ARP broadcast and its response => This alows for an attacker's device to sit in the middle of communication between host and router.
        - Requires attacker to be in the local network and on the same IP subnet
    - On path browser attack: Malware installed in the browser.
- Password attacks
    - Some apps store passords in plain text => Never store passwords as plain text.
    - How to store password?
        - Hash: Fixed length string - message digest or fingerprint. Hasing function with no collision ideal.
            - Original password can't be recovered from the hash => Perfect for passwords to avoid deriving the password.
            - Sha-256 hashing function used in many applications
            - Brute force can be done to try figuring out hash stored
        - Dictionary attack: Hash of real words
- XSS 
    - Keep browser up to date
    - As a developer => Validate all inputs to the application

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

- When 
    - Verify Malware symptoms
    - Quarantine system
    - Disable System restore
    - Remidiate infected systems
- After removing a virus from a system, first:
    - schedule tasks and Updates
    - Make restore point
    - Educate user

- `sfc /scannow` a command to scan and repair file system in Windows.
- To fix roaming profile problems, rebuild Windows profiles.
- Restore Points in Windows back up system configurations, not user files.
- hen repairing a computer and following safety procedure one commonly overlooked danger is cuts from the metal chasis.

- To add language in Windows go to Windows Setting ->Time & Language -> Languages
- To congigure Proxy Server => Control Panel -> Internet options
- If an IP address has a `/48` after it it means: IPV6 and that the prefix is 48 bits long (Different meaning that in ipv4, where `/xx` means the subnet mask)
- Task Manager will have information about users connected to the local machine. In the Users tab.  
- On a 64 bit machine you can install 32bit and 64bit operating systems. Compatibility mode is not related, as it is a Windows feature to run 32Bit applications on a 64 bit OS.
- 1GHZ required to run Windows 10 Pro, 20GB, 2GB RAM for 64 bit system.
- To connect to a machine via RDP all you need is the name under "How to connect to this PC", as long as a few previous steps have been taken: RDP enabled on mobile or client PC, 
- `nbtstat` command used to troubleshoot NetBIOS over TCP
- `netstat` Essential insights into network connections like active connections, routing tables.
- USB selective suspend: Power Options utility in Windows allows a user to configure power for device or USB peripherals.
- `ifconfig` : Interface config command in linux/mac. It allows to view and set network interface configurations. Ip addresses, netmask, etc.
- To enable a lock screen in Windows go to Settings -> Personalizations
- `robocopy` File and dir copy command with advanced features like mirroring capabilities (for backups) and automatically adding or deleting files.
- VNC (Virtual Network Computing) links to computers via network. Allows for remote view of Desktop. They support multiple platforms. Connects to the computer by sharing its screen, while RDP connects to the computer and creates a virtual desktop session. VNC uses cloud connection while RDP uses port forwarding.
- Programs & Features => Simple Windows utility to repair programs (Fix corrupted and missing files)
- AUP -> Acceptable Use Policy. An agreement that must be signed when accessing resources of a institution, for example a University. Shows the acceptable practices and consequences for violations.
- When web pages load inconsistently it could be an indicator of a redirection to a malicious website => Check the URL.
- `net use` => Windows command used to map network drives to shared folders.
- EULA - Legal contract between end user and vendor regarding appropiate uses of a software.
- AES in WPA2 replaced TKIP for WPA
- Folder redirection -> Allows for users profiles to be stored ina a centralized location on a network in a Romaing Profile.
- Windows restores are created automatically by default, can be created manually, and some installation utilities will create them before installing new programs.
- Reputable source for information about latest security threats: `www.us-cert.gov`
- Google Sync: Service for syncronizing android phone
- If hard drive gets free space under 10%, its performance can decrease dramatically. => Disk Cleanup utility
- Safe Mode and WinRE are places to refresh a Windows installations while keeping personal files.
- To remove malware from an infected system is a general good practice to boot into Safe Mode or into an installation media, and run the anti-virus on the hard drive from there. Avoid running it from the infected drive.
- If you get a duplicated IP address error, it means one machine has a manual IP configuration => The fastest solution is to set that machine to use DHCP.
- Start+Ctrl+Shift+B => Test responsiveness of machine. Beep and display should reinitialize.
- Backup types:
    - Full
    - Differential: All data since last full backup
    - Incremental: All data and files changed since last backup
- Services Console (services.msc) => Starts, stops, pauses processes running on the background
- `robocopy` works better than `xcopy` to long file names and NFTS attributes.
- Local Users and Groups console (lusrmgr.msc) manages ocal users and groups
- System Congiguration utility (msconfig.exe) modifies settings and files that control how computer loads and boots Windows: Default OS, boot options.
- Local Security Policy (secpol.msc) views and edits local security settings.
- `sfc` System File Checker scans and repairs system files if corrupt (malware) or damaged. Doing this doesn't affect performance.
- System Information (msinfo.exe): Comprehensive report of system's hardware and software components.
- Fedora is an open-source linux distro. Red Hat is a subscription-based distibution derived from Fedora. SUSE Linux is also subscription.
- Quality Updates don't make radical changes to Windows. Feature Updated do.
- NFTS supports case-sensitive naming to support Unix/Linux compatibility.
- When data is written to NFTS, it is re-read, verified, and logged via journaling.
- Snapshot => Allows Volume Shadow Service to make read-only copies of files.
- Refresh => To attempt to recover OS with corrupt files without loosing personal data
- HCL (Hardware Compatibility List) => List of tested devices that work with Windows OS. Previously called LPL - Windows Logo'd Product List
- SED: Self Encrypting Devices
- NIST: National Institute of Standards and Technologu

Shared system files for 64 bit Windows: %SystemRoot%\system32
Shared system files for 32 bit Windows: %SystemRoot%\syswow64
Application files for 64 bit: Program Files
Application files for 32-bit applications (on 64 bit platform): Program Files (x86)

- WOW64 Environemt where 32-bit application can run in a 64-bit Windows environment
- POSIX compliance supports UNIX/Linux compatibility
- WinRE => Windows Recovery command prompt for running: `diskpart`, `sfc`, `chkdsk`, `bootrec`, `bcdedit`
- BOOTMGR and Boot Configuration Data `BCD` files normally installed in hidden System Reserved partition.
- RMM Remote Monitoring and Management => Tools used by Managed Service Providers (MSP), outsourced company that deals with IT
- MSD - Material safery Data Sheet
- NLA - Network Level Authentication -> Protects RDP server against denial of service attacks.
- Firefox configurations: `about:preferences`. Chrome: `chrome://settings`, `edge://settings`
- behavioral-based security monitoring: Failed attempts, login times, concurrent logins.
- Fileless malware => Malware that uses scripting environment to create new malicious processes in memory.
- C2 or C&C => Command and Control host or network
- No-root Firewalls: They create a VPN and then control app access in the VPN.
- To rebuild a local user profile in Windows you create a new account and copy the files from the old profile excluding three: NTUSER.DAT , NTUSER.DAT.LOG and NTUSER.INI.
- To detect whether a mobile device is rooted or jail broken => MDMs have routines to check if devices are jailbroken.
- Most exploits to iOS devices are when the device is tethered (connected)
- Data Protection -> Second round if encryption that protects Email