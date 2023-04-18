To enter the cron tab
`sudo crontab -e`

In each line of the file there is a cron task

Run script every day at 6pm
`0 18 * * * /path/to/your/script.sh`

Run script every dat at 00:00
`0 0 * * * /path/to/your/script.sh`

### Find the crob job logs
To see where the log of a cron job is run a grep on the sys log with the name of the script:
`grep "path/to/file/script.sh" /var/log/syslog`