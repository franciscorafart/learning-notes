# Simple reverse proxy server

1) Create reverse proxy config 
`sudo nano /etc/nginx/sites-available/reverse-proxy.conf`

```
server {
        listen 80;
        server_name <server_name>;

        location / {
                proxy_pass http://127.0.0.1:81;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
        }
}

```

2) Link to enabled sites
`sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/`


3) Test configuration
`sudo nginx -t`

4) Start / Restart service
`sudo systemctl start ngnix`
Or
`sudo systemctl restart nginx`