
### Gateways
Access points. Think of the endpoints of an API. Not much logic happens here.

## Use Cases / Interactors
Use cases orchestrate entities, and are defined as from where the user sees the software from a functionality perspective.

For example, a use case could be UserWithdrawMoney. It implies a series of steps, some of which are business rules that are implemented by entities.

1. Determine if user is authorized (Business rule)
2. Customer pin must match (Business rule)
3. Customer has suffiecient funds
4. Requested amount less than total in account (Business rule)

In MVC architecture, the Use Case / Interactor would be the equivalent of a Controller.

## Entities / Domain layer

Entities are the implementation of critical business rules. They contain higher level rules and they rarely change.

Entities => Core business rules (Rarely change)
Use Cases => Application specific rules (orchestrate entities)

An entity can be a class or object that contains data a functionality that relate to it. For example a UserEntity can have properties such as id, name, and email, but also methods that can change it's state such as activate(), save(), or changePropertyX()

Entities are not database models and are not concerned with sotarge. This sets them appart from Models in MVC architecture. Entities are decoupled of the storage layer.
