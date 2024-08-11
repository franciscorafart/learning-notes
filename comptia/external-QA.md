- Q: A user can't connect to internet sites after vacations, but can connect to local ip addresses. When pinging the IP address we get a result, when pinging domain we don't get response. Which command can solve the issue?
R: `ipconfig /flushdns` => Flush DNS resolver cache, forcing system to get the latest DNS information from DNS server.

- Q:Technician needs to find a client's port on a Patch Panel but device isn't labeled. Which tool to use?
R: Toner Probe. => Tool used to trace network cables, generates a tone that can be detected by receiver probe.

- Q: A laptop screen is flickering. What are two most likely root issues?
A: Failing backlight 
    Failing Inverter => Feeds the backlight

- Q: If Webcam doesn't work on a video conferencing software, what is the first step?
A: Close other video softwawre and retry (before plug-unplug camera and checking driver)

- Q: Replace Motherboard of PC with Intel Core i7-11700K processor. Whcih CPU socket should the replacement motherboard have?
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
- Mini Sata, slower than M.2 (Up to  GBps)

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
- PCIe x1 => Used for Wi-Fi adapters. Smalles segment of connector pins.
- PCI => Used for NIC cards (3 sections) ?
- PCI => Used for Soundcards. Two segments ?

NETBIOS
- NetBIOS over TCP communications are used by modern networks supporting networking features of legacy Windows versions.

OSD - On-Screen Display
- Graphical interace that overlays info over primary video dignal (monitor, monitor)

- UART (Universal Asynchronous Receiver Transmitter)
Used by USB and Bluetooth for modern mobile device serial communication.

- DVI
DVI-I: Cpmect digital source to analog display or viceversa
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
No long distance and high signaling speeds as single-mode. Less coherent LEDSs. Larger core (625 or 50 microns)

- Sdmudging print in laser printer
Becuase toner not fusing correctly.

- CPM capabilities - Chip Level Multiprocessing
Multiple processing cores combined in one. Multiple execution units and registers.
Single-core CPU => single execution unit.

Hyperthreading -> Simultaneous Multithreading (SMT). SMT allos threads to run through CPU at the same time.

- Address Space: Amount of memory locations CPU can keep track of. 32-bit CPU => 4GB, 64-bit CPU => 256TB