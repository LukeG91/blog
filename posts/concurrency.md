---
title: "Concurrency in Web Development"
date: "July 30th 2021"
excerpt: "This article discusses what concurrency is and how this concept is applied in software development"
cover_image: "/images/posts/concurrency.jpg"
---

## What is concurrency in Web Development:

<hr style="width: 68%"/>

Concurrency is a vital part of Web Development, why do I say this? The reason is in today's world web applications service hundres, thousands and in some cases millions of users at the same time.
Concurrency allows the application to be able to handle and process multiple requests simultaneously.

Concurrency allows the performance of a program to be bumped up due to it's ability to run multiple processes and tasks simultaneously. An example where this can be very useful is when there is a task that will take a large amount of time to complete, it can run while the other smaller/regular process of the application are running.

When we think of real world examples of concurrent pieces of software, for me the first type of software that comes to mind is an operating system. Computers, mobile phones, laptops and tablets now all have powerful CPU's that can handle many processes at the same time allowing the operating system to run multiple applications concurrently. The more advanced the CPU and the more RAM in the device the more operations the device will be able to handle concurrently.

There are 2 basic units involved in concurrency, these units are name processes and threads. Software programs are built using code from various programming languages available today, these programmes are stored on a HDD or SSD or in non-volatile memory. Non-volatile memory computer memory that can store information even after power has been removed from the machine. In order for the software programme to run it requires memory as well as other system resources.

### Processes and Threads:

<hr style="width: 30%"/>

#### Processes:

<hr style="width: 11%"/>

A process symbolises a program that has been loaded into memory along with the resources that it requires to run successfully. All software programmes require vital resources such as _registers_, a _program counter_ and a _stack_.

Each instance of a running program is a process, it is possible to have many different instances of a single program. Each process runs independantly from the others and they are isolated from the other processes that are running as all processes contain a seperate memory address space.

The register forms part of the CPU of the device and it's role is to store data. The register is able to store an instruction that the program needs to follow, a storage address or any other data that is needed by the process. The _program_ counter keeps track of where the device is in it's program sequence. The stack is a data structure that stores information about the active sub routines of a computer program, this is used for scratch space for the process.

#### Threads:

<hr style="width: 10%"/>

A thread is the unit of execution that is present in a process. Processes have the ability to contain multiple threads, however a thread is not able to contain a process. In a scenario whereby the process contains a single thread it is known as a single-threaded process, in such an instance the process and the thread are the same. These types of processes are only capable of completing/achieving a single goal/task.

Threads that contain multiple processes are known as multi-threaded processes, these processes can accomplish several things at pretty much the same time. Threads contain their own stack but can also access shared data in the heap, due to this threads are known as lightweight processes. Due to threads sharing the same space as the process and the other threads, the operational cost of communication between threads is low. An important concept is that unlike a process, an issue with one thread in a process will affect other threads and the viability of the process as a whole.

#### Implementation of concurrency in Web Development:

<hr style="width: 58%"/>

As multiple threads share and occupy the same address space and in turn share global variables as well as state, this in turn provides the ability to implement mutual features for all of the request handlers, these include shared cache for cacheable responses within the web server.

Another method of implementing concurrency in your applications is by using the preforking strategy. Preforking will prompt the main server process will fork multiple copies of the 'Request Handler Process' when the system starts up. More likely than not, the thread-safe socket descriptor will be distributed and shared with all relevannt processes. Each of the processes that now contain the descriptor will block new connections, handle the currenct connection as well as be on stand by awaiting the next incomin request/connection. However, as the structure of a process is not streamlined the amount of concurrenct connections that it is able to handle will be limited. I worked on Apache web servers for over 5 years and I know that this web server provides a module that is based on preforking and it is a multi-processing module called Apache-MPM, this is the default multi-processing module for systems UNIX based Apache systems/servers. (_source_ - [http://berb.github.io](http://berb.github.io/diploma-thesis/original/042_serverarch.html))

### Implementing concurrency with Node.js

<hr style="width: 50%;"/>

Node.js supports the event-driven programming approach as it allows for asynchronous programming which means that is supports concurrency. This makes Node.js a fantastic choice to write very well running and efficient applications.

I/O functions that are performed within Node.js applications are known as non-blocking functions which means that these operations will run asynchronously while the application takes on other requests and process other lines of code while the I/O function is running, this is an example of how concurrency is implemented in Node.js applications. (_source_ - [https://medium.com](https://medium.com/platformer-blog/node-js-concurrency-with-async-await-and-promises-b4c4ae8f4510))

#### What role does asynchronous programming play in concurrency:

<hr style="width: 70%"/>

The asynchronous programming approach is a huge part of concurrency in Node.js as this approach allows for the application to process multiple requests simultaneously which is what the concurrent programming methodology is based on. When looking at it this way it is easy to understand the importance of the asynchronous programming approach in Node.js.

#### How are Web API's related to implementing concurrency:

<hr style="width: 61%"/>

In the modern world of technology building custom API's to achieve a specific goal is very common and they are very useful tools and they form vital parts of the Web Development world. API endpoints are set to perform a specific set of tasks in a specific order, and API's built using Node.js support asynchronous programming which is a massive part of currency in Node.js. API's that serve as endpoints to websites such as E-commerce or online booking sites to give a few examples can handle multiple requests concurrently and in turn are related to implementing concurrency in web development.

#### What is the event-loop in Javascript and how does it relate to concurrency:

<hr style="width: 81%"/>

The JavaScript event-loop is an extremely important and integral part of the JavaScript language as it provides a base for the asynchronous programming style that JavaScript supports. Operations are carried out on a single thread, however with the use of multiple data structures a system similar to multi-threading is produced. The event-loop needs to take care of running code, processing and queuing and storing the next processes that are still to be run. Due to the role that it plays and how it works it forms a crucial part of concurrency programming in JavaScript. So what goes on behind the scenes of an event loop and how does it work? Let's break it down. Firstly, the functions that need to be performed are stored within the call stack and once a function has completed that specific function will be removed(popped) from the stack.

Another integral part of the event-loop is the event queue, this is where the instructions relating to new functions that need to be run are sent from,
they are sent to the track where the functions are processed. In order to ensure that each function/operation is run in the correct order, there is a data structure called 'queue' which comes into play which handles this part of the operation.

Modern browser's that we use today contain browser API's. When an asynchronous function is called, it will be sent over to the client/browser API. Instructions will now be received from the call stack the browser API will begin a single-threaded operation. The next step in this process is for the operation to be sent over to the 'event queue'. This is where the event-loop comes into play as it is responsible for checking whether the call stack has any functions to pass over. If the call stack does not currently contian any functions then any new functions that come in will be added to the caall stack from the event queue. However if there is a function present in the call stack then that particular function will be processed.

### Comparison between how Oracle and MongoDB support DB concurrency:

<hr style="width: 92.5%"/>

#### How Oracle supports DB concurrecy:

<hr style="width: 39%"/>

This section is coming soon...

#### How MongoDB supports DB concurrency:

<hr style="width: 44%"/>

In order to ensure data consistency while allowing multiple clients to have read and write access to the same data, MongoDB employs locking and 'concurrency control' which is in place to stop clients from changing/updating the data at the same time. Database writes to single documents will happen and will complete in one process, so in other words the process needs to fully run and complete or it mustn't run, this way MongoDB ensures that the clients are provided with accurate and consistent data.

### Concurrency control:

<hr style="width: 27%"/>

<p style="font-size:12px">"Concurrency control ensures that database operations can be executed concurrently without compromising correctness. Pessimistic concurrency control, such as used in systems with locks, will block any potentially conflicting operations even if they may not turn out to actually conflict. Optimistic concurrency control, the approach used by WiredTiger, will delay checking until after a conflict may have occurred, aborting and retrying one of the operations involved in any write conflict that arises."</p>

<span style="text-decoration: underline">Source:</span>
[docs.mongodb.com](https://docs.mongodb.com/manual/reference/glossary/#std-term-concurrency-control)

Let's take a closer look at the type of locking that MongoDB makes use of... Multi-granularity locking is used in MongoDB databases, this type of locking provides MongoDB with the ability to lock operations at different levels, these levels include the global, database as well as the collection level. Another feature is that multi-granularity locking also provides the ability for "individual storage engines to implement their own concurrency control below the collection level (e.g., at the document-level in WiredTiger)."

<span style="border-bottom: 1px solid black; color: red">Original source linked below:</span> <br/>
[https://docs.mongodb.com/manual/faq/concurrency/](https://docs.mongodb.com/manual/faq/concurrency/)</span>

Reader-writer locks are part of the locking process that is employed by the MongoDB concurrency support system. These types of locks provide the ability for multiple users shared access to a particular resource, these include databases or collections. There are different locking modes that are important to note, these include the shared locking mode which is for read operations, the exclusive locking mode which is used for writes, the intent shared and intent exclusive modes will express the need to perform a read or a write operation on the on specific set of data, this will include the use of finer granularity locks, another important point to note is that when locking takes place or specific granularity levels, the levels above that particulr granularity level will be locked, this is done by using a lock type which is known as the [_"intent_lock"._](https://docs.mongodb.com/manual/reference/glossary/#std-term-intent-lock)

In order to provide more context into the locking that MongoDB employs, we can take a look at an example provided in the MongoDb documentation. When a collection within a database is locked for a writing operation,this will be done using the exclusive locking mode and will ensure that the corresponding database lock as well as the global lock will be locked using the intexnt exclusive locking method. Another important bit of information to note is the following which I have quoted directly from the MongoDB documentation: "A single database can simultaneously be locked in IS and IX mode, but an exclusive (X) lock cannot coexist with any other modes, and a shared (S) lock can only coexist with intent shared (IS) locks." [https://docs.mongodb.com/manual/faq/concurrency/](https://docs.mongodb.com/manual/faq/concurrency/)

### References:

<hr style="width: 14.5%"/>

<div style="font-size: 12px; color: red">

- [docs.mongodb.com](https://docs.mongodb.com/manual/faq/concurrency/)

- [docs.oracle.com](https://docs.oracle.com/cd/B19306_01/server.102/b14220/consist.htm)

- [educative.io](https://www.educative.io/edpresso/what-is-an-event-loop-in-javascript)

- [medium.com](https://medium.com/platformer-blog/node-js-concurrency-with-async-await-and-promises-b4c4ae8f4510)

- [berb.github.io](http://berb.github.io/diploma-thesis/original/042_serverarch.html)

- [spec-india.com](https://www.spec-india.com/blog/what-is-application-concurrency)

- [toptal.com](https://www.toptal.com/software/introduction-to-concurrent-programming)

- [gowthamy.medium.com](https://gowthamy.medium.com/concurrent-programming-introduction-1b6eac31aa66)

- [hyperiondev.com](https://www.dropbox.com/home/Luke%20-59210/Full%20Stack%20Web%20Developer/Task%2018?preview=WD+L3T18+-+Interview+Prep_+Concurrency.pdf)

</div>
