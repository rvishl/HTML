Jan-11      MERN        July

Position: -> To decide where to position the element in the document flow.
Document flow -> Default rendering layout.

-> Fixed - Fixes the element with respect to the viewport. (Top/Left/Bottom/Right). The initial position will be GONE! It  will REMOVE the element from the document flow and fix it on top of the document.

-> Relative - Shifts the element relative to it's initial position in the document flow. (Default rendering). The initial space of that element will not be taken by anything else.

static -> Default flow.
initial -> (Global Value) -> Maps to the initial value of a CSS property. (Example, position: initial - position: static;)

absolute -> Position the element with respect to the nearest positioned ancestor. It will REMOVE from the document flow and put it at the top. (Similar to fixed)

Nearest - Closest to the element. Whichever descendant has that property which is encountered FIRST while going up my DOM tree.
Positioned - That the position property should be defined. (It should NOT be static).
Ancestor - parent, Grand parent, great grand parent

sticky -> The element will be in it's normal flow until the top/left/bottom/right position has been encountered. Then it will stick. It is placed with respect to the nearest scrollable ancestor. This is NOT removed from the document flow.

Fixed vs Sticky: 
1. Fixed element is removed from the document flow. Sticky element is not removed. It contains it's space.
2. Fixed is placed with respect to the viewport. Sticky is placed with respect to the nearest scrollable ancestor.

z-index: Used to decide which element will be shown on top on which element. Basically, resolve the overlapping.

Q. What is JS?
-> It is a scripting language.
-> It is dynamically typed Language (It does NOT care about Data type).
-> It is single threaded. ( A single thread -> 1 step at a time, no parallel execution).
-> Used to give Functionality to website. Used for business logic.
-> Used to manipulate DOM. (The HTML Document).

* All scripting language are programming language. Just that programming languages include stuff like compiled language also, but scripting is only interpreted languages.

Q. What are different datatypes in JS?

- boolean
- number
- undefined
- null
- String
- BigInt
- Symbol

Non Primitive -> It can be broken down into smaller chunks of primitive data type. It is a combination of multiple primitive data types put together.
- Object


Q. Why is JS dynamically typed?
-> It does't care about Data type.
-> We can create a variabel with one data type and later update it with another data type.

Q. What is an iteration?
-> It is loop.
-> for / while / do while / for in for of / for each

Q. What is a condition (branching statements)?
-> if else, else if, switch / nested if else / ladder.

Q. what is the difference between nested if and ladder if else?
-> Nested means if inside another if. ( One inside another).
-> Ladder means if after another if. (One after another).

Q. What is an array?
-> connection of elements(heterogenous)
-> It is dynamic in nature
-> It uses indexing
-> The uses indexing
-> It is represented by square brackets [].
-> Elements separated using comma.
-> In JS, there is no datatype such as an array. It is always seen as an object.

Q. What is an object?
-> It can be represented in key value form. (heterogenous)
-> It is a written in {}
-> We have to give the keys when adding.
-> To access also, need key.
-> No two keys can be same. 
-> Objects are instances of classes.

1. Write JS externally.
2. Where to add the script tag?
-> At the bottom, just before closing the body tag.
-> Design is first, functionality is second.

Assingment 1 - Create a webpage for contact list.
Assingment 2 - Create a pattern on the page. Take an input using prompt. (Make sure to parse it as integer).
n=5

*
**
***
****
*****

n = 7
*
**
***
****
*****
******
*******