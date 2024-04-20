# Docker

## Dockerfile
The dockerfile is a text file that contains the instructions to create a Docker image.

```
FROM node:20

WORKDIR /usr/src/app

COPY ./index.js ./index.js

CMD node index.js
```

`FROM` specifies source image
`WORKDIR` Set the working directory in the container, to not mess up the container's own file system by overwriting by accident.
`CMD` => commands to run

### Build

To build the image:
`docker build -t <my-image-name> .` => -t is to specify the container tag

### Run
`docker run <my-image-name>`

### Run on specific ports
`docker run -p 3001:3000 <my-image-name>` => This will run the container on docker container's port 3000, and host's port 3001

## Docker Container
A Docker container is the instanciation of an image.

## Docker Shell

`$ docker exec -ti <container-name> bash`

You can run lone linux commands on the container doing:
`$ docker exec -ti <container-name> <command>`

Login into a postgres container:
`$ docker exec -ti <container-name> psql -U <db-user> <db-name>`

### Copy file from host to container
`cp path-to-file <docker-container-name>:<path-to-file-in-container>`

For example:
`cp ./index.js my-container:/usr/src/app/index.js`

## Postgres/Docker

NOTE: Make sure docker and docker-compose are on the same context (default).

`docker context list`
`docker use <context_name>`

#### Reset database

`docker compose down` => Stop and remove containers, images, and volumes.
`docker volume ls` => Volume is permanence layer
`docker volume rm <id>`

# Docker Compose

Docker compose is a tool to orchestrate several containers, and allows to build complex applications.

### Bind Mount
Bind Mount is the process of bining a file in the host machine to the container. We can do this in Docker, or with docker compose under
the `volumes` key in the `docker-compose.yml`

```
...
    volumes:
        - <path-host-machine>:<path-docker-container>
```

The files will be the same, a change in one changes the other.

### Build and run on the background:

`docker-compose up -d` Build and run dettached

### Ports

A container has ports assigned with the following format 
`5000:6000`

This is a mapping between host machine and docker container ports.

The first part `5000` is the host machine's exposed port, the second `6000` is the docker container's exposed port.

These services are mapped. If for example you run a postgres instance on it, it would mean that if your machine is running:

A) On host machine => connect on port `5000`
B) On a Docker container, connect to it on port `6000`

### Commit images
In docker you can commit an image with changes you've made to it. For example, if you run a docker ubuntu container and install 
a few packages you don't want to re-install everytime you spin it up, you can commit those changes into a new image to avoid this.

`docker commit <container-id-or-container> <new-image-name>`

You can use this new image in your docker compose project by specififying it under the image key of a resource. For example:
```
node-app:
    image: <my-image-name>
    ports: 3000:3000
```

## Volumes
Docker volumes are designed to store container data. By default, DB containers will not preserve data. To preserve data we can
preserve volumes in our docker compose file.

### Bind Mount volume
With this method we map a file in our host system to the container. It is done in the volumes key *under* the service. This will create
a `mongo_data` in the host's file system, and map it to `data/db` inside the container (Add the directory to .gitignore)


```
services:
    mongo:
        ...
        volumes:
            - ./mongo_data:/data/db
```

### Named volume
In this case, we specify a name for the volume outside the services in the docker-compose.yml.
Docker will manage this volume, so it could be hard to figure out where it put it.```
services:
    ...
    mongo:
        ...
        volumes:
            - ./mongo_data:/data/db

    volumes:
        mongo_data

```