# Text-to-Speech App

A client web application developed with Parcel (a development build server).  The speech pattern should resemble how the speech synthesizer used by the physicist Steven Hawkins would sound.

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

## Run it on your computer

Since the client app requires a hardware synthesis (i.e. your speaker and such), you will need to clone or down load this code to your machine and open the index.html file in your web browser. 

The best and quickest way is to copy the html code bellow into a file on your computer and save it as `test.html`.  Then double click it to open in your web browser.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
        body {
            font-family: Calibri;
        }
        
        #rate-control {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin: 1rem 0;
        }
    </style>

    <title>Text to Speech</title>
</head>

<body>
    <h2>Transpose text to computer speech.</h2>

    <div id="rate-control">
        <label for="rate">Rate:</label>
        <input type="range" min="0.5" max="2" value="1" step="0.1" id="rate" />
    </div>
    <input type="text" id="usertext" placeholder="Enter your text here to be transposed" />
    <button id="play">Speak</button>


    <script type="text/javascript">
        const synth = window.speechSynthesis;
        const play = document.querySelector("#play");
        const rate = document.querySelector("#rate");

        function playsound() {
            const itext = document.getElementById("usertext").value;
            if ('speechSynthesis' in window) {

                if (synth.speaking) {
                    synth.cancel();
                }
                const utterThis = new SpeechSynthesisUtterance(itext);
                utterThis.addEventListener("error", () => {
                    console.error("SpeechSynthesisUtterance error.");
                });
                utterThis.rate = rate.value;
                synth.speak(utterThis);
            } else {
                alert("Sorry.  This browser doen't support synthetic speech");
            }
        }
        play.addEventListener("click", playsound);
    </script>
</body>
</html>
```

