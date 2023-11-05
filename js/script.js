let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
};

const checked = document.getElementById("checked");
checked.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

// Função para simular um efeito de digitação
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

// Função para digitar a frase desejada
function typingLetters() {
    const title = document.querySelector(".stack");
    const textToType = "Front-End Developer";
    const typingInterval = 75;
    typewriter(title, textToType, typingInterval);

    // Define o tamanho da fonte e o peso da fonte
    title.style.fontSize = "3rem";
    title.style.fontWeight = "bold";
}

typingLetters();

// Função para criar estrelas animadas no plano de fundo
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

// Chama a função para criar estrelas no plano de fundo
createStars();
