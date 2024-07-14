# How to run a script on system startup using Systemd

## 1. Startup script
1.1 Create a startup script `frank-startup.sh`
1.2 Put it into `/usr/bin/frank-startup.sh`

## 2. Create a systemd service file
Create `frank-startup.service` file in `/etc/systemd/system` with the following content:

```
[Unit]
Description=Example systemd service.

[Service]
Type=simple
ExecStart=/bin/bash /usr/bin/frank-startup.sh

[Install]
WantedBy=multi-user.target
```

## 3. Reload deamon and enable service

Reload daemon
`sudo systemctl daemon-reload`

Enable service
`sudo systemctl enable frank-startup.service`

Start service
`sudo systemctl start frank-startup.service`