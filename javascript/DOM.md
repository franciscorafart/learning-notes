# The DOM
The DOM (Document Object Model)is an API provded by javascript to manipulate the html structure (query and setting values). You can access it in Javascript running on a browser with the `document` object.

The structure of the DOM is a tree-like structure (not html) that is a *representation* of the HTML. Javascript witl traverse the tree to query or change element s on the DOM.

### Data flow
**HTML => DOM => Rendered View**

DOM manipuation has two portions:
1. DOM Update
2. Re-rendering

The re-rendering portion is resource intensive. If you need to re-render view frequently you can reduce the performance of the app significantly.

## Virtual DOM
Some frameworks solve this problem, specially React. You tell React what to do and React does it for you, no need for direct interaction with the `documents` object (DOM), unless specific things have to be done.

### How?
React never updated the original DOM directly. React creates a copy of the original DOM and we call it Virtual DOM, that React updates directly and stores in-memory, which makes it faster.

1. Create in memory copy of the virtual DOM

2. When an element in the Virtual DOM  changes, react creates a second copy of the virtual DOM with the changes on the elements and its children

3. React creates a `diff` between the original and the second copy of the Virtual DOM. This is done with a diffin algorithm.

4. React updates orginal DOM with the changes at a particular fequency (batch changes), to keep the app with good perforamance.

## Reconciliation
The process by which React keeps the DOM and the Virtual DOM in sync through batch updates.

If the root of a component changes, the whole component gets updated on the batch update.

updating lists
If we don't specify the `key`, react has to traverse and compare every single element of the list and make the diff.