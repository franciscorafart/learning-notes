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
