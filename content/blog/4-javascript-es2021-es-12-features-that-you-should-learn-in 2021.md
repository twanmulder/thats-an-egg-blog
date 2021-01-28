---
path: 4-JavaScript-ES2021-Features-That-You-Should-Learn-in-2021
date: 2021-01-28T16:15:19.483Z
title: 4 JavaScript ES2021 (ES 12) Features That You Should Learn in 2021
categories: JavaScript
description: The logical assignment operator, Promise.any, and more.
---
![Cover image by Izzy Gerosa from Unsplash. Decorative](/assets/es2021-bg.jpg)
*Photo by [Izzy Gerosa](https://unsplash.com/@izzygerosa) on [Unsplash](https://unsplash.com/s/photos/yellow-car-snow)*

We're almost through the first month of January, so it's time to look at some awesome JavaScript features for ES2021 (ES 12). 

New features that are added to JavaScript each year go through a four-stage process, with the fourth stage being the last one. The new features we'll be going through are currently in the fourth stage and are expected to be released in mid-2021.

Let's get started!


## String.prototype.replaceAll

`String.prototype.replaceAll()` replaces all occurrences of a string with another string value.

In JavaScript, the `.replace()` method will currently only replace the first instance of a pattern.

![JavaScript Code block showing how to use the replace method.](/assets/es2021-1.png)

```javascript
let string = "Wow, he doesn't like Porsche? I guess he must be crazy!"

string.replace("he","she")
// Result: "Wow, she doesn't like Porsche? I guess he must be crazy!"
```
If we want to replace all the matches of a pattern in a string, the only way to achieve that is by using global Regular Expression (RegEx). A RegEx isn't a bad thing in and of itself, but it isn't the best in terms of performance.

With the new `.replaceAll()` method, we can update all the instances in one go without the performance hit of creating a RegEx:

![JavaScript Code block showing the use of the replace all method.](/assets/es2021-2.png)

```javascript
let string = "Wow, he doesn't like Porsche? I guess he must be crazy!"

string.replaceAll("he","she")
// Result: "Wow, she doesn't like Porsche? I guess she must be crazy!"
```

## Logical Assignment Operators

Now this sounds a little more complex.

You might know logical operations (like ??, &&, or ||).

You'll probably also know how an assignment work (using =).

The logical assignment operator combines logical operations (like ??, &&, or ||) with an assignment (e.g. =).

What does this look like?

Here are some examples:

**`a ||= b` returns `a` if `a` is truthy or `b` if `a` is falsy**

![JavaScript Code block showing the use of the logical assignment operator.](/assets/es2021-3.png)

```javascript
// The Old Way
if (!a) {
  a = b
}

// or 
a = a || b

// Using a Logical Assignment Operator
a ||= b
```

**`a &&= b` returns `b` if `a` is truthy or `a` if `a` is falsy**

![JavaScript Code block showing the use of the logical assignment operator.](/assets/es2021-4.png)

```javascript
// The Old Way
if (a) {
  a = b
}

// or 
a = a && b

// Using a Logical Assignment Operator
a &&= b
```

## Numeric Separators

Now this is mostly a cosmetic change that will have very little impact on the performance on your actual code, but it might help avoiding errors whenever you need to insert numeric values to your code (f.i. while defining constants).

It will also speed up reading numbers, even though it's just a very TINY amount. Not an enormous update that will change the way we program, but definitely a nice-to-have.

![JavaScript Code block showing how to use the numeric separator (underscore).](/assets/es2021-5.png)

```javascript
const MILLION = 1_000_000;       // 1000000
const BILLION = 1_000_000_000;   // 1000000000
```

The cool thing about the Numeric Separator, it that it can also be used after the period/comma of a number! Here are a few examples:

![JavaScript Code block showing how to use the numeric separator (underscore).](/assets/es2021-6.png)

```javascript
// You can break the digits in any way
const BIGNUMBER = 1234_5678_9_0;  // 1234567890

// Even after the comma/period
const PI = 3.1415_9265_3589;     // 3.141592653589

// However, ending or beginning with an underscore will return an error!
const BAD_PI = 3.14_15_;          // SyntaxError
const NO_MILLION = _1_000_000;    // ReferenceError
```

Keep in mind, that beginning or ending an integer/number with an underscore will return an error!

## Promise.any

Last but definitely not least is the `Promise.any` method.

The `Promise.any` method will accept an array of promises and will return as soon as the first one is FULFILLED.

Fulfilled is the keyword here.

There is a very similar method already available, `Promise.race`. However, `Promise.race` will return as soon as the first promise has been settled, not fulfilled. This means that `Promise.race` might return a rejected promise, even though the second one might have succeeded.

In contrast, the `Promise.any` method will only return if any of the promises SUCCEEDS.

This might look something like:

![JavaScript code block showing how to use the Promise any method.](/assets/es2021-7.png)

```javascript
Promise.any([get('www.medium.com'), get('www.thatsanegg.com')])
    .then(result => {
        console.log('First promise succeeded: ', result)
    });
```

If all promises were rejected, `Promise.any` throws a new type of error: `AggregateError`.

What's new about it is the `AggregateError` object represents an error where several errors are wrapped in a single error.

You can [read some more about the new error type on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError).

---

That's all!

Thank you so much for reading, I hope learned something new.

If you like reading about JavaScript or Web-Development in general, you can check out one of my recent Medium articles:

**[13 JavaScript One-Liners That'll Make You Look Like a Pro](/blog/13-javascript-one-liners-that’ll-make-you-look-like-a-pro/)**

or

**[What's the difference between Event Handlers & addEventListener in JS?](/blog/what’s-the-difference-between-event-handlers-addeventlistener-in-js/)**

Have a nice day 😄