# Pipes

### Linux philosophy
To write small programs that do one task very well.

### Data streams
stdin (0) => Data that is fed or runs in the program
stdout (1) => Standard oupput. Data printed to the terminal
stderr (2) => Error messages

### Pipe |
The pipe command connects one command to the other, by hooking up input and output.
Command Output | Commound Input

#### Example

`ls -lSh /etc/ | head` => The ls command lists files orders by size in the `/etc` directory, while the head command displays the first 10 (default head value)

`ls lSh /etc/ | head -n 20 | tail -n 1` => 20th largest element of /etc/