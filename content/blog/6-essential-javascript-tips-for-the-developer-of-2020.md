---
path: 6-essential-javascript-tips-for-the-developer-of-2020
date: 2020-09-07T20:34:23.514Z
title: 6 Essential JavaScript Tips for the Developer of 2020
categories: JavaScript, Performance
description: Doesn’t matter if you’re a noob or a pro, you should read these!
---
![](https://cdn-images-1.medium.com/max/2400/1*6lr62oeoWQnRyvKhEE7fpA.png)

JavaScript keeps adding new and neat features. Sometimes, it’s hard to keep up. In this article, I’ll share a couple of cool tips & tricks to keep you up to speed and deepen your JS knowledge.

## 1. Get the last items of an array using the Slice method

![](https://cdn-images-1.medium.com/max/2400/1*NRLk5BnEph8BJJB6Js1bEg.png)

I never knew the slice method takes negative integers. It’s a great way of getting the last items of an array. Just enter the number of items you want from the end of the array as a negative argument to the slice function, and there you go!

```javascript
let array = [0, 1, 2, 3 ,4 , 5 , 6 , 7 , 8 , 9];

console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]
```

A great benefit to the slice method is that it doesn’t affect the original array, so it will stay as it was.

## 2. Set a key of an object dynamically using square brackets

![](https://cdn-images-1.medium.com/max/2400/1*Uh28Jx4GxbOsUbDY2UBg5g.png)

Sometimes, when creating an object, you will want to change the name of one of the keys inside an object based on a certain condition or variable.

You can do this using square brackets!

```javascript
const dynamic = "model";
const item = {
  brand: "Porsche",
  [dynamic]: "Panamera"
}

console.log(item);
// { brand: "Porsche", model: "Panamera" }
```

Just set a string to a variable and you’ll be able to dynamically set it inside your new object.

## 3. Improve custom cursor performance by using “translate3d”

![](https://cdn-images-1.medium.com/max/2400/1*F0wNEy4TDPilcbFna4jIIQ.png)

Nowadays, a lot of websites use custom cursors.

There’s a huge debate going on about IF you should do this or not, but if you HAVE to do it, please use this simple trick to improve your performance.

You should transform the cursor’s position using “translate3d” instead of using its “top” and “left” properties.

```javascript
// Slow :(
customCursor.style.top = "100px";
customCursor.style.left = "50px";

// Better! :D
customCursor.style.transform = `translate3d(${xPosition}, ${yPosition}, 0)`;
```

*Why?*

2 reasons.

First, updating a top/right/bottom/left property of a DOM element will trigger a redraw of the layout layer. Avoiding this would be great for performance!

Secondly, using “translate3d” instead of the regular “translate” will force the animation into hardware acceleration. This will speed up performance and will make the animation/transition a lot smoother.

## 4. Set a variable default using “||”

![](https://cdn-images-1.medium.com/max/2400/1*bwE5AVWRL5ny0aa3cJLsDw.png)

The “||” operator will, just like inside an if statement, work as an OR operator.

This means, that it will check if the first value is truthy and if not, it’ll use the second value entered.

```javascript
doSomethingVeryCool = (coolParameter) => {
  const coolThing = coolParameter || "This is not so cool"
  console.log(coolThing);
}

doSomethingVeryCool("This is super cool")
// Result: "This is super cool"

doSomethingVeryCool()
// Result: "This is not so cool"
```

In the example above, it will check if the “coolParameter” is a truthy value and if not, it will set the string “This is not so cool” to the “coolThing” const.

This way, we can make sure we properly set-up a variable or object.

## 5. Get the average value of an array using the “reduce” method

![](https://cdn-images-1.medium.com/max/2400/1*whTUqzklTDqP9mxnr0Yrng.png)

The reduce method is a great way to loop through an array and get one single output based on the values inside the array.

One of the ways to use the reduce method is to get the average on an array.

```javascript
let values = [13, 2, 27, 90, 8, 57, 34];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
// avg = 33
```

We can get the total sum of all the items inside an array using the reduce method, after which we divide it by its length to get the average.

## 6. Convert truthy/falsy values to boolean

![](https://cdn-images-1.medium.com/max/2400/1*tsuLOYxPZtmogjar_QYnCQ.png)

JavaScript can be way too confusing when it comes to values being true/false/truthy/falsy.

A great simple trick to find out if a value is true/false is using the “!!” operator.

Above a couple of examples to get you started, but you can use the “!!” with any kind of value (string / int / array /object) you like!

- - -

## That’s all!

Thanks for reading, look at how much you’ve learned 😄

Want to improve your JS skills even more? Check out my other article, [5 Must-know Javascript Tips & Tricks](https://www.thatsanegg.com/blog/5-must-know-javascript-tips-tricks/) to get even better at JS 💪