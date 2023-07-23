# Hooks

### useState
Used to change the state of components in an application. A state change can be triggered by a user action
### useEffect
Hook to maanage side effects by triggering functionality when a user event or api response changes the value of a dependency in the code.

### useContext
Hook used to define global variables that can be accessed anywhere in the react code but that are not part of the applications state. Great for themes or user data.

### useReducer
React implementation of Redux state management pattern. It allows to establish global (or semil-global) state for a group of components that require common access and modification of a state.

### useCallback
Hook to memoize functions passed as callbacks to components via props. It avoids re-declaring a function defined inside a component if the dependencies of the function didn't change, thus avoiding unnecessary re-renders of the component.

### useMemo
Hook to memoize variables. Useful for variables that require considerable computation and that we don't want to re-define every time there's a re-render. If the dependencies of the variable don't change, the variable is not re-defined.

### useRef
Hook to access DOM elements directly that mutate outside of the React state. Very useful to access native browser APIs part of html tags such as canvas, video, navigation, animations, scrolling, audio, etc. It "keeps" the reference.

### useImperativeHandle
Like useRef but it allows you to change the value of the element that is returned. It also allows to change the behavior of native functions such as focus and blur.

### useLayoutEffect
Like useEffect but runs after react commits elements to the DOM, but before rendering. Used when we need to process a side effect before the page renders, for example an API call or a element position calculation that depends on the DOM. Used to avoid flickers of the UI when calculations need to be done with page elements.

useDebugValue
useDeferredValue
useTransition
useId

Library Hooks

useSyncExternalStore
useInsertionEffect