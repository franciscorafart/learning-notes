# Troubleshooting
Problems have a cause, symptom, and consequence.

### compTIA model

1. Identify problem
- Gather information from user who reported
- Start documentation
- Backups
- Inquire environmental or infrastructure changes

2. Theory of probable cause
3. Test theory
** If it doesn't work, start another theory **

4. Plan of action to resolve problem and implement solution
5. Verify full-system functionality
6. Document findings, actions, outcomes.


- Go step by step to reproduce the issue.
- Isolate the problem
- Establish theory
- Escalate, but always evaluate business needs and cost first.
    - To senior technical staff, subject matter experts (SME), and developers in company
    - Suppliers and manufacturers
    - Careful of not disclosing proprietary info
- Plan of action (Generic approach)
    - Repair (evaluate cost and time)
    - Replace (evaluate cost, or warranty) => Issue Return Maerials Authorization (RMA) from vendor.
    - Workaround: If not critical, document the issue and workaround.
- Implement the solution: Get authorization and be mindful of disrupting other operations.
    - ** Test after each change **

** Troubleshooting is about fixing a problem AND manitaining the resources that users need to do their work.**

- Verify and document
    - Before closing a ticket, verify with the user that the problem is solved.
    - Document findings, actions, and outcomes => Knowledge base or FAQ
    - Other people will rely on the documentation and it's a proof of troubleshooting activity. Check for spelling and grammar errors.


# BIOS and UEFI configuration

Basic Input / Output system (BIOS): Low-level UI for configuring motherboard, provided by the firmware.
    - Basic UI with keyboard navigation

Unified Extensible Firmware Interface (UEFI): 
-  Modern BIOS, with 64-bit support
- GUI and mouse operation
- network functionality, and security.

System settings triggered by a key stroke on boot (Esc, F1, F2, F10, F12)

## Boot and device options

Boot options sequence specifies the order in which the devices are booted.
- Fixed HDD / SSD => These devices should be connected to the lowest SATA number, but you can specify it in the BIOS.
    SSD to Sata => Listed as SATA/AHCI
    SSD to PCIe => AIC (Add-in Card) (example: https://www.newegg.com/plextor-m8pe-256gb/p/N82E16820249081)
    SSD M.2 => Listed as NVMe
- Optical drive
- USB => Usually for OS installs or repair utilities
- Network / PXE => If an admin want's to use an external server to configure desktop machines

## USB permissions
In Security, we can enable permissions for USB drives, as they pose a security risk, or even disable them.

## Fan
Options to regulate fan speed and tolerable temperature.

## Boot passwords and secure boot
- Boot password => Password before the OS loads.
- Supervisor/Administrator/Setup password => Protect access to system setup.
- User/System password => Lock access to the whole computer, very secure. Usualy used on servers without interactive logon.

- Secure boot => Computer firmware configured with cryptographic keys that can identify trusted code. System firmware checks OS boot loader to ensure it is digitally signed by the vendor => Avoids boot loader modified with malware.

## Trusted Platform Modules (TPM)
UEFI systems provide built-in secure storage of cryptographic keys.

Hashes => For verifying two copies of data are the same, original data cannot be recovered from it.

Trusted Platform Module (TPM)
Specification for Harware-based storage of digital certificates, cryptographic keys, and hashed passwords
- It has a unique unchangeable key called `endorsement key`
- At boot time TPM compares hashes of key system state data to ensure they haven't been tampered with.
- It can be enabled or disabled in the system setup program or in the OS

Hardware Security Module (HSM)
- A thumb drive to store cryptographic material in case disk needs to be moved. 
- Secure: It has to be authenticated to be used (password, pin, fingerprint)

## ASCII => byte equivalent for characters
## Unicode => extended byte equivalent for characters
## MAC address => Device information.

## Troubleshoot Power and Disk issue

### PSU Steps
1. PSU converts AC to DC voltage (12V)
2. Hard disks and fans are supplied first with 12V
3. PSU tests 5V and 3.3V supplies.
4. Sends power to processor.

If power supply problem:
- Check cables connected properly
- Check electric supply
- Switch cables
- Disconnect extra devices (PSU underpowered)
- Test PSU with multimeter

### Troubleshoot POST issues
** Power on self-test (POST) **
- After power is supplied the system executes a firmware program called POST to check that the hardware is present and functioning correctly.
- Most systems configured to show a logo when performing POST test
 
#### Black screen (POST test not reached)
If PC is powered, system doesn't start, and there's no issue with display it's likely POST isn't executing.
** If POST doesn't work, then there's a hardware problem **

1. System update after updating firmware may have failed. => Reset procedure
2. Check cabling and connections
3. Check faulty interfaces and devices => Problem might be generated by one of the devices in the PC
4. Check CPU failure or firmware update

### POST errors
POST error usually signaled with a beep code;
1. 1 short beep or silent => OK
2. 2 beeps => POST error, shown on screen
3. No beep => Power Supply, motherboard problem, faulty on-board speaker.
4. Continuous beep => Problem with system memory or memory controllers
5. Repeating short beeps => Power supply or motherboard problem
6. 1 long, 1 short beep => Motherboard problem
7. 1 long, 3 short beeps => Video adapter error
8. 3 long beeps => Keyboard issue (Probably key being pressed)

### Troubleshoot POST issues
- After POST ends, system boots from devices specified in the boot sequence.
- If fixed disk not found on boot, check that it's powered => Drive activity on a led in front panel.
- If no boot drive, system might attempt to boot from network.

#### Boot Sector issues
Corruption of files, malware, multiple OS, fault of disk might prevent system to boot from disk

2 ways of formatting boot information:
1. Master Boot Record (MBR) => Legacy. First sector of the first partition contains info of partitions and code that points to location of active boot sector. This will typically be Boot Configuration Data (BCD) in Windows and GRUB or LILO in Linux. Only one boot sector can be active.

2. Globally unique Partition Table (GPT)
Boot information is not on single sector

Damage to these records results in `Boot Device Not Found errors` / `Invalid Drive Specification` => If problem caused by malware useboot disk option in anti-virus
Or Use repair options with OS setup disk.

#### Troubleshoot OS Errors or Crash Screens
Error messages after a boot disk has been located and executed are usually Software or Device Drivers

##### Blue Screen of Death (BSOD)
- System memory fault
- Hardware device Driver issue
- Corruption of OS files

### Troubleshoot Drive availability
Symptoms:
- Unusual noise in HDD (Grinding noise or clicking sound)
- No disk activity LEDs
- Constant LED activity => Maybe not enough RAM and system is being used for paging (virtual memory)
- Bootable device not found
- Missing Drive on OS => If system doesn't appear in Disk Management tool suspect faulty cable or Hardware error.
- Read / Write failure => On an HHD typically because of bad sector, damaged by power failure or mechanical fault. It can be diagnosed by running a test like `chkdsk`. On an SSD because of one or more bad blocks.
- Blue Screen of Death => Failed disk and file corruption.

When troubleshooting, try to make data backups as soon as possible to minimize risk.

### Troubleshoot drive reliability and performance
SMART test - Self-Monitoring Analysis, Reporting Technology: 
- Self-diagnosis program that fixed disks have. 
- Can alert the OS if a failure is detected.
- Most vendors supply utilities to test drives.
- SMART tests can determine if there's damage to a disk and performance metrics => IOPS (Input/output Operations Per Second)
- Extended read/write times can happen due to sector (HDD) or block (SSD) failures.
- If files are corrupted on a HDD you can run a Disk Recovery utility. To do it on an SSD you need a very specialized tool.

## Troubleshoot RAID failure
2 scenarios for RAID failure: Failure of device within array, or failure of whole volume.

- If one device fails it is listed as degraded, but it's data will be accessible to read (unless it's RAID 0)
- If one device fails on RAID 0, whole volume fails.
- Most desktop RAID systems tolerate the failure of one disk. It should be replaced ASAP.
- If it supports hot swapping, new disk can be inserted into the chassis of the computer or into disk chassis. => Careful not to remove wrong disk when hot swapping.
- Once the disk is changed, the array can be rebuilt wth the RAID configuration utility.
- Make sure RAID is enabled in BIOS and that Windows has drivers to recognize RAID controller.
- If RAID 0 failed because of one drive, hopefully you can resstore from a Recovery Backup Set.

## Troubleshoot system display issues
1. Most of the time it's connection issues
2. Drivers. Make sure to have latest operating system and firmware.
3. Uninstall and Reinstall drivers => Windows update or vendor driver. Make sure you uninstall first, not install over installed driver.

### Video burn
- Newer OLED displays can have screen burn like in the old days, but still not so common. Use screensaver.
- This happens when a pixel stays too long in the same color and can't release the color => image is seen washed over.

## Troubleshoot Common components

#### Overheating

Overhear will damage components. Odors and smoke always indicate the PSU is overheating. Sometimes burn smell happens when vents are clogged with dust.
- Systems come with internal temperature monitoring systems.
- Ensure CPU fan is working => Lifetime and performance of processor depend on lower temprature.
- Make sure heatsink is properly fitted to processor, clean old thermal paste.
- Cover holes in the back and front of the PC
- Check if room for the PC is abnormally hot or gets direct sunlight

#### Physical damage
- Motherboard soldered chips could be damaged by ESD
- Pins or integrated connectors
- Dirt in connectors
- Capacitor swelling => If they're swollen or have residue they could be damaged.

## Troubleshoot performance
Hard problem to diagnose because the causes could be many:

- Check overheating: Throttling is a reduction of performance due to overheating
- Misconfiguration:
    - Use diagnosis tools to test performance to known baselines.
    - Check for bottlenecks. It is possible that one component is creating a bottleneck of performance (Hard disk).
    - Rule out issue with operating system and apps before assuming hardware issues. => Use diagnosis tools

## Troubleshoot inaccurate system datetime
- If system datetime is wrong, security systems such as auth will not work, as well as scheduled tasks
- Real Time Clocl (RTC) keeps the datetime and usually runs on a CR2032 battery.

## Troubleshooting Missing video issues
- Physical cables => "known good" technique of swapping cables
- Data source on monitor or project is set to the correct input channel

### Burnt out light bulbs
Projectors light bulbs often need to be replaced.
-  ** Intermittend projector image => Usually caused by heating **

## Troubleshoot video quality issues
Glitches on video display => Input source or device itself
- Dim image => Check brightness configuration or auto brightness. If not, display backlight failed (repair or replace)
- Fuzzy image => Input resolution doesn't match device's resolution
- Flashing screen => Check connections. If not, display backlight starting to fail.
- Dead pixels => There are software utilities to attempt to unstuck a fixed-brightness pixel. Sometimes they can be unstuck with a gentle press with an eraser.
- Burn-In => Image is permanently burned into the screen when a static image stays for too long. OLED screens more vulnerable to this. Solution: Use a screensaver.
    LED => Led backlight
    OLED => Each pixel has its own illumination.
- Incorrect color => Use system's configuration to match the color to the print out.
- Audio issues => Check audio output is correctly configured.