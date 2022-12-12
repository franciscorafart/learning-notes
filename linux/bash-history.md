
## Bash history

`$ history` => History of all commands run by user
Hack: If you insert a space before a command, it won’t be logged into the bash history
#########################
### Bash History
##########################
 # showing the history
$ history
# removing a line (ex: 100) from the history
$ history -d 100
# removing the entire history
$ history -c
# printing the no. of commands saved in the history file (~/.bash_history)
$ echo $HISTFILESIZE
# printing the no. of history commands saved in the memo
echo $HISTSIZE