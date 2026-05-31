function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speechSynthesis.speak(speech);
}

document.addEventListener("DOMContentLoaded", () => {

    const themeBtn = document.getElementById("theme-toggle");

    if(themeBtn){
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    const startBtn = document.getElementById("call-start-btn");
    const endBtn = document.getElementById("call-end-btn");
    const transcript = document.getElementById("call-transcript");

    if(startBtn){

        startBtn.addEventListener("click", () => {

            transcript.innerHTML =
            "<p><strong>AI Tutor:</strong> Hello! How are you today?</p>";

            speakText("Hello! How are you today?");

            startBtn.classList.add("hidden");

            if(endBtn){
                endBtn.classList.remove("hidden");
            }
        });

    }

    if(endBtn){

        endBtn.addEventListener("click", () => {

            speechSynthesis.cancel();

            transcript.innerHTML =
            "<p>انتهت المحادثة.</p>";

            endBtn.classList.add("hidden");
            startBtn.classList.remove("hidden");

        });

    }

});
