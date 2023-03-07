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