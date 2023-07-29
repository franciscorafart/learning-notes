# bodyParser

To handle POST request in Express we need to install the `bodyParser` middleware.

`app.use(bodyParser())` => For every route and request use the return value of bodyParser as a middleware function.

bodyParser processes the incoming request's JSON and makes `headers`, `body`, and `query` available at the root level of the request object, so that the data can be easily accessed as an object,

```
app.post("/users", (req, res) => {
    const body = req.body;
});
```