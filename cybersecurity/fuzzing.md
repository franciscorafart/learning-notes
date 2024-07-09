
# Burp Suite

Tool to capture API requests, Fuzz apis, and spider web applications.
- Fuzzing is automatic bug finding. Query different urls and payloads to have the API give an unexpected response that can give more information.
- Spidering is a technique to find the directories in a website through hyperlinks, though it can't find hidden paths. => Brute force with Kiterunner or GoBuster

## Web Proxy
To capture requests with Burp Suite, before sending them to the browser, we use a Web Proxy (FoxyProxy)

# Go Buster

Go Buster is a tool to scan websites/apps to find hidden urls

`gobuster -u http://fakebank.com -w wordlist.txt dir`

## Blacklist a response code
`gobuster dir -e -u <url> -w /usr/share/wordlists/dirb/common.txt -b 301`

# Wordlists

Package with common words to test urls, passwords, and other resources
Word list files are stored in `/usr/share/wordlists/`