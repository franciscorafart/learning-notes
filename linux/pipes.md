# Pipes

### Linux philosophy
To write small programs that do one task very well.

### Data streams
stdin (0) => Data that is fed or runs in the program
stdout (1) => Standard output. Data printed to the terminal
stderr (2) => Error messages

### Pipe |
The pipe command connects one command to the other, by hooking up input and output.
Command Output | Commound Input

#### Example

`ls -lSh /etc/ | head` => The ls command lists files orders by size in the `/etc` directory, while the head command displays the first 10 (default head value)

`ls lSh /etc/ | head -n 20 | tail -n 1` => 20th largest element of /etc/


Pipping is very useful for filtering, as you can concatenate command to get specific information you need.


# Command redirection

Sometimes we want to direct the output of a command to another program or save it to a file:

`>` Output redirection: 
For example, redirect the output of `ls` to a file: `ls -l > s.txt`
If you do it mutiple times, the file will be overwriten.

`>>` Output redirection with append:
Redirect the output of `ls` to a file: `ls -l >> s.txt`
Double greater than will append to the content if the file already exists.

Redirect ouput to another terminal input:
For example, open a second terminal and type: `ifconfig dev/pts/0` => dev/pts/0 is the file of the first open terminal (everything in Linux is a file)

# Error redirection
In the std in and out, the default stream is 1 , whis is the command's output. The stream 2 are the error messages. To redirect an error message do `2>` putting a 2 before the greater than symbol. For example:
`cat inexistent_file.txt 2> error.txt`

# tee
To divide the output of a command both to the terminal and a file we can use the `tee` command
`$ ifconfig | grep ether | tee mac.txt`