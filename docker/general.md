### Docker container Shell

`$ docker exec -ti <container-name> bash`

You can run lone linux commands on the container doing:
`$ docker exec -ti <container-name> <command>`

Login into a postgres container:
`$ docker exec -ti <container-name> psql -U <db-user> <db-name>`
