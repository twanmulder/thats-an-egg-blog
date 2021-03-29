---
path: the-best-javascript-features-of-the-last-four-years
date: 2021-03-03T14:25:38.515Z
title: The 8 Best JavaScript Features of the Last Four Years
categories: JavaScript
description: Get up-to-date with JavaScript in just a few minutes
---
![Cover image by Herson Rodriguez from Unsplash. Decorative](/assets/eshistory-bg.jpg)
*Photo by [Herson Rodriguez](https://unsplash.com/@hero) on [Unsplash](https://unsplash.com/s/photos/yellow-car)*

In September 1995, a Netscape programmer named Brendan Eich developed [a new scripting language](https://superhighway.dev/javascript-25-years-1995) in just 10 days.

It was originally named Mocha, but quickly became known as LiveScript and, later, JavaScript.

Since its invention, JavaScript has evolved to be one of, if not the BIGGEST programming language in the world.

Every year, ECMA releases a new JavaScript version with new features. **In this article, we’ll go through the best and most useful features that have been introduced in the last four years.**

## ES2018

### Rest/Spread Properties

One of the most interesting features added to ES2015 was the spread operator. This operator makes copying and merging arrays a lot simpler. Rather than calling the `concat()` or `slice()` method, you could use the `...` operator:

![JS code block showing how to use the spread operator (“…”) to merge 2 arrays](/assets/eshistory-1.png)

```javascript
const array1 = [10, 20, 30];
const array2 = [40, 50];

// Merge array2 with array1
const merge = [...array1, ...array2];

console.log(merge);
// Result: [10, 20, 30, 40, 50]
```

ES2018 introduces the same concept but for objects:

![JS code block showing how to use the spread operator (“…”) on an object](/assets/eshistory-2.png)

```javascript
const object = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = object;
// Result:
// a = 1
// x = { b: 2, c: 3 }
```

The spread operator can be used within other objects. For example:

![JS code block showing how to combine multiple objects into 1 using the spread operator](https://cdn-images-1.medium.com/max/800/1*VoIptd0zHHzsTxf9wREr7w.png)

```javascript
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { ...object1, z: 26 };

// Result: 
// obj2 is { a: 1, b: 2, c: 3, z: 26 }
```

### `Promise.prototype.finally()`

Another exciting addition to ES2018 is the `finally()` method.

Several JavaScript libraries had previously implemented a similar method, which proved useful in many situations.

With the `finally()` method, programmers will be able to execute a block of code regardless of the promise’s fate. Let’s look at a simple example:

![JS code block showing how to use the .finally() method](/assets/eshistory-3.png)

```javascript
fetch('file.json')
  .then(data => data.json())
  .catch(error => console.error(error))
  .finally(() => console.log("finished"))

// Result: Will log "finished" no matter the result of the fetch
```

## ES2019

### flat()

The `flat()` method enables you to easily concatenate (“flatten”) all sub-array elements of an array. Consider the following example:

![JS code block showing how to flatten an array using the .flat() method](/assets/eshistory-4.png)

```javascript
const arr = ['a', 'b', ['c', 'd']];
const flattened = arr.flat();

console.log(flattened);    
// Result: ["a", "b", "c", "d"]
```

Previously, you’d have to use `reduce()` or `concat()` to get a flat array:

![JS code block showing the old way of flattening an array, using “concat”.](/assets/eshistory-5.png)

```javascript
const arr = ['a', 'b', ['c', 'd']];
const flattened = [].concat.apply([], arr);

// or
// const flattened =  [].concat(...arr);

console.log(flattened);    
// Result: ["a", "b", "c", "d"]
```

### Object.fromEntries()

Transforming data from one format to another is very common in JavaScript. To facilitate the conversion of objects into arrays, ES2017 introduced the `Object.entries()` method. This method takes an object as an argument and returns an array of the object’s own enumerable string-keyed property pairs in the form of `[key, value]`.

But what if we wanted to do the opposite and convert a list of key-value pairs into an object?

ES2019 introduces the new `Object.fromEntries()` method, which enables you to do just that!

![JS code bock showing how to use the .fromEntries() method to create an object from an array.](/assets/eshistory-6.png)

```javascript
const myArray = [['one', 1], ['two', 2], ['three', 3]];
const obj = Object.fromEntries(myArray);

console.log(obj);    
// Result: {one: 1, two: 2, three: 3}
```

## ES2020

### Optional Chaining

This feature is going to make your code a lot more readable!

Optional chaining syntax allows you to access nested object properties without having to verify if the parent property exists every time.

See the comparison:

![JS code block showing how to use the optional chaining syntax to define a variable.](/assets/eshistory-7.png)

```javascript
// Without optional chaining
let userAdmin = undefined;
if (payload.access && payload.access.admin && payload.access.admin[0]) {
  userAdmin = payload.access.admin[0].user;
}

// With optional chaining
const userAdmin = payload.access?.admin?[0]?.user;
```

Instead of declaring a `let` variable and including some condition to affect its value, I can do it in one line without any condition and by using a `const`.

If the property is not found, `undefined` will be returned. Super helpful!

### Nullish Coalescing (??)

Nullish coalescing adds the ability to truly check `nullish` values instead of `falsey` values. What is the difference between `nullish` and `falsey` values, you might ask?

In JavaScript, a lot of values are `falsey`, like empty strings, the number 0, `undefined`, `null`, `false`, `NaN`, and so on.

However, a lot of times you might want to check if a variable is nullish — that is if it is either `undefined` or `null`, like when it's okay for a variable to have an empty string, or even a false value.

In that case, you’ll use the new nullish coalescing operator, `??`

Can you spot the difference between `||` and `??`:

![JS code block showing the difference between “||” and the new “??”.](/assets/eshistory-8.png)

```javascript
console.log(0 ?? true) // 0
console.log(0 || true) // true

console.log('' ?? 'Hello World!') // ''
console.log('' || 'Hello World!') // 'Hello World!'

console.log(false ?? true) // false
console.log(false || true) // true

console.log(NaN ?? 5) // Nan
console.log(NaN || 5) // 5

console.log(null ?? true) // true
console.log(null || true) // true
```

## ES2021

### String.prototype.replaceAll

`String.prototype.replaceAll()` replaces all occurrences of a string with another string value.

In JavaScript, the `.replace()` method will currently only replace the first instance of a pattern.

![/assets/eshistory-9.png)

```javascript
let string = "Wow, he doesn't like Porsche? I guess he must be crazy!"
string.replace("he","she")

// Result: "Wow, she doesn't like Porsche? I guess he must be crazy!"
```

If we want to replace all the matches of a pattern in a string, the only way to achieve that is by using global Regular Expression (RegEx). A RegEx isn’t a bad thing in and of itself, but it isn’t the best in terms of performance.

With the new `.replaceAll()` method, we can update all the instances in one go without the performance hit of creating a RegEx:

![JS code block showing how to update all the occurrences of a certain string by using the .replaceAll() method.](/assets/eshistory-10.png)

```javascript
let string = "Wow, he doesn't like Porsche? I guess he must be crazy!"
string.replaceAll("he","she")

// Result: "Wow, she doesn't like Porsche? I guess she must be crazy!"
```

### Numeric Separators

Now this is mostly a cosmetic change that will have very little impact on the performance on your actual code, but it might help avoiding errors whenever you need to insert numeric values to your code (f.i. while defining constants).

It will also speed up reading numbers, even though it’s just a very TINY amount. Not an enormous update that will change the way we program, but definitely a nice-to-have.

![JavaScript Code block showing how to use the numeric separator (underscore).](/assets/eshistory-11.png

```javascript
const MILLION = 1_000_000;       // 1000000
const BILLION = 1_000_000_000;   // 1000000000
```

The cool thing about the Numeric Separator, it that it can also be used after the period/comma of a number! Here are a few examples:

![JavaScript Code block showing how to use the numeric separator (underscore).](/assets/eshistory-12.png)

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

![](/assets/eshistory-13.png)

Thanks for reading! I hope you learned something new today.

> Want to get the most out of your website? Check out my e-book “**[Your Website Sucks](https://flurly.com/p/your-website-sucks)**” and download a chapter for free!

Want to improve your JavaScript skills even more? Check out my other articles: “**[The 7 JS Array Methods you will need in 2021](/blog/the-7-js-array-methods-you-will-need-in%C2%A02021/)**” or “**[What’s the difference between Event Handlers & addEventListener in JS?](/blog/what’s-the-difference-between-event-handlers-addeventlistener-in-js/)**” to get even better at JavaScript.

Have a nice day! 😄