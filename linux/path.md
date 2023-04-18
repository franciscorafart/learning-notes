## Path
Absolute path: Specify from the root directory. Always starts from forward slash `/`

Relative path: 
Path defined from the current working directory

Important:
~ is the user’s home directory, not the root directory /

$ . => Current directory
$ .. => Parent directory

Both work, but absolute paths are more reliable, as it doesn’t rely on the current directory to be a specific one to work

$ tree => Recursive directory visualization tool
$ tree -d => Print out only directories
$ tree -f → Print out only files

### Linux Paths

. # => the current working directory
.. # => the parent directory
~ # => the user's home directory

cd # => changing the current directory to user's home directory
cd ~ # => changing the current directory to user's home directory
cd - # => changing the current directory to the last directory
cd /path_to_dir # => changing the current directory to path_to_dir 
pwd # => printing the current working directory
 
# installing tree
`sudo apt install tree`

tree directory/ # => Ex: `tree .`
`$ tree -d .` # => prints only directories
`$ tree -f .` # => prints absolute paths
