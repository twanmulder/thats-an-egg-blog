---
path: dynamically-creating-animations-using-greensock
date: 2020-04-20T20:37:24.571Z
title: Dynamically creating animations using Greensock
description: How you can utilise Greensocks powerful methods to create beautiful animations.
---
![The text "The best products start with Sketch" appear/slide in to frame](../../assets/dynamic-sketch.gif "This is what we’ll be generating dynamically!")

*This is actually a follow-up on my previous article “[Animating text like Sketch does using only CSS](https://www.thatsanegg.com/blog/animating-text-like-sketch-does-using-only-css/)”. It isn’t necessary to read it before going any further, but it does provide a good starting point and some basic knowledge of what is going on.*

<hr/>

GreenSock has created a *really* powerful animation tool called [GreenSock Animation Platform (GSAP)](https://greensock.com/gsap/). For more than 10 years, GSAP has held its head high above the water, drowning many other animation tools which couldn’t keep up.

Today, we’ll be recreating a text animation found on the [Sketch homepage](https://www.sketch.com/) using GSAPs stagger method. In comparison to my previous article, where we wrote static HTML to create this effect, we’ll be using Javascript to dynamically generate it for us.

## Instructions / follow along

So to follow along with this article you can open up your own text editor, but I also created a couple of Sandboxes for you to follow along without having to touch any code yourself.

These are the steps we will be following:

* **HTML Layout**
* **Setting up Javascript**
* **Animating using GSAP**

That’s all you’ll need 😄

## **HTML Layout**

First off, we’ll be starting with creating a so-called “textWrapper”. Inside it is where we’ll place the entire sentence.

``` html
<div class="textWrapper">
</div>
```

So far, nothing crazy. With some simple CSS styling, we get a page looking like this:

<iframe
     src="https://codesandbox.io/embed/css-animation-appearing-text-through-overflow-hidden-y2gyy?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CSS Animation, appearing text through &quot;overflow: hidden&quot;"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> 

## Setting up Javascript

*Finally something fun.*

So to fully understand how we will create this effect, I highly recommend reading [this 3 min. article](https://www.thatsanegg.com/blog/animating-text-like-sketch-does-using-only-css/) on the CSS logic behind it. In short, we create a “wordContainer” in which we’ll place a single word. Then, we hide its overflow and position the words below the container. This way, the words are not visible until we animate them upwards. We create a slight delay in the upward movement of the words, so they appear one after the other.

![A GIF showing the CSS overflow property](../../assets/overflow-container-animation.gif "TOP overflow: visible, BOTTOM overflow: hidden")

To start off, we define a sentence that we want to display. In this case, we’ll use “The best products start with Sketch”. We’ll put it in an array like this:

``` javascript
let sentence = ["The", "best", "products", "start", "with", "Sketch"];
```

Next, we’ll find and define our “textWrapper” and set up the soon to be textWrapperContent.

``` javascript
let textWrapper = document.querySelector(".textWrapper");
let textWrapperContent = "";
```

After this, we want to create a “wordContainer” element and a “word” element for every single word in the sentence array. We’ll use a FOR loop for this.

``` javascript
for (let i = 0; i < sentence.length; i++) {
}
```

Inside this FOR loop, we define our content and fill it with the “wordContainer” and “word” elements, plus the word it should contain.

``` javascript
for (let i = 0; i < sentence.length; i++) {
   let content = `
      <div class="wordContainer">
         <div class="word">
            <p>` + sentence[i] + `&nbsp</p>
         </div>
      </div>`;
}
```

You can see we add a *non-breakable space character* (&nbsp) inside the <p> tag, this way we don’t have to add them to every single word inside our array.

Finally, we add this “content” to our “textWrapperContent” variable and set the textWrappers innerHTML to be equal to that “textWrapperContent” variable.

``` javascript
for (let i = 0; i < sentence.length; i++) {
   let content = `
      <div class="wordContainer">
         <div class="word">
            <p>` + sentence[i] + `&nbsp</p>
         </div>
      </div>`;  
   textWrapperContent += content;
}
textWrapper.innerHTML = textWrapperContent;
```

So now, we have a page filled with our sentence, containing a “wordContainer” and “word” element for every single word inside the sentence array.

<iframe
     src="https://codesandbox.io/embed/css-animation-appearing-text-through-overflow-hidden-yosn8?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CSS Animation, appearing text through &quot;overflow: hidden&quot;"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## **Animating using GSAP**

So we’ve created our sentence dynamically, now let’s start animating it using GSAP!

First, a few basics of GSAP.

GSAP allows us to create a Timeline, on which we can plot our animations. This is great for when you want to chain a lot of animations.

Next to this, GSAP allows for a method called “Stagger”. This will take a number of objects (like an array), on which we can call the same animation. We’ll provide a delay duration to this method, and it will automatically animate our words one after the other.

### Here’s how it works:

First, we import GSAP. I did this [using NPM](https://greensock.com/docs/NPMUsage/), but you can also use [a CDN](https://greensock.com/get-started/#loading-gsap).

``` javascript
import { TimelineMax, Circ } from "gsap/all";
import "gsap/CSSPlugin";
```

We import the TimelineMax so we can use a Timeline, the “Circ” because we want to use Circular easing. Last, we import the CSSPlugin, so we can animate CSS properties with GSAP.

Then, we create a new timeline and define our easing.

``` javascript
let tl = gsap.timeline(),
    easing = Circ.easeInOut;
```

After this, we set a “words” variable, which finds all the “word” elements and puts them inside an array.

```javascript
let tl = gsap.timeline(),
    easing = Circ.easeInOut,
    words = document.querySelectorAll(".word");
```

Now, using GSAPs “Stagger” method, we can animate all the “word” elements!

``` javascript
tl.to(
   words,
   {
      duration: 0.8,
      transform: "translateY(0%)",
      ease: easing,
      stagger: 0.15,
   }
);
```

This may look a little confusing, so I’ll explain.

The stagger animation takes an array of elements, which is our “words” variable. After, it takes the number of seconds it should take every single word to animate up(0.8s). Lastly, we set the delay between every animated word, which is 0.15s.

And that’s all there is to it!

<iframe
     src="https://codesandbox.io/embed/dynamically-animating-text-using-gsap-l7hl4?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Dynamically animating text using GSAP"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Now, I highly recommend you to fork this Sandbox and started tinkering on your own! Start with adding/removing/changing words inside the sentence array and see what happens 😄

## In Conclusion

So far, we’ve created a very neat, dynamically generated text animation. We did this using an array containing our sentence and animated it with GSAPs “Stagger” method. Look at how much you’ve learned!

Thank you for reading!

![Banner containing the logo of "Sketch"](../../assets/sketch-banner-blue.png "blue Sketch banner")