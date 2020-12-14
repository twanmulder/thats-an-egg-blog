---
path: whats-the-difference-between-Event-Handlers-and-addEventListener-in-JS
date: 2020-11-16T15:49:14.690Z
title: What’s the difference between Event Handlers & addEventListener in JS?
categories: JavaScript
description: The difference is subtle but essential to know.
---
![A bike leaning against a yellow wall, decorative image.](/assets/button-bike.jpg "A bike leaning against a yellow wall, decorative image.")

Events!

An important way of making your website actually “*do stuff*”.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event) defines an Event as:

“The `Event` interface represents an event which takes place in the DOM.”

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.

For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box.

In this article, I’ll talk about **the 2 ways of handling events and which method you should use** depending on your situation.

## The 2 ways of handling JavaScript Events

As of today, there are 2 ways to handle events in JavaScript.

1. *By using an event handler*
2. *By adding an event listener*

So what do these look like?

### Method 1 — an Event Handler

An event handler can be recognized by **the JavaScript using an “EventHandler” property of the object**.

Sounds a little complex, but you’ve probably already seen it before.

It could look like something like this:

![JavaScript code block showing the use of an event handler](/assets/button-eventhandler.png "JavaScript code block showing the use of an event handler")
*Using the onclick event handler to log “Hello!” in the console*

```javascript
const button = document.querySelector(".btn");

button.onclick = function() {
  console.log("Hello!");
};

// OR

button.onclick = () => {
  console.log("Hello!");
};
```

In this example, the “onclick” event handler property is used so that when a user clicks on this button, it will log “Hello!” to the console.

The “onclick” event handler property is just one of MANY event handlers that can be used. For a full list, you can [check out the entire list on MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers).

### Method 2 — an Event Listener

The other method to use events in JavaScript is by adding an event listener to an object.

By adding an event listener to an object, we can catch a wide range of events triggered by the user or the browser.

You may also be familiar with this. They may look a little something like this:

![JavaScript code block showing the use of an event listener](/assets/button-eventlistener.png "JavaScript code block showing the use of an event listener")
*Using an added click event listener to log “Hello!” in the console*

```javascript
const button = document.querySelector(".btn");

button.addEventListener("click", function(event) {
  console.log("Hello!");
})

// OR

button.addEventListener("click", event => {
  console.log("Hello!");
})
```

The code above shows us the same example as used with the event handler, logging “Hello!” in the console when a user clicks the button.

This time, instead of using the “onclick” property, we add an event listener that will trigger on the “click” event, after which it logs “Hello!”.

There are also a TON of events that can be listened for using an event listener. Here is [the complete list of all events that can be listened for](https://developer.mozilla.org/en-US/docs/Web/Events).

## What’s the difference?

There’s a subtle, but important difference between these 2 methods of handling events.

If you’ll use the first method, event handlers, the difference is that if you add two event handlers for the same button click, the second event handler will *overwrite* the first and only that event will trigger.

Which takes us to the main learning:

***For a given element, you can only have one event handler per event type, but you can have multiple event listeners.***

That’s the key difference. So what does this look like?

![JavaScript code block showing how when you use the “onclick” property of an element twice, it will overwrite the first one.](/assets/button-multiple-eventhandler.png "JavaScript code block showing how when you use the “onclick” property of an element twice, it will overwrite the first one.")
*Here, the second event handler will overwrite the first one.*

```javascript
const button = document.querySelector(".btn");

button.onclick = () => {
  console.log("Hello!");
};

button.onclick = () => {
  console.log("How are you?");
};

// This wil log "How are you?" to the console.
```

In the example above, the “onclick” event handler is used twice.

That way, the first one will be overwritten and when a user clicks the button, it will log “How are you?” to the console.

### So what happens when we use “addEventListener”?

![JavaScript code block showing the use of multiple click event listeners.](/assets/button-multiple-eventlistener.png "JavaScript code block showing the use of multiple click event listeners.")
*Using event listeners, we can call multiple functions when a user clicks on the button.*

```javascript
const button = document.querySelector(".btn");

button.addEventListener("click", event => {
  console.log("Hello!");
})

button.addEventListener("click", event => {
  console.log("How are you?");
})

// This wil log 
// "Hello!"
// "How are you?"
// to the console
```

In the example above, we add multiple event listeners to the button.

This way, when a user clicks it, it will trigger both functions and log “Hello! How are you?” to the console.

## Which one should you use?

Which method you should use, will depend entirely on your use case.

Do you need to attach more than one event to an element? Will you in the future? Odds are, you will.

That’s why, **in general, the use of “addEventListener” is advised**.

## So what have we learned?

1. There are 2 methods of handling events, using an event handler property or adding an event listener.
2. For a given element, you can only have one event handler per event type, but you can have multiple event listeners.
3. In general, it’s advised to use event listeners.

Thanks for reading! I hope you learned something new today.

Want to improve your JS skills even more? Check out my other article “***[6 Essential JavaScript Tips for the Developer of 2020](/blog/6-essential-javascript-tips-for-the-developer-of-2020/)***" to get even better at JS.

Have a nice day! 😄