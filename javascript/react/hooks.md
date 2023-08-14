# Hooks

### useState
Used to change the state of components in an application. A user action can trigger a state change

### useEffect
Hook to manage side effects by triggering functionality when a user event or API response changes the value of a dependency in the code.

### useContext
This hook defines global variables that can be accessed anywhere in the react code but are not part of the application's state. Great for themes or user data.

### useReducer
React implementation of Redux state management pattern. It allows establishing global (or semi-global) state for a group of components that require common access and modification of a state.

### useCallback
Hook to memoize functions passed as callbacks to components via props. It avoids re-declaring a function defined inside a component if the function's dependencies didn't change, thus preventing unnecessary re-renders of the component.

### useMemo
Hook to memoize variables. Useful for variables that require considerable computation and that we don't want to redefine every time there's a re-render. If the variable's dependencies don't change, the variable is not redefined.

### useRef
Hook to access DOM elements directly that mutate outside of the React state. Very useful to access native browser APIs as part of HTML tags such as canvas, video, navigation, animations, scrolling, audio, etc. It "keeps" the reference.

### useImperativeHandle
Like useRef, it allows you to change the value of the returned element. It also allows to change the behavior of native functions such as focus and blur.

### useLayoutEffect
Like useEffect, it runs after React commits elements to the DOM, but before rendering. Used when we need to process a side effect before the page renders, for example, an API call or an element position calculation that depends on the DOM. It is used to avoid flickers of the UI when calculations are needed with page elements.

### useDebugValue
### useDeferredValue
### useTransition
### useId

Library Hooks

### useSyncExternalStore
### useInsertionEffect