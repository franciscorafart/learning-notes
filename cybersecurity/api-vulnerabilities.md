# Common API vulnerabilities

1. Information disclosure
Unnecessary information that the API provides that can be leveraged. For example"
- User information or sensitive data for unauthorized users
- Predictable url slugs that can be used to get other info
- Verbose error messages that disclose details of the system
- Data in the headers, response or documentation of an API, that could be leveraged.

2. Broken Object Level Authorization (BOLA) => Unauthorized access
Unauthorized access to users that are not suppose to have access to some data. It happens when an endpoint doesn't have object-level access controls.

To exploit this, someone can just replace the values of a request for which they have access to with ids for resources they don't. Id succesful this would mean a BOLA vulnerability.

3. Broken User Authentication
Wrong implementations of the authentications process.

Stateless API rely on Tokens to authorize requests, If there's problems in the implementation of these tokens an attacker might be able to create a token or steal one.

Also exposed API keys will give complete access to an attacker in the context of stateless APIs.

4. Excessive Data Exposure
It happens when an API responds with excessive data (not needed). For example a request for a user that discloses data from another user.

5. Lack of resources and Rate Limiting
Rate limiters are an important feature of APIs to avoid DoS attacks. We can test rate limiting is working by sending a barage of requests to an API until we get a `429` response. Once the restriction is in place we can try ways of bypass it to see if there's a vulnerability.

6. Broken Function Level Authorization (BFLA) => Unauthorized actions
When a user is able to perform actions that are only authorized to other users or roles. Platforms have all levels of users (admins, users, users with more priviledges)

BFLA's can be of two types:
- lateral: A user performs action on behalf of another user of the same priviledge level.
- Priviledge escalation: A user performs an action on behalf of a user with more access.

7. Mass Assignment
A vulnerability where a request can include more parameters that the programmer intended to. If these extra parameters are not sanitized then it could happen that the attacker can modify data that was not supposed to be able to be modified.

The name of the extra parameters can be exposed in the documentation of other enpoints responses or requests.

8. Security Misconfigurations
9. Injections
When the input isn't sanitized for unwanted charaters, an attacker might be able to do SQL, non-SQL, and command injections. The unsanitized payload passes directly into the host's opearating system.

Finding this vulnerabilities requires testing API endpoints extensively, paying attention to responses, and crafting requests.

10. Improper asset management
When an org exposes an old or unfinished new API. Both are prone to vulnerabilities, the first because it's no longer patches, and the second because it is incomplete.

11. Business Logic Vulnerabilities (BLFs)
Intended features of an API that an attacker can use maliciously.
- For example an upload feature that doesn't sanitize the uploaded files.
- Trusting users that they will use the API in a certain way, not expose it to other people, or use it benevolently.
- Assuming users will access the API with a browser and not user tools to intercept and modify the request.
