let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
};

const checked = document.getElementById("checked");
checked.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

function typewriter(element, text, interval) {
    let index = 0;
    element.innerHTML = "";
    element.style.color = "rgb(98, 69, 157)";

    const typing = () => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, interval);
        }
    };

    typing();
}

function typingLetters() {
    const title = document.querySelector(".stack");
    const textToType = "Front-End Developer";
    const typingInterval = 75;
    typewriter(title, textToType, typingInterval);

    title.style.fontSize = "3rem";
    title.style.fontWeight = "bold";
}

typingLetters();

function createStars() {
    const starsContainer = document.querySelector(".stars");

    for (let i = 0; i < 500; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        starsContainer.appendChild(star);
    }
}

createStars();
