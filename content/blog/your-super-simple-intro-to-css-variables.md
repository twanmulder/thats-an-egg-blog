---
path: your-super-simple-intro-to-css-variables
date: 2020-12-06T21:09:39.542Z
title: Your super-simple intro to CSS Variables
categories: CSS
description: In this article, I'll go through why you should know what CSS
  Variables are and how you can use them to level-up your CSS skills as a
  developer.
---
![Woman typing on laptop. Decorative image.](../../assets/cssvar-bg.jpg "Woman typing on laptop. Decorative image.")

I’ve been using CSS variables for quite some time now. They save me a bunch of time and headaches when it comes to writing CSS.

But maybe, you’re not familiar with them (yet 😉).

Maybe you are a little late to the CSS Variable game.

Or you’re just starting your journey as a web-developer and stumbled on the term “CSS Variable” or “CSS Custom Property” somewhere.

Maybe you just want to freshen up your knowledge on the concept.

In this article, I’ll go through why you should know what CSS Variables are and how you can use them to level-up your CSS skills as a developer.

- - -

## So what are CSS Variables?

*CSS Variables (or CSS Custom Properties) are entities defined by CSS authors that contain specific values to be reused throughout a document.*

Sounds a little technical, right?

Let’s break it down.

A CSS Variable will look a lot like a regular line of CSS.

But instead of using an already existing property like “font-size”, “margin”, or “padding”, we will create our own custom property.

Hence the name “CSS Custom Properties”.

- - -

## Okay, that’s cool, but how do I create a CSS Variable?

Declaring a CSS Variable is done using a custom property name that begins with a double hyphen (`--`), and a property value that can be any valid CSS value. Like any other property, this is written inside a ruleset, like so:

![CSS Code Block.](../../assets/cssvar-1.png "CSS Code Block.")

```css
element {
  --super-cool-text-color: red;
}
```

Note that the selector given to the ruleset defines the scope that the custom property can be used in.

This is why it is a common practice to add the CSS Variables to the `:root` pseudo-class.

`:root` is a pseudo-class that matches `<html>`. Actually, it's exactly the same as if we had used `html` in place of `:root` (except it has higher specificity).

So now, our CSS will look like this:

![CSS Code Block.](../../assets/cssvar-2.png "CSS Code Block.")

```css
:root {
  --super-cool-text-color: red;
}
```

Our CSS Variable `--super-cool-text-color` is now available anywhere in our CSS file.

This means we can now start styling our website using this variable.

- - -

## So we created a CSS Variable, now how do I use it?

*A CSS Variable can be accessed using the* `var()` *function in a CSS file.*

Now here is where the power of a CSS Variable really gets to shine.

Whenever you’re working on a large or complex project, your CSS tends to get complex as well.

Imagine you have some custom styling for the headers on your website:

![CSS Code Block.](../../assets/cssvar-3.png "CSS Code Block.")

```css
h1 {
  margin: 1rem 0 0.5rem 0;
  color: red;
  font-size: 2rem;
}
h2 {
  margin: 0.75rem 0 0.25rem 0;
  color: red;
  font-size: 1.75rem;
}
h3 {
  margin: 0.5rem 0 0.125rem 0;
  color: red;
  font-size: 1.5rem;
}
```

As you can see, we have used the color red for all of our headers.

But what if we want to change that color?

We’ll have to change it at three different places (for the h1, h2, and h3).

**Now, let’s add our CSS Variable magic:**

![CSS Code Block.](../../assets/cssvar-4.png "CSS Code Block.")

```css
/* CREATE OUR CSS VARIABLE */
:root {
  --super-cool-text-color: red;
}
h1 {
  margin: 1rem 0 0.5rem 0;
  /* USE OUR VARIABLE TO SET THE COLOR */
  color: var(--super-cool-text-color);
  font-size: 2rem;
}
h2 {
  margin: 0.75rem 0 0.25rem 0;
  color: var(--super-cool-text-color);
  font-size: 1.75rem;
}
h3 {
  margin: 0.5rem 0 0.125rem 0;
  color: var(--super-cool-text-color);
  font-size: 1.5rem;
}
```

Our color is now only defined once and we can access it from anywhere in our CSS file.

Then, we can access the CSS Variable using the `var()` function in our CSS to set the color of our headers to “red”.

Awesome!

If we now want to change the color of our text, we only have to update the CSS at one place, the variable that we have created:

![CSS Code Block.](../../assets/cssvar-5.png "CSS Code Block.")

```css
:root {
  --super-cool-text-color: blue;
}
h1 {
  margin: 1rem 0 0.5rem 0;
  color: var(--super-cool-text-color);
  font-size: 2rem;
}
h2 {
  margin: 0.75rem 0 0.25rem 0;
  color: var(--super-cool-text-color);
  font-size: 1.75rem;
}
h3 {
  margin: 0.5rem 0 0.125rem 0;
  color: var(--super-cool-text-color);
  font-size: 1.5rem;
}
```

And BOOM, all our headers just turned from red to blue.

If you want to fiddle around with this code, I’ve [created a sandbox where you can edit the CSS yourself and see what happens!](https://codesandbox.io/s/css-variables-21hzk?file=/src/styles.css)

- - -

## So now we know the basics, what are some do’s and don’ts?

Something that comes up a lot, is the naming of your variables.

A simple rule that you can keep in mind is:

> **"Don’t name your variable based on its content, but on its purpose."**

For example:

Let’s say you’re creating a variable for the background color of your website.

You might want to call the variable “--light-grey”, because you want the background to be light-grey.

![CSS Code Block.](../../assets/cssvar-6.png "CSS Code Block.")

```css
:root {
  --light-grey: #eee;
}
body {
  background-color: var(--light-grey);
}
```

***DON’T DO THIS***

Maybe a little later you don’t want the background to be grey, but white or black or red or green?

You’ll have to remove the “--light-grey” variable and create a new one and also update the variable in the “body” selector.

That’s so much work, work we were looking to avoid using a CSS Variable.

So instead of naming our variable “--light-grey”, let’s name it after its purpose, which is: Being the color of our background.

![CSS Code Block.](../../assets/cssvar-7.png "CSS Code Block.")

```css
:root {
  --body-background-color: #eee;
}

body {
  background-color: var(--body-background-color);
}
```

Now, if we want to update the color of our background, we know exactly which variable we need to change and we only need to change it at 1 place.

Saves a ton of time, and a ton of headaches!

- - -

## So, what about Internet Explorer?

Ah, the good old browser compatibility check.

Well, let’s see which browsers do and don’t support CSS Variables:

![Screenshot of MDN, showing the CSS Variables Browser Compatibility.](../../assets/cssvar-8.png "Screenshot of MDN, showing the CSS Variables Browser Compatibility.")

Well, that sucks.

Internet Explorer 11 doesn’t and will never support CSS Variables.

If you HAVE to support IE11 and want to use CSS Variables, you’ll have to create fallbacks in case a user is using IE11.

This might look something like this:

![CSS Code Block.](../../assets/cssvar-9.png "CSS Code Block.")

```css
:root {
  --body-background-color: #eee;
}
body {
  /* FALLBACK VALUE */
  background-color: #eee;
  /* CSS VARIABLE */
  background-color: var(--body-background-color);
}
```

This looks like it defeats the purpose of CSS Variables, and you’re pretty right to think so!

Thankfully, there is a way to work around this using some JavaScript.

It’s a little more complex, there’s an [awesome article on Readium that goes in-depth on this problem.](https://readium.org/readium-css/docs/CSS07-variables.html#fallback)

- - -

## So, what have we learned?

* We can create our own CSS Variables in the CSS files we’re using.
* We do this by creating a custom property that starts with 2 dashes.
* This property should be named based on its purpose, not on its content.
* Its value can be any valid CSS value.
* We can now use this CSS variable in our CSS file using the “var()” function.

I hope you learned something new today!

Thank you so much for reading. For a little more in-depth knowledge on CSS Variables, definitely check out [the MDN spec for them](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

If you like reading about CSS and web-development, you can read about "***[creating your first CSS animation](/blog/your-first-css-animation/)***" or "***[6 Essential JavaScript Tips for the Developer of 2020](/blog/6-essential-javascript-tips-for-the-developer-of-2020/)***".

Thanks! 😄