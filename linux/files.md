## File System
$ cd / => Root directory of the Linux file system
Everything in Linux is a file, even directories and mounted devices. They all appear as children of the root directory. Don’t confuse root directory / with /root directory.

/bin => binaries or executables available to all users
/sbin => binaries for super users only, for system administration
/boot => Files for starting the system (don’t touch it)
/home => Directories for each user/
/local => Store user binaries (Not on linux mint)
/root => Root user. Doesn't live in /home
/dev => device files. Generated on the fly or on-boot (hard disks, partitions)
/etc => system configuration files (Good idea to make a copy of this directory)
/lib => shared library files (don’t touch, package manager updates it)
/media => External storage mounted (external hard disk, usb stick)
/mnt => Like media, but not used these days (CD rom, floppy disks). Manual mount of devices.
/tmp => temporary files
/proc => Info about hardware of computer
/sys => Info about devices, drivers and kernel (not use directly)
/srv => Data for servers (not use directly)  
/run => Used by processes
/usr => Old user directory. Taken by the root directory. Usually more elements than in root directory. Most binaries run from here, not root.
/var => Variable length files

$ cd => change directory 
$ pwd => print working directory
$ ls => list elements of directory

## File timestamps

`$ stat /file` => Statistics of file, including timestamps
Access => Last time file was read
Modify => Last time content was modified
Change => Time when metadata of the file was changed (permissions, owner)

`$ ls -l` => S 
`$ ls -lt` => Modification time
`$ ls -lu` => List with access time
`$ ls -lc` => Change time

`$ ls -lc –full-time` => Dsiplay more specific time

`$ touch filename` => Create a file or update timestamp to current time if file exists. Use "" to have empty space on a file name (not good practice)

## File types

In linux, the file type is determined on the header, not the extension name. Files don’t need extensions in Linux (Windows needs them), they’re useful for human readability.

`$ file /path_to_file` => See the file’s type.

File extensions don’t determine the file type, but they may be required by graphical applications to be able to open a file.

`$ ls -l` output

The first character of the output shows  what kind of file it is
`-` => Regular file
`-d` => ditectory (special type of file)
`-l` => symbolic link
`b` => block device
`c`=> char device
`s` => socket
`p` => named pipe

## Viewing files

`$ cat path_to_file` => Display text for file. Great to display small text files (cat: word concatenate)
`$ less path_to_file` => To view large files paginated. ctrl + f: Forward page |  ctrl + b: Go back
`$ more path_to_file` => page
`$ tail path_to_file` => last n (10 default) lines of the file
`$ head patj_to_file` => firty n (10 default) lines of a file
`$ watch <command>` => Runs a command every n (2 default) seconds. Useful for `ls`

### Create dir
`$ mkdir directory_name` => Create dir

### Directory structure
`$ mkdir dir3/dir4/dir5` => Create directory structure. This creates an error as dir3 and dir4 don't exist, directpries are created from right to left. Solution
4`$ mkdir -p dir3/dir4/dir5` -p stands from parent.

### Copy

`$ cp file1 file2` => If file2 doesn't exist it will create it with file1 content. If it exists, it overwrites the content of the file.
`$ cp -i file1 file2` => Interactive. It will ask you wether to complete the copy.

#### Copying directories
`$cp -r dir1 dir2` => Recursive copying of directories.

### Move and rename files/directories
`$ mv path_to_file directory_to_move` => Move file
`$ mv path_to_file path_to_file2` => Rename

*** Always use `-i` to get a prompt in case of potential overwriting.

### Removing files
rm file1
 
# being verbose when removing a file
rm -v file1
 
# removing a directory
rm -r dir1/
 
# removing a directory without prompting
rm -rf dir1/
 
# removing a file and a directory prompting the user for confirmation
rm -ri fil1 dir1/
 
# secure removal of a file (verbose with 100 rounds of overwriting)
shred -vu -n 100 file1

# Get path of file
`realpath <file.ext>` => Gives the absolute path of the file
`readlink -f <file.ext>` => Same

# Finding files and directories

Two commands

1. locate (mlocate)
Searches by string and returns a list of path names containing that string. It uses a database. Run `sudo updatedb` to update the database mlocate uses. 

To see the db run `ls /var/lib/mlocate`

- General information of the database `mlocate -S`
- Math only the basename for the specified pattern `mlocate -b name` ## basename is the name of the file on the directory, not the whole path
- Find a file containing a string: `locate name` ## returns any file path containing that string partially S
- Find by exact base name `locate -b '\name'`
- Find a file that exists (In case it ws deleted bu still listed on db) `locate -e name`
- Ignore the letter case `locate -i Name`
- Search by using regex `locate -b -r '^shadow.[0-9]'`

2. which

Locates a command and returns absolute path of executable when the command is run

- `which ls`
- Find all executables that match a string `which -a ls`