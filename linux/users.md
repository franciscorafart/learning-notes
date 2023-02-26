## Linux users

##########################
## Running commands as root (sudo, su)
##########################
       
# running a command as root (only users that belong to sudo group [Ubuntu] or wheel [CentOS])
$ sudo command
 
# becoming root temporarily in the terminal
`$ sudo su` # => enter the user's password
 # setting the root password
`sudo passwd root`
 
# changing a user's password
`$ passwd username`
 
# becoming root temporarily in the terminal
`$ su` # => enter the root password

# List all users
`$ cat /etc/passwd`
/sys =
In ubuntu by default there is no root user. You set up a user (yours) with root privileges (member of the sudoers group sudo) To set up root user you need to define its password.

`$ sudo su` => (substitute user) It spawns a terminal as a root user
`$ sudo command (super user do) => Run a root command without being in the root terminal. Prefer to avoids accidents.
