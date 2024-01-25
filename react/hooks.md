# React Hooks

## useImperativeHandle
Makes functions defined inside a ref component available on the ref object

```
const ComponentOne = () => {
    const ref = useRef();

    const a = {
        ref.current.myMethod(); // I can access myFunction here by using useImperativeHandle in ComponentTwo
    }

    return (
        <ComponentTwo ref={ref}>
    )
}

const ComponentTwo = (props, ref) => {
    const myFunction = () => {
        // ...do stuff
    }

    useImperativeHandle(
        ref, 
        () => ({
            myFunction    
        )},
        []
    );

    return (
        <div>...Some content</div>
    );
}

```