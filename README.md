1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById is used to  find a single element with a specified ID.

getElementsByClassName is used to get a list of all elements with a specified class name.

querySelector is used to get the first matching element using a CSS selector.

querySelectorAll is used to retrieve a list of all elements that match a given CSS selector.

2. Rules for creating and adding new elements to the DOM

to create an element and insert into dom the given code are wrtitten
const newElement = document.createElement("div");
newElement.textContent = "new element";
newElement.classList.add("my-class");

3. What is Event Bubbling and how does it work

an event bubbling is process that once an event occures then it goes back to its parent element

4. What is Event Delegation and why is it needed

event delegation use event bubling to handle multiple event handling for multiple child elements using sinle parentss and it helps to save memory
5. Difference between preventDefault() and stopPropagation()

preventDefault() helps to stops browser dafault action.
stopPropagation()  helps stops event bubbling up.
