---
title: "Interfaces in object oriented programming languages and prototype-based languages"
date: "August 11th 2021"
excerpt: "This article discusses interfaces in object oriented programming languages and prototype-based languages"
cover_image: "/images/posts/interfaces.jpg"
---

## <span style="text-decoration: underline">What is an interface in computer programming anf what are the benefits of using interfaces in OOP:</span>

Interfaces are a very important and key part of object oriented programming(OOP) and they are used to specify which attributes(properties and methods) a class needs to carry out.

Another point to note is that the interface does not include any code to add into the object. The interface will stipulate that a specific class is structured based on the interface that it is linked to and that it should contain a specific attricbute such as a specific method, however this method will not contain code.

In summary, the role of an interface is to stipulate the functions/operations that a particular class needs to do, however interfaces do not stipulate the way in which the operations/methods need to be carried out.

#### <span style="text-decoration: underline">Benefits of using interfaces in OOP:</span>

<div style="font-size: 14px">

- Software developers make use of interfaces in order to achieve abstraction, which involves only presenting/displaying the data that is needed for a specific operation and hiding the data in the object that is not needed/not relevant from the user. Due to this, interfaces are known for being able to hide the attributes/parts of the object that are not needed.

- Software developers also like to implement the use of interfaces in order to ensure that classes are structured according to specific guidelines which stipulate which properties and methods need to be used.

- Another reason that Software developers may choose to use interfaces is that it can also be used to implement "strict typing" to a certain extent.
</div>

## <span style="text-decoration: underline">Let's take a look at why JavaScript doesn't really use interfaces as well as how objects are created with JavaScript:</span>

#### <span style="text-decoration: underline">Why JavaScript doesn't really use interfaces:</span>

The JavaScript programming language is not an object-oriented programming language but is rather an object-based programming language which is based on prototypes. Interfaces are not really used within the JavaScript programming language due to the fact that interfaces are normally used within programming languages that are object-oriented based.

<a href="https://hackernoon.com/implementing-interfaces-in-javascript-with-implement-js-8746838f8caa" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">How objects are created with JavaScript:</span>

In OOP in the JavaScript programming language an object gets created using a class which is basically a blueprint that will be used to create objects. The class will specify the data/attributes as well as the methods that the objects need to contain.

#### <span style="text-decoration: underline">Example code below to illustrate how objects are created:</span>

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%; margin-top: 1%">
<p>
class Sports { <br/><br/>
    constructor(sport){<br/><br/>
        this.sport = sport;<br/><br/>
    }<br/><br/>
displayFavouriteSport(){<br/><br/>
        console.log(`Your favourite sport is ${this.sport}`);<br/><br/>
    }
    
}

const Football = new Sports("Football");

Football.displayFavouriteSport()

</p>

</div>

## <span style="text-decoration: underline">How to emulate interfaces using JavaScript:</span>

There are a few ways that interfaces can be emulated in JavaScript, the methods we will be discussing today are namely comments, attribute checking as well as duck typing.

#### <span style="text-decoration: underline">Comments:</span>

This approach is an approach that is fairly simple to implement however the efficacy of this method is not great. This style of emulating interfaces mirrors the methodology of some other object-oriented progrmming languages, in order to avoid syntactical errors, the implementation keywords as well as the interface information are commented out.

As mentioned above, the efficacy of this approach is not very comforting as this approach does not clarify if the required set of methods are being implemented.

There are however some positive aspects to this approach which include it being a straight forward method to implement, no additional functions or classes will be needed, another plus side to this approach is that the interfaces are documented and due to this you can re-use the information if/when needed. Another plus to this approach is the size of the file as well as the speed at which the code will run will be unaffected.

<a href="https://jscriptpatterns.blogspot.com/2013/01/javascript-interfaces.html" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">Attribute checking:</span>

This approach/methodology by nature is more strict than the previous approach that we looked at, the reason I say that is because with the 'attribute checking' approach classes will need to specify which interfaces they are going to implement, these specifications can then be verified by the objects that are going to work with the classes that are going to be implemented. The interfaces are comments, however attributes can be examined to clarify which interfaces a class will be implementing. This approach will ensure that the arguments that are parsed into functions are a specific data type, if there are issues such as the required interface not being declared, then an error will be encountered.

Some of the benefits to this approach include being able to see which interface a class will be using as the interfaces are documented, if the class is missing a specific declaration for example, then an error will be shown to the developer which they can use to move in the correct direction in order to resolve the issue.

In summary, this approach offers a good plus side to it, however this is a downside that is good to be aware of. The downside is that the developer doesn't ensure that the specific class actually implements what is in the interface. An important point to note is that it is imperative to always remember to add the method that is needed as if you forget to do this, then the pre-flight checks will pass however there will be issues in the code as the method won't be present.

<a href="https://jscriptpatterns.blogspot.com/2013/01/javascript-interfaces.html" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">Duck typing:</span>

A fun fact is that this approach was named after the saying "if it walks like a duck and quacks like a duck, it's a duck." <a href="https://jscriptpatterns.blogspot.com/2013/01/javascript-interfaces.html" target="_blank" style="color: red; text-decoration: underline">"<em>original source</em>"</a>
This approach is used to clarify if a particullar object is from a specific class based on the methods that it implements, the duck typing method is also set to clarify if a specific class is setup to use an interface. To simplify what this approach is meant to do, it's role is primarly to check if an object has methods that are the same as listed in the interface, this will result in that particular interface then being implemented.

The duck typing approach will take in a function that contains two or more arguments, the first would symbolise the object you are checking against and the remainder of the arguments will be the interfaces that are going to be compared with the first object. Checks will be performed and if there are methods that are not present, then an error will be thrown which will contain both the name of the method that is not present as well as the interface that has not been implemented correctly.

While this approach is likely the most beneficial/helpful approach to use, there are a few downsides that also need to be mentioned. The code does not have a high rate of re-usability as in this approach classes don't stipulate which interface they implement. This methodology also does not clarify the arguments that the methods make use of, only the method name is checked to ensure that it is correct.

<a href="https://jscriptpatterns.blogspot.com/2013/01/javascript-interfaces.html" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">What is strict mode in JavaScript and why would we use it?</span>

Strict mode was introduced into JavaScript is ES5 and it provides a platform for the developer to be able to "opt in" to a restricted version of the JavaScript programming language. JavaScript strict mode has a different make up from that of normal/non strict mode code.

Now that we know what "strict mode" is let's take a look at some of the reasons as to why we would make use of it:

<div style="font-size: 14px">

- It will prevent certain sytax that is defined in later versions of ES(ECMAScript).
- It can sometimes result in quicker running code when compared to the same code that is not using strict mode.
- It also plays a role in trying to help correct errors that make it more challenging for the JavaScript engines to run optimally.
- Another feature that it provides is the ability to get rid of certain JavaScript silent errors, this is done by throwing errors when errors are encountered.

</div>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

## <span style="text-decoration: underline">What is TypeScript, how can we use it to create interfaces and enforce strict typing in JavaScript?</span>

#### <span style="text-decoration: underline">What is TypeScript:</span>

TypeScript is a language which builds on the JavaScript language, it is an open-source language and it is able to build ontop of the JavaScript programming language by implementing static type defenitions. This approach produces a methodology to describe the make up of a particular object which then reults in better project documentation but also providing TypeScript with a chance to run through the code in order to ensure that the code is doing what it should be doing. Another point to mention is that declaring types in TypeScript can be optional and this is due to the fact that type interference provides a lot of potential options without the need to write more code.

<a href="https://www.typescriptlang.org/" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">How we can use TypeScript to create interfaces and enforce strict typing in JavaScript:</span>

I have included code examples below which show how to create an object and then describe the objects shape using an interface declaration.

**Creating an object:**

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%">

const food = { <br/><br/>
name: "Pizza",
price: 99,<br/><br/>
};

</div>

**Describing the objects shape by using an interface declaration**

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%">

interface Food {<br/><br/>
name: string;
price: number;<br/><br/>
}

</div>

<a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">How TypeScript can be used to enforce strict typing in JavaScript:</span>

The TypeScript language unlike the JavaScript programming language is a "strongly typed" language. This indicates that data structures as well as variables can be set as a specific data type when declared. TypeScript then processes the code and ensures that the data is correct and this is verified according to the types that the variables/data structures were originally declared as. As JavaScript is a "loosely typed" programming language, this approach is not possible without the use of TypeScript.

<a href="https://www.infoworld.com/article/3538428/what-is-typescript-strongly-typed-javascript.html#:~:text=In%20particular%2C%20TypeScript%20is%20strongly,JavaScript%2C%20which%20is%20loosely%20typed." style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

### <span style="color: red; text-decoration: underline">References:</span>

<div style="font-size: 12px; color: red">
<br/>
<li>
<a href="https://www.dropbox.com/home/Luke%20-59210/Full%20Stack%20Web%20Developer/Task%2020?preview=WD+L3T20+-+Interview+Prep_+Interfaces.pdf" style="color: white" target="_blank">hyperiondev.com</a>
</li>

<br/>
<li>
<a href="https://jscriptpatterns.blogspot.com/2013/01/javascript-interfaces.html" style="color: white" target="_blank">jscriptpatterns.blogspot.com</a>
</li>

<br/>
<li>
<a href="https://www.typescriptlang.org/docs/handbook/interfaces.html" style="color: white" target="_blank">typescriptlang.org</a>
</li>

</div>
