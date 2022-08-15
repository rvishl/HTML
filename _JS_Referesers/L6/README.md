8 Aug   MERN    11 Aug

## Array
- It's a collection of data.
- The data type can be anything in a single array.
- Ideally, you should have similar type of data in your array.
- heterogenous -> Mixed

### Creation of an Array
***Approach 1 - Square bracket syntax.***
- const <variable_name> = [];
- Square brackets means it is an array.
- You can put the value inside it.
- All the values are separated by comma.

***Approach 2 - Using the constructor***
- In JS, there is a class called Array.
- We just need to instantiate (create) an object of that class.
- new keyword is used here.
- Usage: const <variable_name> = new Array(<elements>);
- In the constructor, the elements are separated by the comma.

## Index
- This is used to identify which element is which.
- This is plain and simple counting.
- Counting starts from 0.
- These are all integer numbers.
- 0, 1, 2, 3, 4, 5....

### Access elements from an array
- Using the [];
- Usage: <variable>[<index>];

### Adding an element
- A built in function -> <variable>.push();
- Whatever value we need to push, we will put in as an argument.
- This will automatically put that element at the last location.
- Basically, this is equivalent to append.

### Removing an element
- A built in function - > <variable>.pop()
- This will remove and also return the value/element which it has removed.
- Pop will remove from the last.
- What if I want to remove from the middle.
- I have and index and I want to remove an element from there.

## splice
- First argument we send is the starting index.
- Second argument we send it the counter of delete.
- After that, any arguments we send will be used to insert.
- Usage - <array_variable>.splice(<starting_index>, <length_to_delete>, <insertion_values>);
- It will start deleting from the starting index and keep on deleting upto length number of items.
- Once done, it will check if there are element to insert, if yes then it will proceed to insert those elements.
- This will change the original array.

### slice
- It is basically substring, but for arrays.
- This one you give string and ending indexes.
- It will include the starting index but exlude the ending index.
- If we give negative index. then it will start from the last.
- This will not change the original array.
- This returns a copy (Shallow copy).

### join 
- This combines an array into a string.
- We pass the glue as an argument. This is also called as separator.
- This will join the elements and returns a string.

### shift
- This is like pop but from the 0th index.
- This also returns the removed element in case if we need it.

### unshift
- This is opposite of push
- push will push from the last index.
- unshift will push from the 0th index.

**Shift and pop are similar (in sense of removing), whereas Unshift and push are similar (in sense of adding).**

## length
- For any array, we can find the size (in terms of number of elements).
- This can be done by using the length property.
- This is a property and NOT a function.
- It does not care about the custom keys that we try to make.
- If we add a valid key which is a very large number, it will try to accomodate that by increasing the size of the array.


## Task: 
1. We have a string, we can take any value for that and we need to calculate the number of words of that string.

2. Create an array of random numbers (take 10 elements). Sort that array and then find: 
 - Mean
 - Median
 - Mode