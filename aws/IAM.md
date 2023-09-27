# IAM
IAM => Identify Access Management

- Root users: Only to set account

To interact with AWS we create Users. 

## Groups
Users can be grouped together.

For example: A `Developers` group and an `Operations` group in a company.

- A user can belong to multiple groups.
- We create groups because of permissions.
- Groups and Users can have attached permissions.

## Permissions
Users and groups can be assigned policies (Permissions). These are stored in a JSON document that describes the resource, effect, and action allowed.

In AWS you don't allow all users to do everything.
`Least privilege principle` => Don't give users more permissions than they need.

## Access
When we create a user we can:
- Give console access through a password
- Give it an Access Key to access through the CLI. Run `$ aws configure` to set up. The credentials get stored in `~/.aws/credentials`

When you log in with an IAM user the account dropdown will show `IAM user: user name`

## Tags
Information you can add to AWS resources

# Policies
Policies inheritance:
- If you assign users to a group, all the users will inherit the groups permissions policies.
- Inline Policy: For users that don't have a group.

Policy JSON structure:
Version: Policy language version
Statement []: 
    - Sid: Identifier of the statement (Optional)
    - Effect: Allow or Deny
    - Principal: Which account / user/ role this policy will be attached to.
Action: List of API calls that will be allowed or denied based on the effects
Resource: List of resources to which the action will apply to

We can attach policies to a user directly, or inherit them from a group.
We can also create custom policies that allow special combination of actions over different AWS resources.

# IAM MFA
To secure an AWS account we can do several things.

- Password policy.
In AWS IAM you can set a password policy (length, character tyoes), passwords expiry, password re-use,

- MFA (Multifactor authentication)
It is highly recommended (at least root account) to have Multi Factor Authentication