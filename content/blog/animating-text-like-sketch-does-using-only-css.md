---
path: animating-text-like-sketch-does-using-only-CSS
date: 2020-04-19T18:12:22.007Z
title: Animating text like Sketch does using only CSS
description: Using CSS to create a beautiful staggering text animation.
---
![The homepage of "Sketch", animating their hero title](../../assets/sketch-homepage.gif "Sketch’s landing page, which we’ll be recreating (partly)")

As a front-end developer/designer, I mostly use Figma or Adobe XD at my place of work. Recently though, I found myself wanting to try out Sketch. Landing on [their homepage](https://www.sketch.com/), there was a *staggering* text animation happening. As a small challenge to myself, I tried recreating it and sharing this process with you.

<hr/>

## Instructions / follow along

So to follow along with this article you can open up your own text editor, but I also created a couple of Sandboxes for you to follow along without having to touch any code yourself.

These are the steps we will be following:

* **HTML Layout**
* **CSS Animation**

That’s all you’ll need 😄

## HTML Layout

The way this animation is created, is using a “word” element inside a “wordContainer”. This way, we can position the “word” below the “wordContainer” and use CSS to hide it using “overflow: hidden”.

So we’ll first create a “textWrapper”, which contains the entire sentence we want to display.

``` html
<div class="textWrapper">
</div>
```

Inside of this, we will place a “wordContainer” for every single word of the phrase. This is the container of which we want to hide the overflow.

``` html
<div class="textWrapper">
   <div class="wordContainer"></div>
   <div class="wordContainer"></div>
   <div class="wordContainer"></div>
   <div class="wordContainer"></div>
</div>
```

Inside the “wordContainer”, we will place a “word” element, containing the correct word and a non-breakable space character, which allows us to use spaces using flex-box.

``` html
<div class="textWrapper">
   <div class="wordContainer">
      <div class="word">
         <p>Introducing&nbsp;<p>
      </div>
   </div>
   <div class="wordContainer">
      <div class="word">
         <p>Sketch&nbsp;<p>
      </div>
   </div>
   ... etc ...
</div>
```

Using some basic CSS styling, we now have a simple box showing our text.

<iframe
     src="https://codesandbox.io/embed/css-animation-appearing-text-through-overflow-hidden-65tqm?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview&codemirror=1"
     style="height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CSS Animation, appearing text through &quot;overflow: hidden&quot;"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## CSS Animation

*Now to the good part.*

First, we set every “wordContainer” to hide its overflow.

```css
.wordContainer {
   overflow: hidden;
}
```

Then, we position every single “word” down using the transform property.

```css
.word {
   transform: translateY(115%);
}
```

Next, we can create an animation which positions the “word”s to their original position.

```css
@keyframes up {
   100% {
      transform: translateY(0%);
   }
}
```

And finally, we call the animation on the “word”s and add some animation-delay to create a staggering effect.

```css
.word {
   animation: up 0.8s;
   animation-delay: 1.2s;
   animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
   transform: translateY(115%);
}
.wordContainer:nth-child(2) .word { 
   animation-delay: 1.35s;
}
.wordContainer:nth-child(3) .word { 
   animation-delay: 1.5s;
}
.wordContainer:nth-child(4) .word { 
   animation-delay: 1.65s;
}
```

And that’s it! We did it 🎉

<iframe
     src="https://codesandbox.io/embed/css-animation-appearing-text-through-overflow-hidden-ojitu?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview&codemirror=1"
     style="height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CSS Animation, appearing text through &quot;overflow: hidden&quot;"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Now this is a very static way to do this, and it can be built using Javascript to dynamically create these elements, but this was just a quick way of demonstrating how to recreate this effect.

Thank you for reading!

![Banner containing the logo of "Sketch"](../../assets/sketch-banner.png "Sketch banner")