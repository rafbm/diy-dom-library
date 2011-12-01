Do-It-Yourself DOM Library
==========================


Intro
-----


[diy-dom-library](https://github.com/rafBM/diy-dom-library) is a starter kit for developing you’re own jQuery-based DOM library. It includes:

- a basic JavaScript class (`DomWrapper`) with placeholder methods and a global `$` shortcut to the class’ constructor
- an HTML playground to mess around with some DOM
- unit tests so you can feel good about your progress

The purpose of this is of course to learn. And have fun. You’ll love to find out how jQuery uses these low-level DOM APIs internally to build an expressive, powerful and flexible API on top of it.


### Why jQuery?

Because it has become the de facto standard and everyone is familiar with its API. If you’ve never used jQuery, you’re probably not into front-end web development. [Zepto](http://zeptojs.com/) is also based on a jQuery-compatible API.


### Getting started

```sh
git clone git@github.com:rafBM/diy-dom-library.git
cd diy-dom-library
git submodule init # for qunit
git submodule update
```


### Testing

Open `test/index.html` in a browser of your choice.


### “Is this thing complete?”

Definitely not! Feel free to add missing methods and tests.


Specs
-----

First of all, please **don’t waste your time with cross-browser compatibility** first. Start by coding for and testing in your favourite browser only. This way you won’t encounter quirks that require you to find two different solutions to the same problem before considering it done. You will progress much faster and will be much more motivated.

You might want to iterate on your project by multiple steps. Then this could be a pretty good road map to have:

### The Basics

```
$(selector)
$(html_string)

.each(callback)

.text([text]) (be careful about how you decide to get or set…)
.html([html]) (be careful about how you decide to get or set…)

.addClass
.removeClass
.hasClass
.toggleClass

.is(selector)

.append(element)
.append(html_string)
.prepend(element)
.prepend(html_string)
.before(element)
.before(html_string)
.after(element)
.after(html_string)
.remove

.find([selector]) (watch out for duplicates!)
.prev([selector])
.next([selector])
.parent([selector])

.css (accept numbers for pixel values, but there’s a catch…)

.on(event, callback)
```

Always make sure calling methods on empty DomWrapper sets doesn’t break!


### Grown Up

```
$(selector, context)
$(HTMLCollection)
$(element)

.addClass, .removeClass, .toggleClass with multiple classes

.filter(selector)
.not(selector)

.append(DomWrapper_instance)
.append(HTMLCollection)
.prepend(DomWrapper_instance)
.prepend(HTMLCollection)
.before(DomWrapper_instance)
.before(HTMLCollection)
.after(DomWrapper_instance)
.after(HTMLCollection)

.children([selector])
.siblings([selector])
.closest([selector])

.css(map)

.on('mouseenter')
.on('mouseleave')
.on('event1 event2 event3', callback)
.off
```

*Then* you could start thinking about cross-browser support.


### Advanced (overkill…)

```
$(DomWrapper_instance)

.append, .prepend, .before and .after with multiple arguments

.on(map)

event delegation
```


Resources
----------


### [Quirskmode](http://quirksmode.org/)

Just skim through [The Great Compatibility Tables](http://quirksmode.org/compatibility.html) and you’ll learn plenty. Other articles are also worth mentioning:

- http://quirksmode.org/dom/getstyles.html
- http://quirksmode.org/js/events_advanced.html
- http://quirksmode.org/js/events_order.html
- http://quirksmode.org/js/events_mouse.html


### [Mozilla Developer Network](https://developer.mozilla.org/en/Gecko_DOM_Reference)

Of course.


### [Dottoro](http://help.dottoro.com/)

Surprisingly awesome resource for anything client-side, including massive amounts of cross-browser tips.


### [Can I use?](http://caniuse.com/)

Scroll to the bottom, click “Show all” and explore!


### Random clues

`querySelectorAll`, `createContextualFragment`, `insertAdjacentHTML`, `getComputedStyle`, `matchesSelector`…


Enjoy!
======


And while you’re here to learn… why not try to write this DOM library semicolonless from top to bottom? See if you can look back after then… ;)
