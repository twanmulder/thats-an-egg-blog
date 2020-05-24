---
path: your-first-css-animation
date: 2020-04-18T20:10:09.181Z
title: Your First CSS Animation
description: Read all about creating beautiful and smooth web-animations using just CSS.
---
![Computer screen showing a code editor. The code is written in CSS.](../../assets/code-screen.png "CSS Animation in IDE")

*Let’s say you’re building your very first website. You’ve created your basic elements using HTML, added some pretty styling using CSS. Maybe you have even added some media-queries.*

*But there’s still something missing.*

*A little **flair**.*

*A little **personality**.*

*That’s where **CSS Animations** come into play!*

<hr/>

## Introduction

CSS Animations sure are something pretty. Using just a few lines of code we can make elements bounce, move, rotate, or even disappear.

Every single animation consists of **2 parts**.

The **first** step is creating the animation using so called “keyframes”.

The **second** one is adding this animation to an element and setting its animations “properties”.

### Follow along

So to follow along with this article you can open up your own text editor, but I also created a couple of Sandboxes for you to follow along without having to touch any code yourself.

These are the steps we will be following:

* **Creating an animation using keyframes**
* **Adding the animation to an element**

That’s all you’ll need 😄

## Creating an animation using keyframes

So what is a keyframe exactly? Wikipedia defines it as:

> A **keyframe** in animation and filmmaking is a drawing that defines the starting and ending points of any smooth transition. ([Wikipedia](https://en.wikipedia.org/wiki/Key_frame))

**Smooth.**

**Transition.**

Keyframes in CSS create a smooth transition between two CSS properties. Let’s say you want to fade in an object. You define its initial opacity and the new value of the opacity, after which CSS magically creates this smooth transition between the 2 points.

Let’s see how that could look in our CSS file.

First, the keyframes is called with the new animation’s name:

```css
@keyframes fadeIn {
}
```

Great! Next, we define a starting and ending point for this animation. This can be done using percentages (%), or using the words “from” and “to”. This could look like this:

```css
@keyframes fadeIn {
   0% { }
   100% { }
}
```

or this:

```css
@keyframes fadeIn {
   from { }
   to { }
}
```

Inside these brackets is where the CSS properties are defined. If we want to fade in our element, we start with its opacity at 0 (zero) and then set it to 1, which will show our element.

```css
@keyframes fadeIn {
   from { opacity: 0; }
   to   { opacity: 1; }
}
```

And that’s all for the first step! We now have created our first animation (called fadeIn), and defined what should happen when it’s called (go from 0 opacity to 1).

The only thing we need to do now, is add this animation to an already existing element.

## Adding the animation to an element

So now that we’ve created our first animation, let’s add it to an element! This can be anything you want. Think of text, a background-image, or even your entire webpage.

I’ve already created a line of text and a starry background, which we’ll animate.

Here it is:

<iframe
     src="https://codesandbox.io/embed/step-1-rotating-stars-9gwdb?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview&codemirror=1"
     style="height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="\\\[STEP 1] Rotating Stars"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

So what would this look like?

In its most simplest form, it could look like this:

```css
.text {
   animation: 5s fadein;
}
```

We add the animation to the text, and then define how long it should take.

That could be all you need!

**But,**

You could also add different properties to this animation, like:

A delay:

```css
.text {
   animation: 5s fadein 2s;
}
```

We can change its easing:

```css
.text {
   animation: 5s fadein 2s ease-in;
}
```

Or we could even set the “iteration count” (how many times the animation should play) :

```css
.text {
   animation: 5s fadein 2s ease-in infinite;
}
```

For the full list of CSS Animation properties, I highly recommend the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation).

So after adding our “fadeIn” animation to the text and stars, this is the result!

<iframe
     src="https://codesandbox.io/embed/step-2-rotating-stars-du7v1?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview&codemirror=1"
     style="height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="\\\[STEP 2] Rotating Stars"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Quite pretty, but most importantly, very simple!

## Wrapping up

To add just a little more flair to our little page, I added an animation to the background which rotates it. Here are the keyframes I used:

```css
@keyframes rotate{
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg);
   }
}
```

And here is how I added the animation to the background:

```css
.background {
   animation-name: rotate;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
}
```

Notice how I haven’t added a duration for this animation!

This is because the background exists of different elements, which we want to animate at different durations. This is what that looks like:

```css
.background > *:nth-child(1) {
   animation-duration: 16s;
}
.background > *:nth-child(2) {
   animation-duration: 20s;
}

/* etc. */
```

Putting it all together, this is the end-result 😄

<iframe
     src="https://codesandbox.io/embed/result-rotating-stars-nhndw?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview&codemirror=1"
     style="height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="\\[RESULT] Rotating Stars"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## In conclusion

Looking back, we’ve created an animation using keyframes, after which it can be added to an element of our webpage using the CSS “animation” property. This property takes at least the name of the animation and its duration, but many more can be added. A delay, iteration count, and easing are the most common ones.

Look at how much you’ve learned!

Thank you for reading!