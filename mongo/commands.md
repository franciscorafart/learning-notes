#### Useful Mongo shell commands

- `show collections`
- `db` => current db
- `use nameOfDb` => Set current db
- `quit()`
- `db.CollectionName.find()` List all elements in a collection
- `db.dropDatabase()`

##### Troubleshooting local Mongo

- Make sure binary is installed
  `ls ls /usr/bin/mongod`

- If not, install:
  `sudo apt-get install -y mongodb-org`
  https://scrapebyitguy.com/install-mongodb-linux-mint/

- Start service
  `sudo service mongodb start`

- Check service status
  `sudo service mongodb status`

- If `mongo` shell doesn't work, reinstall mongo client:
  `sudo apt install mongodb-clients`