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
A motherboard will have a number of other Molex (4-pin) and SATA power cables (15-pin), and 4/6/8 pin connectors for CPU and PCIe cards.

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

DDR SDRAM = Double Data Rate - Synchronous Dynamic - Random Access Memory

Data Rate => One bit per clock cycle
Double Data Rate => Two transfers per clock cycle
Synchronous Dynaic (SDRAM) => Synchronized to the motherboard's clock.

- DDR memory Labeled using the higherst theoretical bandwidth (PC1600, PC2100)
- Subsequent DDR technologies increase speed by multiplying the bus speed, not the speed at which the actual device works.

### Memory Modules
Printed circuit board that holds a number of RAM devices and act as a single unit.
- Desktop DDR is packed in a DIMM form factor (Dual Inline Memory Module)
- Notches / keys on the module (ranuras) identify the DDR generation (DDR3, DDR4, DDR5) and prevent from being placed in a wrong slot or direction.
- DDR type must match de motherboard
- Laptop RAM is packed into smaller SODIMM form factor.

DIMM form factors visualization: https://www.itechtics.com/dimm-sodimm-microdimm/

### Multichannel system Memory
In the 2000 memory became a bottleneck due to the improvement of CPU. Intel and AMD developed dual-channel architecture for Memory controllers.
- Single-channel: 1 64-bit data bus between CPU, memory controller and RAM device.
- Dual channel: 2 64-bit pathways

### ECC RAM
Error correcting code (ECC) RAM
- For servers that require high level of reliabiliy
- Performs hash calculations and stores an 8-bit checksum for each transfer
- Checksum requires extra processor chip and a 72-bit data bus
- System can detect and correct single-bit errors
- ECC can detect 2,3,4 bit errors but cannot correct them.
- Supplied as Registered DIMMs (RDIMMs)

- Motherboard and CPU must support ECC operation
- Motherboards support RDIMM or UDIMM, not both

## Install CPUS
 - Ground ESC device to inside of the case
- Dettach Heat Sink and carefully pull out
- Dettach CPU and carefully pull out
- Align pin one (colored) with the marking on the CPU. Don't force it, just let it attach.
- Apply small bit of thermal paste (a drop)
- Replace Heat Sink
- Connect power supply to heat sink
- If Updating the CPU, might require firmware update

Questions:
 - What is a controller? Between RAM and motherboard

## CPU Architecture
- CPU grabs instructions from application which are stored in system memory
- Executes instructions, passes is to Arithmetic Logic Unit (ALU) or Floating-point unit (FPU)
- Result of execution passed back to a register, cache, or system memory
    - cache stores instructions and data that the system uses regulary

### x86
Architecture to optimize the fetch, decode, execute and writeback operations while maitaining compatibility If defines a CPU as IBM PC compatible. 
- Designed and manufactured by Intel and AMD
- 32 bit instruction set

### x64
- 64 bit instruction set
- Developed by AMD and implemented by Intel as Intel64

Software must be compiled to run as 64 bit or 32 bit CPU. A 64-bit machine can run 32 bit software, but not the other way around.

### ARM CPU architecture
Advanced RISC Machines (ARM)

AMD doesn't manufacture CPUs, they produce designs and hardware other vendors produce.
- System on Chip (SoC) => All controllers (Audio, video, networking, storage) are part of the CPU
- Simpler instructions that x64 / x86
- Thermally and power efficient (longer battery life)
- Used on Apple devices, Android phones mostly, Chromebooks, some Windows laptops.

- OS and hardware drivers must be compiled to operate on an ARM device  
- Emulation is possible to execute x86 and x64 applications, with a performance penalty.

### CPU features
- SMT (Simultaneous Multithreaded) makes it possible to ake execution more efficient, even though most programs are single-threaded.
- SMP Symmetric Multo processing: A SMP OS can allow for running application processes whenever CPU is available. Costly, more common in servers and high-end workstations.
- Single, dual, and multicore with multiple processors. 
- A computer can run multiple OS with Virtual Machines(VM) if the CPU supports it.

### CPU Socket Types

Intel ad AMD use different socket types.
- All use a Zero Insertion Force mechanism (ZIF), to reduce the risk of damaging pins.

#### Form Factors
- Intel: Land Grid Array (LGA). Placed on a hinged plate and secured with a locking lever. Rectangular.

- AMD: Pin Grade Array (PGA). Align Pin 1 of the socket with Pin 1 of the CPU. Square shape.

To remove:
- Remove the heat sink with a gentle twist to avoid the CPU sticking to it.
- Release the latch before attempting to take the CPU
- Clean old thermal paste
- Apply new thermal paste, just a bit

### CPU types and motherboard compatibility

#### Generations
CPUs are released with architectural improvements and new socket designs often. These are classified with the term Generation.
- Motherboard compatibility is limited to same generation CPUs
- It's rare that you can upgrade the CPU without upgrading the motherboard

CPU brands target different segments of the market with each generation

- Desktops => From budget to Gaming PCs
- Workstations => More powerful PCs for video editing, software development, or business PC
- Servers =>  Designed for more reliable and greater workloads. Support multi-socket for CPUs. Support for tens of hundreds of EEC RAM
- Mobiles => Mobiles tend to use mobile CPUs with different form factors. They're soldered to the motherboard so can't be replaced.
