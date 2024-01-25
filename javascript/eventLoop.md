# Event Loop

JS has a main blocking thread. 

The browser can have multiple threads doing different things like nwtworking, coding / decoding, monitor of I/O devices.
When these processes are done with their tasks they need to come back to the main JS thread so the application can use that information.

The Event Loop orchestrates all these different asynchronous tasks into the main thread.

## Task Queues
Whenever an asynchronous bowser API function (like setTimeout, fetch) is executed, the functionality is run in parallel, when the task is complete the callback function of that task gets add to a `task queue`, which is a To Do list for the event loop. The event loop picks up these tasks.

Execution: Tasks are executed one at a time. If one gets added to the end of the queue.

## Render steps (anomation callbacks)
Render steps are what the browser uses to render what is on the screen. This event loop detour includes style calculations (CSS), layout (render tree), creating pixel data (painting).

### requestAnimationFrame
First element in the render step. This method tells the browser that you wish to ecexute an animation callback on the next frame (normal screens have 60 frames per seconds). It ensures a smooth and efficient animation.

It happens before processing CSS and before painting.

Execution: Animation callback queue are executed until completion, except the ones that were queued duriing the execution of the callbacks. The new ones are deffered to the next frame.

## Microtasks (queue)
Microtask queue gets executed when JS finished executing, i.e when the task queue is cleared. They can run in the middle of a render step, in the middle of a task, anywhere JS can run.

Example:
```
Promise.resolve().then(() => console.log('Hey'))
console.log('Yo')

// Yo
// Hey // The code inside the then is the microtask and it runs after the whole JS is finished executing.
```

Promises use microtasks. That's why the Promise callback is always at the bottom of the Jvascript stack.

Execution: Microtasks are executed to completion, including the ones added in between execution of microtasks. This is why adding them continously blocks rendering.

## JS tasks (Stack)