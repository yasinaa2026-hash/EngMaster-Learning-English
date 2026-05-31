document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".nav-links li");
    const sections = document.querySelectorAll(".page-section");
    const pageTitle = document.getElementById("page-title");

    links.forEach(link => {
        link.addEventListener("click", () => {

            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            const target = link.dataset.target;

            sections.forEach(section => {
                section.style.display = "none";
            });

            const activeSection =
                document.getElementById(target);

            if (activeSection) {
                activeSection.style.display = "block";
            }

            pageTitle.textContent =
                link.textContent.trim();
        });
    });

});

function speakText(text) {
    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speechSynthesis.speak(speech);
}
