9 Aug MERN 13 Aug

## Array Methods 
- These are the built in functions of Arrays. 
- We call them methods because they are part of the Array Class.


### forEach: 
- This is used to loop on every element of your array.
- This takes a callback. In the callback, this will give commonly 2 parameters that we need. Element and index.
- We can write whatever logic that we want on those elements.
- However, we cannot return.
- We cannot manipulate that array.
- This is the exact basic alternate to for of.
- There is 1 difference, we cannot use break and continue keywords here.

## map
- This we will use A LOT in React.
- This is like forEach only, but we can return items from the callback function.
- This can be used to map and create a manipulated array.
- This can create a copy with the changes that we write in the callback function. Basically creating a 1-1 map with the source and the copy array.
- The difference will be the logic that we write in the callback function.

## some
- This will return true/false (boolean) on whether some elements match the condition or not.
- Some means 1 or more than 1.
- The purposr of this is just to check.
- Form the callback function, we will return boolean.
- If for 1 or more cases the some function gets boolean true. Then it returns true.
- Meaning, there are atleast 1 elements which match the condition.
- This also accepts a callback. That callback will have element, index and original_arr.
- Callback will return boolean.

## filter
- This is similar to some, but instead of just returning true / false. This will return the array of elements that match the condition.
- This also takes callback.
- This will return a list of elements that match the condition.
- If for any element, we are returning true, then that element will be added to the filtered list, otherwise it will be ignored.

## find
- This is kind of just like filter. But this returns the FIRST element which matches.
- Filter returns the ARRAY of all elements that matches whereas find returns the element itself.
- ONLY RETURNS FIRST OCCURENCE.
- Usage: When you are search for something, it will return that.
- In a case where we have more than one elements which matches, then it will return the first occurence.

## findLast 
- Kind of same as find, but this returns the LAST occurence.

## findIndex
- This is just like find, but instead of returning the element, it will return the index.
- We pass the callback function, that function will get 3 parameters, element, index and original_arr. The callback can return boolean.
- This will give INDEX of the first element which matches the condition.

## findLastIndex
- Kind of same as findIndex, but this return the index of LAST occurence.

**We do have indexOf method, but that method does not accept any callback, therefore that method cannot be used for complicated arrays.**