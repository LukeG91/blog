---
title: "Interfaces in object oriented programming languages and prototype-based languages"
date: "August 11th 2021"
excerpt: "This article discusses interfaces in object oriented programming languages and prototype-based languages"
cover_image: "/images/posts/interfaces.jpg"
---

## <span style="text-decoration: underline">What is an interface in computer programming anf what are the benefits of using interfaces in OOP:</span>

Interfaces are a very important and key part of object oriented programming(OOP), interfaces can be implemented within an interface. Okay so that's all good and well but what is it? Well, let's find out... An interface is used to specify which attributes(properties and methods) a class needs to carry out.

Another point to note is that the interface does not include any code to add into the object. The interface will stipulate that a specific class is structured based on the interface that it is linked to and that it should contain a specific attricbute such as a specific method, however this method will not contain code.

In summary, the role of an interface is to stipulate the functions/operations that a particular class needs to do, however interfaces do not stipulate the way in which the operations/methods need to be carried out.

#### <span style="text-decoration: underline">Benefits of using interfaces in OOP:</span>

- Software developers make use of interfaces in order to achieve abstraction, which involves only presenting/displaying the data that is needed for a specific operation and hiding the data in the object that is not needed/not relevant from the user. Due to this interfaces are known for being able to hide the attributes/part of the object that is not relevant/not needed from the user.

- Software developers also like to implement the use of interfaces in order to ensure that classes are structured according to specific guidelines which stipulate which properties and methods need to be used.

- Another reason that Software developers may chose to use interfaces is that it can also be used toimplement "strict typing" to a certain extent.

## <span style="text-decoration: underline">Let's take a look at why JavaScript doesn't really use interfaces as well as how objects are created with JavaScript:</span>

#### <span style="text-decoration: underline">Why JavaScript doesn't really use interfaces:</span>

The JavaScript programming language is not an object-oriented programming language but is rather an object-based programming labguage which is based on prototypes. Interfaces are not really used within the JavaScript programming language due to the fact that interfaces are normally used within programming languages that are object-oriented based.

<a href="https://hackernoon.com/implementing-interfaces-in-javascript-with-implement-js-8746838f8caa" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">How objects are created with JavaScript:</span>

In the JavaScript programming language an object gets created using a class which is basically a blueprint that will be used to create objects. The class will specify the data/attributes as well as the methods that the objects need to contain.

#### <span style="text-decoration: underline">Example code below to illustrate how objects are created:</span>

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%; margin-top: 1%">
<p>
class Sports { <br/>
    constructor(sport){<br/>
        this.sport = sport;<br/>
    }<br/><br/>
displayFavouriteSport(){<br/>
        console.log(`Your favourite sport is ${this.sport}`);<br/>
    }
    
}

const Football = new Sports("Football");

Football.displayFavouriteSport()

</p>

</div>

### <span style="color: red; text-decoration: underline">References:</span>

<div style="font-size: 12px; color: red">
<br/>
<li>
<a href="https://www.dropbox.com/home/Luke%20-59210/Full%20Stack%20Web%20Developer/Task%2020?preview=WD+L3T20+-+Interview+Prep_+Interfaces.pdf" style="color: white" target="_blank">hyperiondev.com</a>
</li>

</div>
