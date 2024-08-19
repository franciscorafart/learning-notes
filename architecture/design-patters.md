# 5 important Design patters
https://www.youtube.com/watch?v=YMAwgRwjEOQ

1. Strategy pattern
- Write different classes that implement the same methods, so that there's a uniform interface
- Useful if you have multiple ways of achieving the same thing on an aplication
- Example: A Cake recipe app will have many cakes, but what the user needs from each is ingredients and steps (Two methods)

2. Decorator pattern
- Decorator is when we wrap a class with another class => Extend an object without changing the original implementation
- Way to make code open to extension, closed to modification
-

3. Observer pattern
- When we need to notify different parts of the program something has happened
- When Subscriber subscribes to publisher they get added to an array
- Publisher iterates through subscriber array to update all the subscribers

4. Singleton
- Sometimes we need the same object everywhere in our code

5. Facade pattern (Interface)
- Essential to Software development
- Using libraries can make code messy and complicated
- By implementing a facade or interface we can simplify the interaction with a messy libraries
- This interface can allow us to change the inner workings of our functions without needing to change them in the rest of the code