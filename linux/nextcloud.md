# 📦 Nextcloud Installation on Linux Mint (Non-Docker)

This guide walks you through installing Nextcloud on a Linux Mint server without Docker, using Apache, PHP, and MariaDB.

---

## ✅ Requirements

- Linux Mint (or Ubuntu-based distro)
- Static local IP (recommended)
- Sudo privileges

---

## 🛠️ Step 1: Install Required Packages

```bash
sudo apt update
sudo apt install apache2 mariadb-server libapache2-mod-php \
 php php-gd php-json php-mysql php-curl php-mbstring php-intl \
 php-imagick php-xml php-zip php-bcmath php-gmp php-common php-cli unzip
```

## 🗄️ Step 2: Configure the Database
```
sudo mariadb -u root
```

Then in the MariaDB shell:

```
CREATE DATABASE nextcloud;
CREATE USER 'nextclouduser'@'localhost' IDENTIFIED BY 'YOUR_STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nextclouduser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## 📥 Step 3: Download Nextcloud

```
cd /tmp
wget https://download.nextcloud.com/server/releases/latest.zip
unzip latest.zip
sudo mv nextcloud /var/www/
sudo chown -R www-data:www-data /var/www/nextcloud
sudo chmod -R 755 /var/www/nextcloud
```

## 🌐 Step 4: Configure Apache

Create a virtual host config file:

```
sudo nano /etc/apache2/sites-available/nextcloud.conf
```

```
<VirtualHost *:80>
    ServerAdmin francisco
    DocumentRoot /var/www/nextcloud
    ServerName 192.168.68.62

    <Directory /var/www/nextcloud/>
        Require all granted
        AllowOverride All
        Options FollowSymLinks MultiViews
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/nextcloud_error.log
    CustomLog ${APACHE_LOG_DIR}/nextcloud_access.log combined
</VirtualHost>
```

Enable the site and required modules:
```
sudo a2ensite nextcloud.conf
sudo a2enmod rewrite headers env dir mime
sudo systemctl restart apache2
```

## 🧪 Step 5: Test Apache Config
```
sudo apachectl configtest
# Should return: Syntax OK
```

## 🌍 Step 6: Complete Web-Based Setup

In your browser, go to:
```
http://192.168.68.62
```

Fill in:

Admin username & password

Data folder (e.g. /home/frank/nextcloud-data)

Database user: nextclouduser

Database password: YOUR_STRONG_PASSWORD

Database name: nextcloud

Host: localhost

## 🛡️ Optional: Enable HTTPS with Let's Encrypt
🛡️ Optional: Enable HTTPS with Let's Encrypt

```
sudo apt install certbot python3-certbot-apache
sudo certbot --apache
```

## Notes
Use Nextcloud's built-in updater for future upgrades.
Keep PHP, MariaDB, and Apache updated via sudo apt upgrade.
Apache runs as www-data; give this user access to any data folders used by Nextcloud.
Avoid placing your data directory inside /home/USERNAME unless permissions are handled carefully.

## Setup access via VPN - Meshnet

✅ Short Answer
To make your Nextcloud site accessible through both:

Your local IP (e.g. 192.168.68.62), and

Your NordVPN Meshnet URL (e.g. linux-server.nord),

You should either:

Use ServerName for the primary domain/IP

Add other domains using ServerAlias

🛠️ How to Modify nextcloud.conf
Open the Apache config:

```
sudo nano /etc/apache2/sites-available/nextcloud.conf
```

And modify like this:

apache
```
<VirtualHost *:80>
    ServerAdmin francisco@rafart.tech
    DocumentRoot /var/www/nextcloud
    ServerName 192.168.68.62
    ServerAlias linux-server.nord

    <Directory /var/www/nextcloud/>
        Require all granted
        AllowOverride All
        Options FollowSymLinks MultiViews
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/nextcloud_error.log
    CustomLog ${APACHE_LOG_DIR}/nextcloud_access.log combined
</VirtualHost>
```
You can even add more aliases if needed:

apache
```
    ServerAlias linux-server.nord another.name.local
```

Then reload Apache:

```
sudo systemctl reload apache2
```

✅ Also: Update Nextcloud’s Trusted Domains
Apache will serve the request, but Nextcloud itself will reject requests from unknown domains/IPs unless you explicitly trust them.

Edit the config file:

```

sudo nano /var/www/nextcloud/config/config.php
```
Find the 'trusted_domains' array and add your new hostname or IP:

php ```
'trusted_domains' =>
  array (
    0 => '192.168.68.62',
    1 => 'linux-server.nord',
  ),
```

Save and restart Apache:

bash
```
sudo systemctl restart apache2
```

✅ Done!
You can now access your Nextcloud via both:

http://192.168.68.62

http://linux-server.nord (as long as Meshnet is connected and routing properly)


