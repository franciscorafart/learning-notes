# OAUTH2

OAuth is an open standard for authorization, and anyone can implement it.
OAuth and OAuth2 are different and not backward compatible.

It allows apps to obtain limited access to a user's data to be used to access resources in another app.

## How it works
- A user wants to access an application and logs in using a third-party authorization server (Google, Twitter, Apple) 
- The user logs in to the auth service, asking the user for access to the resources the app needs.
- The authorization server gives an authorization code to the client
- The client gives the app the authorization code in exchange for a token to access data on a resource server or whatever app they use. The token can be a JWT or an Opaque token, a custom token the user can't know anything about its content.