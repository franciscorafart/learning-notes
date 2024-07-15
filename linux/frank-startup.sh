#!/bin/bash

# Filecloud
cd /home/frank/Desktop/filecloud

# Take service down first
docker-compose down

# Restart
docker-compose up -d

# Plex media

# Wait for Frank drive to mount
frank_mount_point="/media/frank/Frank"
frank_device="/dev/sdc1" # Toshiba drive

# Function to check if Frank hard drive is mounted
check_frank_mount() {
    if grep -qs "$frank_mount_point" /proc/mounts; then
        return 0  # Frank hard drive is mounted
    else
        return 1  # Frank hard drive is not mounted
    fi
}

# Attempt to mount Frank hard drive if not already mounted
if ! check_frank_mount; then
    echo "Frank hard drive is not mounted. Attempting to mount..."
    sudo mkdir -p "$frank_mount_point" # Create dir if it doesn't exist
    sudo mount "$frank_device" "$frank_mount_point"
    if [ $? -eq 0 ]; then
        echo "Frank hard drive mounted successfully."
    else
        echo "Failed to mount Frank hard drive."
        exit 1
    fi
fi


## Grant Plex access to Frank hard drive and folders
setfacl -R -m u:plex:rx /media/frank/
setfacl -R -m u:plex:rx /media/frank/Frank/
setfacl -R -m u:plex:rx /media/frank/Frank/Videos
setfacl -R -m u:plex:rx /media/frank/Frank/Music

# Give access to Samsung drive
setfacl -R -m u:plex:rx /media/frank/Samsung/

## Restart service
systemctl restart plexmediaserver