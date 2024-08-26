# Plex Media on Linux Mint Server

## Installation and firewall configuration
https://www.youtube.com/watch?v=O8_vwA03iW4

- Enable firewall traffic on port 32400

## Troubleshooting file access

### Change owner of dir
`sudo chown -R user: /path/to/dir`

- If Plex can't access folders then change plexmedia service and application's user and group owners
https://askubuntu.com/questions/458547/i-cannot-get-plex-server-to-see-any-directories

## Turn server off at midnight
`crontab -e`
`00 00 * * * poweroff`

## Remote access via NordVpn meshnet
[video](https://meshnet.nordvpn.com/how-to/remote-files-media-access/set-up-remote-plex-media-server)

- In network / Advanced configuration enable `Relay`
- Add comma serparated IP and FQDN of nord server: For example `http://10.212.23.23:32400, http://my-server.nord:32400`