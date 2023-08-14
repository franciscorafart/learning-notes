# Jason Web Tokens

# What it is
- A JWT token has 3 parts: Header, Body and Signature.
- When a user authenticates the server will send a hashed (base64) token that contains these 3 elements.
- Header: Thetype of token and the hashing algorithm used
- Body: The fields that have to be stored in the body to identify the user
- Signature: The encrypted Body + Header

## Statelesness
A JWT token is attached to every request from the client side, so each request can be authenticated independently, making it stateless.

## How it works
- Client authenticates with credentials
- Backend generates a JSON with header, body, and signature.
- Client stores the token locally and attaches the JWT token to each request
- Middleware in the API validates the requests
    - Server extracts the body and header and creates the encrypted signature with the secret key.
    - Compares the sent key with the generated key to validate the token
    - Checks the expiry date (if any) of the token against a list of expired tokens (Redis or DB)
    - If not expired and signature coincides then Token is valid

## Pros
- Stateless: Great for distributed systems
- Secure: Signature is encrypted so it can't be modified by an attacker
- Efficient: Stored on the client side, no need for DB space

## Cons
- Non-revokable: Tokens don't dissappear, they have to be invalidated with a blacklist on the server side.
- Secret key: If the secret key is compromised then a malicious actor can fabricate tokens and impersonate all users.

### Reference
[Super Tokens](https://supertokens.com/blog/what-is-jwt)