### Docker container Shell

`$ docker exec -ti <container-name> bash`

You can run lone linux commands on the container doing:
`$ docker exec -ti <container-name> <command>`

Login into a postgres container:
`$ docker exec -ti <container-name> psql -U <db-user> <db-name>`

### Postgres/Docker

NOTE: Make sure docker and docker-compose are on the same context (default).

`docker context list`
`docker use <context_name>`

#### Reset database

`docker-compose down` => Stop and remove containers, images, and volumes.
`docker volume ls` => Volume is permanence layer
`docker volume rm <id>`

#### Build and run on the background:

`docker-compose up -d` Build and run dettached


### Ports

A container has ports assigned with the following format 
`5000:6000`

This is a mapping between host machine and docker container ports.

The first part `5000` is the host machine's exposed port, the second `6000` is the docker container's exposed port.

These services are mapped. If for example you run a postgres instance on it, it would mean that if your machine is running:

A) On host machine => connect on port `5000`
2. On a Docker container, connect to it on port `6000`

