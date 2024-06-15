# Rest Constraints
RESTful APIs are a set of constraints that might be or not applied. You can't expect for an API to implement all of these contraints.

## Uniform Interface
Any device should be able to interact with the API with a uniform interface.

## Client-Server architecture
REST APIs must follow a client (request) and server (response) architecture.

## Stateless
REST APIs don't require session state for communication. Each request is standalone in that it has all the credentials to be able to get validated by the API

## Cacheable
Response should indicate wether the response is cachable by the client or not. The server can cache as well.
The lower in the chain the request goes the higher the costs and time.

## Layered System
The client should be able to request data from the API without knowing the underlying infrastructure of the API.

## Code on demand (optional)
Allows for the server to send client code for execution.

# Headers

## Authorization
Header that has the authorization credentials for the request.

### Content-type
The content type a server is sending (goes on the response). It can be `application/json`, `application/xml` or `application/x-www-form-urlencoded`

## Middlewar (X) Header
`X-<anything>` is a format of Header that can be used for any purpose.

# Encoding data
Request data is encoded to avoid certain problematic characters. Examples: Unicode encoding, HTML encoding, base64 encoding.

### Tip:
Learn to recoginze the signature of different encoding technologies to be able to recognize them.