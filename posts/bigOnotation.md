---
title: "Big O notation basics for web developers"
date: "August 6th 2021"
excerpt: "This article discusses Big O Notation and how it forms part of web development"
cover_image: "/images/posts/beach.jpg"
---

## <span style="text-decoration: underline">What is Big O notation and why web developers should know about it:</span>

Big O notation is very well known in the computer programming and computer science industries. An interesting fact is that Big O notation is also known as "Landau's symbol" and it is used in mathematics, complexity theory as well as in computer science. The O within the name symbolises the "order of magnitude" which referes to the rate of growth of a particular function.

So this is allgood and well you might be thinking but what does Big O notation actually do? Well, let's take a look at that... The role of Big O notation is to determine the amount of time a particular algorithm will take to complete which is known as "time complexity" or it can check the "space complexity" that a particular algorithm will take to complete which indicates the amount of computer memory that the algorithm will need to run. In summary, the main role of Big O notation is for developers to be able to compare the speed and efficiency between different solutions(algorithms) to a problem.

Now that we know what the role of Big O notation is and what an important role it plays in order to be able to determine if the code/algorithm that you are using to solve a particular problem is the most efficient and optimal solution we can understand why this concept/part of computer science and computer programming would be such a vital concept for web developers to know and understand. If a web developer is tasked with creating a website that will be used by many users then the algorithms that the developer uses need to be scalable and when more load/users make use of the website it is important that the site still loads and works optimally and that the algorithms chosen by the developer don't prove to be problematic/unoptimal when a website grows and has a large amount of users.

## <span style="text-decoration: underline">What is a quadratic function(O(n²)):</span>

This is a mathematical function that is a polynomial function which contains either one or more than one variable and the highest power of the variable will be 2. The highest degree term that is present within a quadratic function is that of the second degree. Due to this fact, we also call it a polynomial function of the second degree.

<a href="https://www.cuemath.com/calculus/quadratic-functions/" style="color: red; text-decoration: underline" target="_blank"><em>Original source</em></a>

## <span style="text-decoration: underline">JavaScript code that runs using quadratic time(O(n²)):</span>

An example of JavaScript code that runs using quadratic time(O(n²)) would be a recursive Fibonacci sequence algorithm, I have included a code example below:

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-right: 5%; padding-left: 5%">

<p>
    let recursiveFibonacciAlgorithm = (n) => <br/>{</br> 
    if (n === 1 || n === 2) return 1;
    return (
    recursiveFibonacciAlgorithm(n - 1) + recursiveFibonacciAlgorithm(n - 2)
    )<br/>};
</p>
</div>

<a href="https://developerinsider.co/big-o-notation-explained-with-examples/" style="color: red; text-decoration: underline" target="_blank"><em>Original source</em></a>

## <span style="text-decoration: underline">Linear search algorithms VS binary search algorithms:</span>

#### <span style="text-decoration: underline">Linear search algorithms:</span>

The linear search algorithms in computer science and computer programming are also known as sequential searches and these types of algorithms are used to locate a specific element stored within a list. The way these searches work is by checking each element sequentially until either the matching result has been found or until the search has run through the entire list.

<a href="https://en.wikipedia.org/wiki/Linear_search" style="color: red; text-decoration: underline" target="_blank"><em>Original source</em></a>

#### <span style="text-decoration: underline">Binary search algorithms:</span>

The binary search algorithm is at it's core a <a href="https://en.wikipedia.org/wiki/Search_algorithm" style="color: red; text-decoration: underline" target="_blank">"<em>search algorithm</em>"</a> and it's duty is to locate the position of a specific element/value that is stored within a data structure called a "sorted array".
The binary search compares the available data by checking the middle value/element within the array as well as checking the target element/value and if these values are not equal then this will mean that the half whereby the target can't lie will be removed and thereafter the binary search will perform the remainder of the search on the other half. The middle element is used to compare against the target value and this process will be repeated until the value/element that is the target has been found. An important point to note is that if the search completes and the remaining half is still empty then this would indicate that the target that is being searched for does not exist within the array.

<a href="https://en.wikipedia.org/wiki/Binary_search_algorithm" style="color: red; text-decoration: underline" target="_blank"><em>Original source</em></a>

## <span style="text-decoration: underline">Code examples of linear and binary search algorithms:</span>

#### <span style="text-decoration: underline">Linear search algorithm:</span>

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%">

<p>

let sports = ["Football", "Rugby", "Baseball", "Swimming", "Hockey"]; <br/> <br/>
let linearAlgorithm = (data, target) => { <br/>
for (index = 0; index < data.length; index++) { <br/>
if (data[index] == target) {
return index;
}
<br/>}
<br/> return null; <br/>
};

linearAlgorithm(sports, "Baseball");

</p>

<a href="https://dev.to/stephjs/linear-and-binary-search-in-javascript-4b7h" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

</div>

The code above is performing a linear search on the elements within an array based on a target element. The array to search through and the target are passed into the function as arguments. Although this approach does work and it solves the problem, is it the most efficient way of solving the problem? Let's find out... Looping through each element within the array works, however there could be a massive amount of data within an array which can negatively affect the algorithms performance. In the event where there are hundreds of elements to search through, this type of approach would not be best as every element will be searched through which will take time.

#### <span style="text-decoration: underline">Binary search algorithm:</span>

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%">

let sports = ["Football", "Rugby", "Baseball", "Swimming", "Hockey"]; <br/>
let alphabeticallyOrderedSportsArray = sports.sort();

let binaryAlgorithm = (data, target) => { <br/>
let indexBottom = 0; <br/>
let indexTop = data.length - 1; <br/>
while (indexBottom <= indexTop) { <br/>
let indexMiddle = Math.floor((indexBottom + indexTop) / 2); <br/>
if (data[indexMiddle] == target) {<br/>
return indexMiddle;
<br/>} else if (data[indexMiddle] < target) <br/>{<br/>
indexBottom = indexMiddle + 1;
<br/>} else {<br/>
indexTop = indexMiddle - 1;<br/>
}<br/>
}
return null;
<br/>};<br/><br/>
binaryAlgorithm(alphabeticallyOrderedSportsArray, "Rugby");

<a href="https://dev.to/stephjs/linear-and-binary-search-in-javascript-4b7h" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

</div>

The code above is taking in a sorted array which is why I needed to use the sort() method to sort the 'sports' array before passing it in as an argument to my binary search function. In order for the search to function correctly we need to keep track of the range of elements that the function will be searching through, to do this I have declared the 'indexBottom' and 'indexTop' variables. The 'indexBottom' variable will be set to 0 and the 'indexTop' variable will be set to the amount of elements that the search will need to run through in the array.

The while loop will run until the binary search has been filtered after searching through the array to a single element. The index/position of the element is located and found by averaging the 'indexBottom' and 'indexTop' variables, I am making use of the Math.floor() built in JavaScript method in order to ensure that the number is rounded as it is required to be an integer. The code will then return the 'indexMiddle' if the search has found the element that it has been searching for. If the element is not yet found and if the current element comes before the element that the algorithm needs to find (this position is determined by alphabetical order), then the "indexBottom = indexMiddle + 1", alternatively if the element that the algorithm needs to find comes after the current element then the "indexTop = indexMiddle - 1" and lastly if the algorithm cannot find the element that it is searching for then this would indicate that the element does not exist within the array and the function will then return "null".

<a href="https://dev.to/stephjs/linear-and-binary-search-in-javascript-4b7h" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

In conclusion and based on the information we have gone through above, the binary searching algorithm method is the more efficient and quicker method for searching for a specific element as the linear search searches through every single element within the data set(array) and in turn if the data set is very large, then the search can take a while to complete.

## <span style="text-decoration: underline">Describing each sorting algorithm listed above using Big O notation:</span>

#### <span style="text-decoration: underline">Linear sorting algorithms:</span>

This type of search algorithm will be represented using the O(n) model and can evolve to the O(n²) model as the data set can grow exponentially and in turn with each element that there is within the data set/array, a step is required as each element within the array is searched through when using the linear sorting algorithm functions.

<a href="https://towardsdatascience.com/introduction-to-big-o-notation-820d2e25d3fd" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">Binary sorting algorithms:</span>

This type of searching algorithm will make use of the 0(log n) complexity model, the reason for this is due to the fact that the amount of searching that the algorithm needs to perform increases at a much slower rate then the search list from the data set(sorted array) does. The reason why this is the case is because in the binary searching method the algorithm is constantly halving the search parameters after each search has run.

<a href="https://stackoverflow.com/questions/700241/what-is-the-difference-between-linear-search-and-binary-search" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

## <span style="text-decoration: underline">Let's take a look at a popular algorithm called the Fibonnacci sequence:</span>

#### <span style="text-decoration: underline">What is the Fibonnacci sequence:</span>

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%">

<p>
let recursiveFibonacciAlgorithm = (n) => { <br/>
  if (n === 1 || n === 2) return 1;<br/>
  return (
    recursiveFibonacciAlgorithm(n - 1) + recursiveFibonacciAlgorithm(n - 2)
  );<br/>
};
</p>

</div>

The code above is using ES6 syntax and is making use of an arrow function. What the code above is doing is taking in a value(n) and the program is then checking to see if the value entered is equal to either 1 or 2 if it is then a value of 1 will be returned. Alternatively if the value entered is neither 1 nor 2, then the recursiveFibonacciAlgorithm() function will run recursively(a function that calls itself) and perform the formula required to return the number in the Fibonacci sequence that is assigned to the index value that is entered.

Okay, so you may be thinking that's all good and well but how does this algorithm tie in with the quadratic time(O(n²))
calculation. Well, the efficiency of this code is affected when the number that is parsed as an argument into the algorithm
is a large number, the reason for this is that in the beginning when the algorithm starts to run, the calculations are small, however the growth of the algorithm will double every time the value in the sequence is being calculated to obtain the relevant number in the sequence and in turn this can affect the speed and efficiency of the algorithm. With this being said, another import point to note is that the growth curve can be very large as the argument that is parsed into the algorithm can be a very large number.

#### <span style="text-decoration: underline">Another example of a Fibonacci sequence, however this solution is not making use of recursion:</span>

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%">

<p>
let numbersArray = [1, 1];<br/><br/>
for (index = 2; index < 5; index++) {<br/>
  numbersArray[index] = numbersArray[index - 1] + numbersArray[index - 2];<br/>
}<br/><br/>
console.log(numbersArray);
</p>

</div>

#### <span style="color: red; text-decoration: underline">According to Big O notation, which algorithm is more efficient?</span>

Although the recursive approach has less lines of code, the Big O notation/time complexity for the recursive function is O(n) which can become exponential O(n²) if there is a very large amount of elements in the data set(array) that needs to be searched through.

The other approach whereby I iterate over all of the elements within the array as apposed to using recursion uses alot less memory and as the calculations for the Fibonacci sequence are being done, the function does not require additional memory/space and in turn the Big O notation/space complexity model for this approach would be 0(1) as it would remain the same.

In conclusion, the more efficient solution is the iterative solution and not the recursive solution.

<a href="https://syedtousifahmed.medium.com/fibonacci-iterative-vs-recursive-5182d7783055" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

### <span style="color: red; text-decoration: underline">References:</span>

<div style="font-size: 12px; color: red">
<br/>
<li>
<a href="https://www.linkedin.com/pulse/big-o-notation-simple-explanation-examples-pamela-lovett/" style="color: white" target="_blank">linkedin.com</a>
</li>

<br/>
<li>
<a href="http://web.mit.edu/16.070/www/lecture/big_o.pdf" style="color: white" target="_blank">web.mit.edu</a>
</li>

<br/>
<li>
<a href="https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity" style="color: white" target="_blank">interviewcake.com</a>
</li>

<br/>
<li>
<a href="https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation" style="color: white" target="_blank">rob-bell.net</a>
</li>
</div>
