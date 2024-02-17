# Run ubuntu as docker image

## Pull image
`sudo docker pull ubuntu`

For specific image: 
`sudo docker pull ubuntu:20.04`

# Run
`sudo docker run -ti --rm ubuntu /bin/bash`

- --rm tells docker to remove container when stopped
