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
