# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Flux Architecture

Description: A way of keeping the app state in a store (single JS object) separate from React components.

Action => Dispatcher => Store => View (=> to Action)

Redux is an implementation of Redux architecture.

## Store
JS object where the state of the application is stored.

## Actions
Objects that define an action. They have at least a `type` of action as property. Example:
```
{
    type: 'Increment'
}
```

## Reducer

It's a function that takes the current state and an action as parameters, and returns a new state.

`(state, action) => state`

It is never called directly fom the react component's code, but it's defined to create the store with the `createStore` function.

## Dispatch event
The dispatch methods allows to send an action to the store, in order to be handled by the reducer.

The cycle of actions is that 1) the dispatcher sends actions to the store and 2) reducers handles the action and 3) the recucer returns a new state.

# getState
The `store.getState` method allows us to get the current state in the code.