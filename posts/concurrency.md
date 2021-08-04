---
title: "Concurrency in Web Development"
date: "July 30th 2021"
excerpt: "This article discusses what concurrency is and how this concept is applied in software development"
cover_image: "/images/posts/concurrency.jpg"
---

## What is concurrency in Web Development:

<hr/>

Concurrency is a vital part of Web Development, why do I say this? The reason is in today's world web applications service hundres, thousands and in some cases millions of users at the same time.
Concurrency allows the application to be able to handle and process multiple requests simultaneously.

Concurrency allows the performance of a program to be bumped up due to it's ability to run multiple processes and tasks simultaneously. An example where this can be very useful is when there is a task that will take a large amount of time to complete, it can run while the other smaller/regular process of the application are running.

When we think of real world examples of concurrent pieces of software, for me the first type of software that comes to mind is an operating system. Computers, mobile phones, laptops and tablets now all have powerful CPU's that can handle many processes at the same time allowing the operating system to run multiple applications at the same time. The more advanced the CPU and the more RAM in the device the more operations the device will be able to handle at the same time.

There are 2 basic units involved in concurrency, these units are name processes and threads. Software programs are built using code from various programming languages available today, these programmes are stored on a HDD or SSD or in non-volatile memory. Non-volatile memory computer memory that can store information even after power has been removed from the machine. In order for the software programme to run it requires memory as well as other system resources.

### Processes and Threads:

<hr>

#### Processes:

A process symbolises a program that has been loaded into memory along with the resources that it requires to run successfully. All software programmes require vital resources such as _registers_, a _program counter_ and a _stack_.

Each instance of a running program is a process, it is possible to have many different instances of a single program. Each process runs independantly from the others and they are isolated from the other processes that are running as all processes contain a seperate memory address space.

The register forms part of the CPU of the device and it's role is to store data. The register is able to store an instruction that the program needs to follow, a storage address or any other data that is needed by the process. The _program_ counter keeps track of where the device is in it's program sequence. The stack is a data structure that stores information about the active sub routines of a computer program, this is used for scratch space for the process.

#### Threads:

A thread is the unit of execution that is present in a process. Processes have the ability to contain multiple threads, however a thread is not able to contain a process. In a scenario whereby the process contains a single thread it is known as a single-threaded process, in such an instance the process and the thread are the same. These types of processes are only capable of completing/achieving a single goal/task.

Threads that contain multiple processes are known as multi-threaded processes, these processes can accomplish several things at pretty much the same time.

## References:

- [spec-india.com](https://www.spec-india.com/blog/what-is-application-concurrency)

- [toptal.com](https://www.toptal.com/software/introduction-to-concurrent-programming)

- [gowthamy.medium.com](https://gowthamy.medium.com/concurrent-programming-introduction-1b6eac31aa66)

- [hyperiondev.com](https://www.dropbox.com/home/Luke%20-59210/Full%20Stack%20Web%20Developer/Task%2018?preview=WD+L3T18+-+Interview+Prep_+Concurrency.pdf)
