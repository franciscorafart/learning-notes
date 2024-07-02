# Go Buster

Go Buster is a tool to scan websites/apps to find hidden urls

`gobuster -u http://fakebank.com -w wordlist.txt dir`

## Blacklist a response code
`gobuster dir -e -u <url> -w /usr/share/wordlists/dirb/common.txt -b 301`

# Wordlists

Package with common words to test urls, passwords, and other resources
Word list files are stored in `/usr/share/wordlists/`