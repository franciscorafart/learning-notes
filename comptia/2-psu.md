# Power Supply Units (PSU)

A PSU turns AC alternate current from the outlet to direct current (DC) voltage output. It steps down voltage, filters, and regulates to ensure consistent voltage output levels.

- Most PSU are designed for ATX form factor PCs
- They can be for only 110V (low inline), 220v (high inline) or Dual Voltage.

## Wattage rating
W = I * V (Power in Watts is equal to Voltage x Amperes or current intensity)
- A PSU should meet the combined power requirements of all the components (Addition of Watts required by components)
- Normal desktop PSU are units between 200-300
- Gaing PCs can require up to 500, specially to Graphics cards and CPUs

* Power output PSU !== Power from grid taken by PSU. Example: a 75% efficient PSU with an output of 300W would draw 400W from the outlet.
* Always use an online caculator to calculate the wattage of PSU. Never do it manually.

80% certification: Guarantees the power of the PSU is no less thatn 80% of the watts taken out of the wall. Efficiency.

### Rails
Power is supplied by a PSU through different voltage rails:
    - 3.3 VDC
    - +5 VDC
    - 12 VDC

    12VDC is the most commonly used rail.

## Power supply connectors - The P1

There's only one power supply connecor for the motherboard: The P1
A motherboard will have a number of other Molex and SATA power cables, and 4/6/8 pin connectors for CPU and PCIe cards.

- ATX P1 connector has 20 pins (2 x 10)
- ATX12V v2 (More common now) => 24 pin (2x12) P1 form factor.

Some motherboards have a 20+4pin adapter cable for compatibility with older 20-pin port motherboards.

- Modular PSU: All cables are removable. Improves airflow and cooling, minimizes clutter.
- Semi Modular: Only attached P1 connector.


## Fan cooling systems
- Therman paste
- Thermal Pad
- Heat Sink: Block of copper or aluminium with fins, exposes larger area to air, and releases heat through convection.

- Airflow
- Sensors
- Cleaning maintenance
- You can power a case fan with 4 pin Molex or Fan Controller
- Fans are designed to draw cool air from the front and expell warm air on the back.
- Fans and Heat sinks become less effective if dust accumulates.

## Liquid cooling systems
- Water loop/tubing, pump and reservoir
- Water blocks and brackets
- Radiator and fans
- Not very common, more common in gaming and servers

# Storage Devices

SSD and HDD are non-volatile mass-storage devices. We mount them into a bracket on the fron of the tower. We use a SATA cable for data connection.

- Chassis has several drive bays where we can install didderent form factor drives
- A disk is usually attacked to the drive bay using a `Caddy`. Drive is screwed to the caddy and the caddy is screwed to the drive bay.

Criteria to select storage device:
- Cost,
- Reliability
- Performance
- Use

## Solid State Drives (SSD)
- Better performance than disk Hard Drives
- Lower risk of mechanical failures.

## HardDisk Drives
- Disks spins at 5400or 7200 RPM
- Most user Sata Interfaces
- Main form factors: 3.5 and 2.5 inches
Formating


## RAID system (Important) Redundant Array Independent Disk
To avoid data loss you can provision a Drive as a RAID.

Basic RAID levels are numbreed 0 to 6.
- Can be implemented at Software level or at hardware level with a special controller, installed as an adapter card
- Hardware solutions are different in that they support a range of RAID levels.
- RAID is often able to hot swap a failed disk, without shutting down the operating system.

To setup a RAID system it's recommened for all Disks to have identical characteristics (type and performance). If one is smaller than the rest, the maximum capacity for the array will be determined by the smallest one.

### RAID 0: Striping without parity
- Minimum  2 disks
- Data gets divided into different sections => parallel queries. 
- Size of the volume: No. of disks X size of smallest one.
- No data redundancy. i.e. If one disk fails the whole volume fails.
- Used as non-critical cache store.

### RAID 1: Mirroring
If you have two (or more) disks and put put "Yes" on RAID option when formatting then it will store the same data in both HardDrives.

- Mirror drive configuration using 2 disks => Fault tolerance
- Overhead two write operations (2)
- Slightly faster on read operations
- If one disk fails, the other takes over
- Cost doubles because disk utilization is only 50% (As it has to be duplicate between two disks)

### RAID 5: Stirping with Distributed Party
- Like RAID 0 for striping data but Parity (duplicate data) is distributed in a different disks
- Requires 3 disks minimum
- HArd maximum of devices is set by controllers or OS
- Adding more disks increases chances of failures.
- Adding more disks increases available space.
- 1/n of a disk is set aside for parity, n being the number of disks

### RAID 10: Stripe of Mirrors

- It strips data like RAID 0, into tow different sub-modules. 
- Each sub-volume is a cluster of mirrored disks (RAID-1)
- Requires at least 4 disks
- Must be an even number of disks

## Removable Storage Drives
- Portable drives: Any drive that can be transported that doesn't require opening the PC.
- Drive enclosures: Housing of the drive
    -   NAS: Enclosure directly connected to a network, instead of PC.
- flash drives, memory cards.

## Optical drives
- CDs, DVDs, BlueRay
- Installed on a 5inch drive bay connected to Motherboard via SATA.
- Rated according to their data transfer speed

## System Memory

RAM memory is used to run applications and files. More RAM increases computer's performance.

### System RAM and virtual memory

- If there's not enough RAM Disk memory can be used => pagefile or swap space.
- Virtual Memory = Total RAM + Swap Space
- Swap space will slow the computer down because DISK memory access is much slower.

### Address Space ??? (Learn more)
- Width of data pathway: How much info can be transfered per clock cycle. Usually 64 bits wide.
- Width of address bus: How many memory locations CPU can keep track of
- A 32 bit CPU with 32-bit address bus can have an address space of 4GB
- 64 bits CPU with 48-bit address bus  can have an address space of 256TB

### RAM Types

