- Q: A user can't connect to internet sites after vacations, but can connect to local ip addresses. When pinging the IP address we get a result, when pinging domain we don't get response. Which command can solve the issue?
R: `ipconfig /flushdns` => Flush DNS resolver cache, forcing system to get the latest DNS information from DNS server.

- Q:Technician needs to find a client's port on a Patch Panel but device isn't labeled. Which tool to use?
R: Toner Probe. => Tool used to trace network cables, generates a tone that can be detected by receiver probe.

- Q: A laptop screen is flickering. What are two most likely root issues?
A: Failing backlight 
    Failing Inverter => Feeds the backlight

- Q: If Webcam doesn't work on a video conferencing software, what is the first step?
A: Close other video softwawre and retry (before plug-unplug camera and checking driver). Only one software can use webcam at a time.

- Q: Replace Motherboard of PC with Intel Core i7-11700K processor. Which CPU socket should the replacement motherboard have?
A: LGA 1200. Used in 10 and 11th generation Intel Core processors.

LGA 1150 => Used on 4th generation
LGA 1366 => Older intel processors (Intel Core i7-9xx processors)
LGA 1700 - Not currently in use, expected for 12th generation Alder Lake processors.

- Q: A projector shuts off after 10 minutes of use and then can't be turned on for 10 minutes after. What should the technician do?
- Clean the Filter. The Projector is shutting off due to overheating, likely caused by dust accumulation. If the filter is clogged, then airflow will be impeded.

- Q: Which device shouldn't be connected to a UPS
A: Laser Printer

A UPS is a device to provide backup power during power outage. Laser Printers consume a lot of power so they can overwhelm the UPS.

- Q: What motherboard component can be used to reset a computer to a state where you can boot it without the Boot password and BIOS password
A: Jumper. Shorting the circuit with the jumper will reset the BIOS.

## Review Core 1 Assessment

- Troubleshooting:
A problem has a Cause: Unerlying issue, Symptom: How th problem is experienced and Consequence: Business impact.

- Memory Flex mode: ??
Memory of equal value within each channel can work as dual-channel while remainder of memory will work in single-channel mode.

- Printer Properties vs Printer preferences
Preferences => Has print job options
Properties => Settings for printer object, underlying hardware, driver, and printing to a different port.

- MAC address => 48-bit!

- Fiber internet
ONT => Installed on customer's premises
OLT (Optical Line Terminal) -> Located in street cabinet. Splitters direct each subscriber traffic over short length of fiber to ONT

- Display glitches
Color glitches, purple or green horizontal lines => Cable problem
No image displayed => Verify source in OSC menu
Flickering image: Display's backlight ot circuitry startin to fail.

- 9 pin header on Motherboard => USB

- Non-transparent proxy server => Requires client configuration for the proxy server.

- Port flapping:
    - Bad cabling, faulty port on Switch or NIC, interferance (Fluorecent lights)

- M.2 SSD -> PCI Express bus interface. Faster than SATA
- Mini SATA (mSATA), slower than M.2 (Up to  6 GBps)

- Battery:
    - Swellling battery is symptom of aging, defective, or overheating battery, not cause.

- Unplugging: When card is plugged into port with greater number of lanes.

Less to More volatile storage:
-mSata
-SSD
-USB
-Ram
-Cache

- Looback tool => Test for bad ports

- Chip Creep
Adapter becomes loose from socket. Caused by:
1. Temperature changes on the motherboard
2. Dust and dirt on a connector, becuase it's an abrasive between connector and socket, wearing and damaging the pins over time.

- PCIe Cards
Learn the difference, how they look and what they're used for between PCIe x1, x4, x8, and x16
- PCIe 16x => Smallest initial segment, break, and long portion of 16-lane configuration
- PCIe x1 => Used for Wi-Fi adapters. Smallest segment of connector pins.
- PCI => Used for NIC cards (3 sections) ?
- PCI => Used for Soundcards. Two segments ?

NETBIOS
- NetBIOS over TCP communications are used by modern networks supporting networking features of legacy Windows versions.

OSD - On-Screen Display
- Graphical interace that overlays info over primary video dignal (monitor, monitor)

- UART (Universal Asynchronous Receiver Transmitter)
Used by USB and Bluetooth for modern mobile device serial communication.

- DVI
DVI-I: Connect digital source to analog display or viceversa
DVI-D: Single and Dual link between two digital device
DVI-A: Analog-to-analog

- Disk Thrashing
Constant LED activity that might indicate that drive is being used as RAM or cotinually for paging (Virtual Memory)

- NAP - Network Access Point
Access appliance like Switch, AP, Firewall or VPN gateway

- Post Failing
- Remove appliacntes at a tme, remove all essentials and add them back one-by-one, check for faulty CPU.]

- Single-Mode fiber.
Small core (8-10 microns) that carries long wavelength over long distances

- Multi-mode fiber
No long distance and high signaling speeds as single-mode (300m). Less coherent LEDSs. Larger core (625 or 50 microns)

- Smudging print in laser printer
Becuase toner not fusing correctly.

- CPM capabilities - Chip Level Multiprocessing
Multiple processing cores combined in one. Multiple execution units and registers.
Single-core CPU => single execution unit.

Hyperthreading -> Simultaneous Multithreading (SMT). SMT allows threads to run through CPU at the same time.

- Address Space: Amount of memory locations CPU can keep track of. 32-bit CPU => 4GB, 64-bit CPU => 256TB

# CompTIA test book

Q: What three voltages does a laser printer power supply convert from AC?
A: +5V, -5V for logical circuitry and +24V for paper transfer motors

F: Hybrid drive is a combination of magnetic drive and SSD. Provides speed of SSD and high capacity of magnetic drive.

F: TCP printing allows clients with different OSs to send jobs directly to printers without intra OS conflicts

- Unplugin: Allows to put smaller PCIe cards into a larger slot. Ex. x8 card into x16 slot. x8 card will work at x8 speed. Motherboard needs to support it.

- Dual-channel momory will work with only one memory card, but no in dual mode. To work in dual-channel mode memory modules in the channel have to be identical.

- PCIe versions 1 to 5, each one dpubles the data transfer rate: 1-250MBps , 2.x => 500MBps, 3.0 => 1GBps, 4.0 => 2GBps, 5.0 => 4GBps

- Resource pooling: Permits all VMs within a virtualized environment to be assigned RAM for their operations. Allows dynamic allocation of RAM to different VMs according to demand without manual intervention or rigid contraints. When cloud provider deals with multiple tenants, it has additional capacity but saves money by sharing availability.

- Metered utilization: Pay-as-you-use payment model for cloud services. Specially used in migration periods. Not the same as on-demand, that means resources can be added on the fly as needed.

- Shared resources: Cloud infrastructure shared among cleints of a cloud provider.

- Emulator requirements: When running a VM, emulator requirements should be minimized to run the VM effiiently

- VDI (Virtual desktop Infrastructure) - 1) on premise or 2) on the cloud

- Sandbox: On Windows 10/11 pro you can run Sandbox, a VM Windows you can use to open files or do tests without putting the host OS in danger.

- HDCP protocol: Protocol to prevent unauthorized copying of digital video and audio. Ex. Used on DVDs to protect content

- Network equipment designed for general use is generally set up to avoid licensed channels used by licensed entities and government.

- Virtualization and TPM: Many virtual machine hosts require TPM to be enabled, for fucntinos like secure boot and hardware-based encryption.

- Webcams can only be accessed by one application at a time. If it doesn't work, first step is closing other applications that might be using it.

- MIMO technology: Multiple antennas for sending and receiving data, introduced with 802.11n - WiFi 4

- EMI: Electromagnetic interference

- AP overlap: When several access ponts are in close proximity, they can interfere with each other by overlapping channels => Slow and connection drop.

- S.M.A.R.T failures are indicative of imminent hard drive failure, detecting issues beyond file system errors. => Physical wear or mechanical issues

- VT-d: Intel virtualization technology. Needs to be enabled on BIOS for hypervisor to function correctly => Improves IO devices' performance in virtual env

- Bit Locker to Go: Windows feature that encrypts portable drives.

- VLAN Virtual LAN: technology that allows the creation of separate isolated virtual networks on a single Switch.

- To reduce influx of similar spam emails from various domains => Update keyword filtering for the spam gateway

- UPS - Uninterruptible Power Supply => Device that gives power to machines in power outages

- SPF - Sender Policy Framework: Let's you specify the mail servers that are authorized to send emails for your domain. Helps receiving servers identify messages that appear to come from your ogranization.

- DKIM : Same function as SPF, prevent spammers from impersonating you as email sender. Sender signs email so that receiver can verify both legitimate origin and that the message wasn't changed after being signed.

- DMARC - Domain-based Message Authentication, Reporting and Conformance: 
Protects users from forged emails that can slip by SPF and DKIM. Email authentication protocol. Verifies that sender identity the receiver sees matches the identity that is shown to the receiver sender using SPF andor DKIM.

    Checks
    - Checks FROM email address
    - Checks return path (SPF record) is a valid place to return the email
    - Checks DKIM record => Domain is valid and has a valid signature

- Thermal printers for receipts will have dark streaks if temperature is set too high. Paper darkens when heated, so excessive heat can make it al darker.

- Tablet cursor (?): Over time touch sensor alignment with the display can drift. => Recalibrate the touchscreen to avoid cursor drift.

- Failing capacitors are a common issue in older desktop computers. Swollen capacitors can provide irregular power supply causing random BSOD or shutdowns.
- HDMI-ARC port: Port designed to transfer audio directly to a soundbar.

- 802.3af => Power over Ethernet protocol. af-at-bt / 13W-25W-50W
- Generic Printer => When an OS uses a generic driver for a printer. You need a device-specific driver for the OS.
- Burn-in test: When system's components are subject to intensive stress to test their reliability and performance. It produces a lot of heat.
- Transfer roller Laser Printers => In charge of moving toner to the paper. If damaged it can lead to faint printed areas, as toner is not completely transfered to the page.
- Monitor with pink, blue or red hue typically indicates issue with the cable connection.
- Distinct channels access points:
If different access points on a network have different assigned channels, it can reduce interference and by extension, better latency.

- If upgrading motherboard with TPM device that encrypted data, you'll have to temprarily install the old motherboard to decrypt the data. It requires the original motherboard TPM.

- Manual 'OK' for each print job => Mismatch between printer's default paper tray settings and the actual paper loaded in the printer.
- When new RAM installed, BIOS might need to be updated to recognize the additional memory, specially if system doesn't automatically detect harware changes or memory modules disabled.
- ECC is specifically designed for server stability and data integrity