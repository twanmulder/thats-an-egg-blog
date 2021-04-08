---
path: css-enalbing-pattern
date: 2021-03-29T11:17:58.551Z
title: Make your CSS Readable and Maintainable with the CSS Enabling Pattern
categories: CSS
description: It’s 2021, stop disabling CSS and learn the how and why of the
  “Enabling” CSS Pattern.
---
![Cover image by Atikh Bana from Unsplash. Decorative](/assets/csspattern-bg.jpg)
*Photo by [Atikh Bana](https://unsplash.com/@tikh) on [Unsplash](https://unsplash.com/s/photos/yellow-woman)*

The "Enabling" Pattern is a CSS Pattern that can be explained in 1 sentence.

> Instead of using "Disabling" selectors, you should focus on writing "Enabling" selectors.

Now I can hear you thinking.

*"What does that even mean?"*

Let me show you by example.

## What should I NOT do?

Let's say you've created a navigation using HTML:

![HTML code block showing a navigation built using the "nav" and "a" tags.](/assets/csspattern-1.png)
*Navigation using the `nav` and `a` tags*

```html
<nav>
  <a href="/html/">HTML</a>
  <a href="/css/">CSS</a>
  <a href="/js/">JavaScript</a>
  <a href="/python/">Python</a>
</nav>
```

Now you'd like to add a margin to all the "a" tags except for the last one.
Here's the usual, disabling way:

![CSS Code block showing the often used disabling pattern.](/assets/csspattern-2.png)

```css
a {
  margin-bottom: 1rem;
}

a:last-child {
  margin-bottom: 0;
}
```

First, you add a margin to all the "a" tags in the navigation. Then, you disable the bottom margin on the last element.

We call this the "disabling" pattern, because the `a:last-child` selector disables the previous selector's rule.

However, we can do better!

## What should I do?

Instead of overwriting our previous styling, we can style our navigation using "Enabling" selectors:

![CSS Code block showing how to use the :not CSS selector.](/assets/csspattern-3.png)
*Using the :not selector to style our "a" tags*

```css
a:not(:last-child) {
  margin-bottom: 1rem;
}
```

The selector `a:not(:last-child)` is enabling `margin-bottom` on all elements except the last one. There's no need to disable anything.

This will make your CSS not only more readable, but also **a lot easier to maintain**!

Another great selector that will get you (almost) the same result is the `+` CSS Selector. Using it like below will get you the same result!

![CSS Code block showing how to use the :not CSS selector.](/assets/csspattern-4.png)
*Using the "+" selector to styling our "a" tags*

```css
a + a {
  margin-top: 1rem;
}
```

In the above example, we add a `margin-top` to all the "a" tags that have a previous sibling.

This means that all the tags, except for the first one, will have a margin-top added to it.

**That's all there is to it!**