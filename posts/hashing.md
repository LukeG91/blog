---
title: "How JavaScript uses hashing"
date: "August 12th 2021"
excerpt: "This article we will discuss the popular interview topic known as Hashing"
cover_image: "/images/posts/hashing.jpg"
---

## <span style="text-decoration: underline">What is hashing in computer programming and what is it used for?</span>

Hashing is a very important concept to understand in computer programming as it is very powerful. Hashing takes in specific data such as a password
and then a specific hashing function or hashing algorithm will perform mathematical operations on it, this will result in the data being changed/hashed. This is especially important when storing passwords as storing user passwords in plain text in a database is not best practice and is very insecure.

#### <span style="text-decoration: underline">Okay, so now that we know what it is, let's see why we use it:</span>

<div style="font-size: 14px">

- A key reason is the one mentioned above relating to hasing password information as it is not safe to store a password in a database in plain text.

- Another reason why software developers would make use of hashing is because it can be used for version control. When the same data is used, one of the hashing algorithms will return the same digest. Simply, this means that developers can make a comparison between the digests of the files and if they match then this will indicate that these files are the same.

- Developers will also regularly make use of hashing in order to generate hash tables.

<a href="https://www.dropbox.com/home/Luke%20-59210/Full%20Stack%20Web%20Developer/Task%2021?preview=WD+L3T21+-+Interview+Prep_+Hashing.pdf" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

</div>

#### <span style="text-decoration: underline">What is a hash table and what are it's benefits?</span>

Hash tables are data structures that use an "associative array abstract data type", it has the ability to map keys with value pairs. The hash table makes use of a specific functions/algorithms to calculate a specific index which is known as the "hash code" into either an array of slots or buckets, and from the array the element that is being searched for can be located. <a href="https://en.wikipedia.org/wiki/Hash_table" style="color: red; text-decoration: underline" target="_blank"><em>"original source"</em></a><br/>
Hash tables reduce the amount of time it takes to locate data, this is done by using the O(1) complexity model as apposed to that of the binary search which uses the O(log N) complexity model. To summarise this point, the main benefit provided by hash tables is speed.

#### <span style="text-decoration: underline">What is the difference between hashing and encryption:</span>

#### <span style="text-decoration: underline">Hashing:</span>

Hashing functions are used to map data of arbitrary size to fixed values, the data that gets returned by these functions are either hash codes, hash values, digests or hashes. Another point to mention is the concept of hashing or scatter storage addressing which indicates that a hash function has been used to index a specific hash table.

<a href="https://en.wikipedia.org/wiki/Hash_function" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">Encryption:</span>

In the world of cryptography we refer to encryption as a way in which to encode specific information. The process involved to do this will convert the initial display of the data from plaintext to ciphertext. The ciphertext can be decoded back to plain text, in order to do so specific deciphering techniques/methods will need to be used.

<a href="https://en.wikipedia.org/wiki/Encryption#:~:text=In%20cryptography%2C%20encryption%20is%20the,alternative%20form%20known%20as%20ciphertext.&text=For%20technical%20reasons%2C%20an%20encryption,key%20generated%20by%20an%20algorithm." style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">What is a Map object and how can it be used:</span>

In JavaScript, a Map object is responsible for storing the key value pairs, another important point to note is that any data type can be used for the key or values. Also to mention, a Map object will store the original key insertion order in memory and the Map is also able to take in an optional object that is iterable, this object will need to contain data that is stored using key value pairs.

<a href="https://www.javascripttutorial.net/es6/javascript-map/#:~:text=By%20definition%2C%20a%20Map%20object,insertion%20order%20of%20the%20keys.&text=The%20Map()%20accepts%20an,elements%20are%20key%2Dvalue%20pairs." style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

**Creating a Map object**

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%">
<p>
let playerPositions = new Map();
</p>

</div>

<a href="https://www.javascripttutorial.net/es6/javascript-map/" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

**Adding data to the Map object**

<div style="color: black; background-color: #fff; overflow-x: auto; word-wrap: break-word; word-break: break-word; width: 95%; height: 95%; padding-left: 5%; padding-right: 5%">
<p>
let playerName = {name: "Luke Glendining"} <br/><br/>
playerPositions.set(playerName, 'Center Back');
</p>

</div>

<a href="https://www.javascripttutorial.net/es6/javascript-map/" style="color: red; text-decoration: underline" target="_blank"><em>Information source</em></a>

#### <span style="text-decoration: underline">Comparison between Objects and Maps:</span>

I have quoted the explanation from the developer.mozilla.org resource below:

"Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), Object has been used as Map historically."

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" style="color: red; text-decoration: underline" target="_blank"><em>Original Information source</em></a>

Taking the above into account, there are however certain differences that make the Map the better choice in certain instances. We will explore a few of these below:

#### <span style="text-decoration: underline">Accidental Keys:</span>

**Map**
By default the Map() will not have keys, it only stores what is added to it.

**Object**
The Object in JavaScript however contains a prototype, this indicates that it will store default keys. This can result in problems as these default keys can clash with other keys that have been added to the Object.

#### <span style="text-decoration: underline">Size:</span>

**Map**
The Map contains a size property which makes it very simple to obtain the amount of items within the Map.

**Object**
An Object in JavaScript does not contain the same feature as the Map in this instance and in turn, in order to retrieve the amount of items within an Object, a manual operation needs to be performed.

#### <span style="text-decoration: underline">Performance:</span>

**Map**
In a scenario whereby there are constant interactions(adds and deletes) with the key-value pairs, the Map is a strong performer.

**Object**
The Object in JavaScript does not out perform the Map in this instance as it is not designed to handle constant adds and deletes of key value pairs.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" style="color: red; text-decoration: underline" target="_blank"><em>Original Information source</em></a>

#### <span style="text-decoration: underline">How is hashing used in Maps and Objects:</span>

**Map**

Map Objects in JavaScript are normally implemented with hash tables or alternative methods that normally achieve access times that are sublinear in accordance with the amount of elements that are stored.

<a href="https://262.ecma-international.org/6.0/#sec-map-objects" style="color: red; text-decoration: underline" target="_blank"><em>Original information source</em></a>

**Objects**

A JavaScript Object by default is a hash, however the Hash does provide a host of features that allow the developer to perform functions such as iterate over key value pairs, etc. To implement a Hash on a JavaScript Object we can make use of the new keyword followed by the Hash() function. From here the developer can input a JavaScript Object or Hash which would result in a clone and the original object will be unaffected.

<a href="http://prototypejs.org/doc/1.6.0/hash.html" style="color: red; text-decoration: underline" target="_blank"><em>Original information source</em></a>

### <span style="color: red; text-decoration: underline">References:</span>

<div style="font-size: 12px; color: red">
<br/>
<li>
<a href="https://www.dropbox.com/home/Luke%20-59210/Full%20Stack%20Web%20Developer/Task%2021?preview=WD+L3T21+-+Interview+Prep_+Hashing.pdf" style="color: white" target="_blank">hyperiondev.com</a>
</li>

<br/>
<li>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" style="color: white" target="_blank">developer.mozilla.org</a>
</li>

</div>
