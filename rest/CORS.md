# CORS (Cross Origin Resource Sharing)

# Same origin security

When a client (browser) hosted on, for ex. foo.com, makes a request to the same domain / server where it is hosted, no problem will happen. It is the same origin. By default browsers have a "same-origin policy" for loading resources.

# CORS error

When a client requests a server on a different domain, for example `foo.com` requesting data from an API hosted on `bar.com`, then there will be a CORS error. The browser blocks the loading of resources from domains that aren't the main one set on the original GET request.

## CORS error solution
Even though the browser blocks the request, the solution to this issue is on the server. The server needs to allow a domain to request data from it.
We can do this by adding the `Access-Control-Allow-Origin: https://foo.com` response header to our API's response.

In Node/Express this can be done with the cors middleware:
`app.use(cors{ origin: "foo.com"  })` This tells the server to include the CORS headers on every response.

`Access-Control-Allow-Methods`

With this headers the browser will allow the fetch of data from this specified different origin.

Important: CORS is enforced by the browser, not the server. You can disable it with an extension.

### Preflight request
It's a request that is sent before the actual request writen by the developer that contains information about the HTTP Method used (GET, PUT, POST, DELETE) and any custom HTTP headers.