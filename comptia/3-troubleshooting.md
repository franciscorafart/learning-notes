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
- If it doesn't work, start another theory

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
    - Workaround: If not critical, document theissue and workaround.
- Implement the solution: Get authorization and be mindful of disrupting other operations.
    - ** Test after each change **

** Troubleshooting is about fixing a problem AND manitaining the resources that users need to do their work.**

- Verify and document
    - Before closing a ticket, verify with the user that the problem is solved.
    - Document findings, actions, and outcomes => Knowledge base or FAQ
    - Other people will rely on the documentation and it's a proof of troubleshooting activity. Check for spelling and grammar errors.


# BIOS and UEFI configuration

Basic Input / Output system (BIOS): Low-level UI for configuring motherboard provided by the firmware.
    - Basic UI with keyboard navigation
Unified Extensible Firmware Interface (UEFI): Modern Bios, with 64-bit support, GUI and mouse operation, network functionality, and security.
    - Cleaner Mouse UI


System settings triggered by a key stroke on boot (Esc, F1, F2, F10, F12)

## Boot and device options

Boot options sequence specifies the order in which the devices are booted.
- Fixed HDD / SSD => These devices should be connected to the lowest SATA number, but you can specify it in the BIOS.
    SSD to Sata => Listed as SATA/AHCI
    SSD to PCIe => AIC (Add-in Card)
    M.2 => Listed as NVMe
- Optical drive
- USB => Usually for OS installs or repair utilities
- Network / PXE

## USB permissions
In Security, we can enable permissions for USB drives, as they pose a security risk, or even disable them/

## Fan
Options to regulate fan speed and tolerable temperature.

## Boot passwords and secure boot
- Boot password => Password before the OS loads.
    - Supervisor/Administrator/Setup password => Protect access to system setup
    - User/System password => Lock access to the whole computer, very secure. Usualy used on servers without interactive logon.

- Secure boot => Computer firmware configured with cryptographic keys that can identify trusted code. System firmware checks OS boot loader to ensure it is digitally signed by the vendor. => Avoids boot loader modified with malware.

## Trusted Platform Modules (TPM)
UEFI systems provide built-in secure storage of cryptographic keys.

Hashes => For verifying two copies of data are the same, original data cannot be recovered from it.

Trusted Platform Module (TPM)
Specification for Harware-based storage of digital certificates, cryptographic keys, and hashed passwrods
- It has a unique unchangeable key called `endorsement key`
- At boot time TPM compares hashes of key system state data to ensure they haven't been tampered with.
- It can be enabled or disabled in the system setup program or in the OS

Hardware Security Module (HSM)
- A thumb drive to store cryptographic material in case disk needs to be moved. 
- Secure: It has to be authenticated to be used (password, pin, fingerprint)