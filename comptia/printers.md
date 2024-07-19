# Printers

## Unboxing and setup location

- Main technologies: inkjet, laser

### Properties of printers
- Page per minute (ppm): Varies depending on type of print.
- Maximum supported resolution: Dots-per-inch (DPI). Not the same as pixels per inch (ppi)
    - Horizontal resolution determined by printer engine
    - Vertical resolution determined by paper handling mechanism
- Paper handling: Types of paper and sizes
    - Overloading will cause paper jams => In high output situations like an office high load capacity is important
- Options and functionlities: Duplex unit (both sides paper automatically), finisher (folding, stabling, hole punching)

### Setup location
- Near power outlet with clear and well managed cables, on a flat surface
- Space for airflow, ventilation (for Ozone), and not in sunlight. Paper stored with no humidity or extreme temperatures
- Consider distruption to employees in its placement and if it prints confidential information

### Unboxing

- Handle with care
- Remove strips and supports of printers components before switching it on
- Leave printer to acclimate for 24 hrs before using to reduce risk of condensation. Same with paper.

## Print device connectivity

Printers support a range of connection interfaces

### USB
- Type B connector
- Usually PC will detect model of printer and install drivers automatically (Windows)
- Linux uses drivereless Internet Printing Protocol (IPP) for printers so no driver has to be installed

### Ethernet
- Most printers have an RJ-45 connector to get an IP from a DHCP server.
- Printer's IP can be stored on a host's DNS to connect via a FQDN (Fully qualified Domain Name)
- Network configuration on device's display or via a web interface

### Wireless Print Device Connectivity
- Either bluetooth or WiFi
- Two WiFi connections:
    1. Infrastructure Mode
    - Connect printer to AP and make it available to clients via an IP or FQDN
    2. WiFi direct
    - Configure software-implemented access point to print device

## Printer Drivers and Page Description Languages

- Printing apps are What you see is what you get (WYSIWYG) => What you see in the screen is what gets printed out
- Different OSs using the printer will require suitable drivers
- Plug and Play (PnP) => Windows will usually select and install the appropiate driver
- Page Description Language (PDL): Raster file with instructions for printer to place dots on a page. PDL supports:
    - Scalable fonts: Fonts defined by vendors that can be scaled with flexibility (Not old bitmaps that supported specific font sizes)
    - Vector graphics: Instructions on how drwa an image insted of pixel-by-pixel Bitmap
    - Color printing: Printers use the reflective properties of Cyan, Magenta, Yellow and Black (CMYK) instead of the RGB of screen displays. PDL supports correct translation between on-screen color and print out.
- Choice of PDL depends on compatibility with software apps:  PostSCript (Adobe), Printer Control Language - PCL (HP)

## Printer Properties
- Drivers and Apps have default configuration for a printer

Windows
- Printer properties:
    Config for printer object and underlying hardware: sharing, port, driver update, duplex setup, default paper, default tray
    About Tab: Info on the printer and drivers
- Printe Preferences

## Printer Preferences
- Sets default print job options: paper orientation, color/black-white.
- Set for general or per=job basis

### Paper quality
- size and type of paper
- draft / normal mode (save ink)
- color / grayscale

### Finishing
- duplex option
- multiple images per sheet
- portrait / landscape

## Printer sharing
- Some printers have an embedded print server => Allows clients to connect directly without going through a computer or server
- Public printer: No access controls, any guest can use
- 
### Windows Print Server Configuration
- Any device with installed printer device can share tehe printer object with other computers
- Print server ca be connected to the printer over USB or network, giving administrator more control over who can use it.
- Printer object can have permissions enabled
- Share Sharing tab in printer properties
- If connected clients have different OS, you need to install the corresponding drivers
- Windows 10: Type 4 drivers => Single driver will work with multiple devices. Specific drivers are obtained by client via Windows Update instead of from print server.

### Shared Printer Connections

- Ordinary users can connect to printer if server admin gives them access => They can look for network on Network tab on file explorer

## Printer Security

Issues: Access to print services and print out of confidential material.

### User Authentication
- Print servers can be put behind user authentication to prevent unauthorized people from using it.
- They can be configured in Print Share
- Authentication could be in the device itself

### Secure Print and Badging
- Secured print => Held in the device until user authenticates
- Release authentication with: PIN, Badge (card reader)
- Secure prints are cached for a limited time

### Audit logs
- Device can be configred to log each job
- Used to identify printed documents or to identify unauthorized release of information
- Print-device logs can be configured to be sent to a centralized log server

## Scanner configuration

- Office printers are usually Multi-function devices (MFD), that include scanners
- Optical Character Recognition (OCR) => Software to convert scanned text into characters for edit

### Scanner Types
- Flarbed scanner => Created bitmap of object by shining line at the object on a glass surface.
- Automatic Document Feeder => Passes Paper over fixed scan head (Better for multipage documents)

### Network Scan Devices
- MFD or standalone scanner be configured as a network device like a printer. On a network, scan output can be redirected:
    - Scan to email: Scanner must be configured with IP address of SMTP server
    - Server Message Block (SMB) or scan to folder: Scan stored as a file on a shared network folder.
    - Scan to cloud: File uploaded directly to cloud storage (Dropbox, OneDrive).

# Replace Print Device Consumables

