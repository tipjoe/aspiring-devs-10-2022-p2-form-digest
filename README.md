# HTML Digestive System

## People:
1. Eat stuff
2. Digest it
3. "Output" it

## Web forms:
1. Eat stuff (accept inputs from users)
2. Digest it (process or handle it)
3. Output it (save it, display it, etc.)

This repo demonstrates this using only the most professional standards.

# How to Try this Repo
With github, you have two choices for adding a repository to your local computer.

1. Clone - Use `git clone [repo url]` when you want to load it, make changes,
the  push your changes back to the original repo. This is usually how you work
at when your job is to work on code in company repositories.

2. Fork - Use this option to copy a repository into your own github account.
Now you "own" it and can push your local changes back to github without needing
permission from someone else.

Fork this repo by clicking the `Fork` button on the top-right of
[this web page](https://github.com/tipjoe/aspiring-devs-10-2022-p2-form-digest).

Once it's on your computer:

1. In the `aspiring-devs-p2` folder, run `npm i` (i is short for install).

2. Now run `npm run serve`. This starts the web server and should pop open
the page in your browser and/or indicate the URL to open (something like
`Open: http://127.0.0.1:9218/src/App.html`).

`npm run ______` runs scripts defined in the `package.json` file. Open in to
see that a `serve` script is defined. When you ran `npm run serve`, this is
what it ran. 

# The Files

## App.html (HTML is the bones - the structure/shape of the web page)
This HTML file is what appears on your web page. Here's where we define our
form inputs and other user interface elements.

## style.css (CSS is the style or external appearance - skin, clothes, etc.)
Apply styles to your HTML. There are three main types of selectors, each
followed by curly braces {} that contain styles like color, border, font-size,
etc.

`element {}` - HTML element names (i.e. div, h1, body, etc.)

`.class-name {}` - When the selector begins with a dot (.) it refers to a class
you've added to an element (e.g. `<div class="class-name"></div>`)

`#id-name {}` - Selectors that start with a pound sign (#) apply styles to
elements with that id (e.g. `<div id="id-name"></div>`). IDs should be unique.

## index.js
Javascript is the brain and heart - it brings life/functionality to the body.

Here, we use Javascript to listen for and respond/react to events. Events can
be:

* Things the user does like clicking, entering data, or scrolling
* The passage of time, like waiting 2 seconds and doing something
* A lifecycle event, such as the web page being loaded in the browser

This example just tries to show some examples of "front-end" code (HTML, CSS,
Javascript) happening in the browser. It includes other code to run a "back-end"
server.

# Original README
This was forked from Winter's [project here](https://github.com/tipjoe/aspiring-devs-10-2022-p2-form-digest.git).

See the README in that repo for other instructions.