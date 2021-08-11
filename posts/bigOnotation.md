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

<div style="color: black">

```javascript
let recursiveFibonacciAlgorithm = (n) => {
  if (n === 1 || n === 2) return 1;
  return (
    recursiveFibonacciAlgorithm(n - 1) + recursiveFibonacciAlgorithm(n - 2)
  );
};
```

</div>

The code above is using ES6 syntax and is making use of an arrow function. What the code above is doing is taking in a value(n) and the program is then checking to see if the value entered is equal to either 1 or 2m if it is then a value
of 1 will be returned. Alternatively if the value entered is neither 1 nor 2, then the recursiveFibonacciAlgorithm() function will run recursively(a function that calls itself) and perform the formula required to return the number in
the Fibonacci sequence is assigned to the index value that is entered.

Okay, so you may be thinking that's all good and well but how does this algorithm tie in with the quadratic time(O(n²))
calculation. Well, the efficiency of this code is affected when the number that is parsed as an argument into the algorithm
is a large number, the reason for this is that in he beginning when the algorithm starts to run, the calculations are small, however the growth of the algorithm will double every time the value in the sequence is being calculated to obtain the relevant number in the sequence and in turn this can affect the speed and efficieny of the algorithm. With this being said, another import point to note is that the growth curve can be very large as the argument that is parsed into the algorithm can be a very large number.

<a href="https://developerinsider.co/big-o-notation-explained-with-examples/" style="color: red; text-decoration: underline" target="_blank"><em>Original source</em></a>

#### <span style="text-decoration: underline">Let's look at an example:</span>

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
```
