# Flux Architecture

Description: A way of keeping the app state in a store (single JS object) separate from React components.

Action => Dispatcher => Store => View (=> to Action)

Redux is an implementation of Redux architecture.

## Store
JS object where the state of the application is stored. The state object shouldn't be mutated directly.

## Actions
Action are objects that define an action. They have at least a `type` of action as property. They can also have a `payload` property that can store any JS object with data for modifying the state. Example:
```
{
    type: 'Increment'
    payload: {
        k: 'Whatever key values or data structure the payload for an action consists of'
    }
}
```

## Reducer

It's a function that takes the current state and an action as parameters, and returns a new state.

`(state, action) => state`

It is never called directly fom the react component's code, but it's defined to create the store with the `createStore` function. 

The state onject shouldn't be mutated, the reducer should return a modified state copy. Redux state is immutable.

## Dispatch event
The dispatch methods allows to send an action to the store, in order to be handled by the reducer.

The cycle of actions is that 1) the dispatcher sends actions to the store and 2) reducers handles the action and 3) the recucer returns a new state.

# getState
The `store.getState` method allows us to get the current state in the code.