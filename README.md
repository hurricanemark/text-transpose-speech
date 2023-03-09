# Text-to-Speech App

You can impress someone of your coding prowess with this app which requires very little code.  
This is a client web application developed using Parcel (a development build server).  Note, a client app infers that you do not need a server to run.  Parcel is just a development/build management server.  YOu can elect to type the code using your editor and never bother with the `npm` scaffolding.

The speech pattern of this app should resemble how the speech synthesizer used by the physicist Stephen Hawking would sound if you ran it on your laptop/desktop.  It sounds more humand if ran on your cell phone or other PDAs.


Ref: [parcel](https://parceljs.org/getting-started/webapp/)


## Getting started

* Scalfolding:

```script
npm init -y
npm install --save-dev parcel
```

* Create the following files:

1.  `src/index.html`

2.  `src/style.css`

3.  `src/script.js`

## Run

The `parcel build` command bundles and optimizes your application for production.  It creates a default `dist` folder, then outputs neccessary code to run your application in it.  By default, minification, and tree shaking and scope hoisting are enabled when using the parcel build command. It is a good idea to remove the `dist`, and `parcel-cache` folders before re-building for production.  [Read more](https://parceljs.org/features/production/)


```script
npm run build


✨ Built in 2.99s

dist/index.html            676 B    1.15s
dist/index.0a8ea8c3.css    159 B    496ms
dist/index.6a6eaf2f.js     524 B    805ms
```

The `parcel` command runs the development server.

```script
npm run start

Server running at http://localhost:1234
✨ Built in 1.11s
```

## Navigate to `http://localhost:1234`

![screenshot](text-to-speech.png)


## Issues

I found that having the `css` and `js` modules on separate files fouled up the delivery.  It seems to work on local machine.  I leave it to you to look into [`webpack`](https://alanstorm.com/client-side-javascript-modules-and-webpack/) if you are interested to solve this issue!

Since, it is a tiny program, I elect to have a clean execution from referencing a remote `html` by moving contents of `css` and `js` files back into the `html` file.  This bypasses the module referencing issue which requires a web manifest.  

## Run Demo

Clicking on `Live demo` should take you there.

[Live demo](https://hurricanemark.github.io/text-to-speech-demo/)

## Have your own copy on local machine

You can download this code to your machine and open the `index.html` file in your web browser.  [download](https://github.com/hurricanemark/text-to-speech-demo/archive/refs/tags/Beta.v0.1.0.zip).  Edit `index.html` file to further customize it for yourself.   

