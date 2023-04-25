const fortunes = [
    "Ask Chatgpt.",
    "You will find unexpected joy in the next 24 hours",
    "A long-awaited dream will come true",
    "You'll meet up with someone from your past and reconnect.",
    "Switch to computer science.",
    "Watch Goblet of Fire and Order of Phoenix.",
    "You will be bitten by a radioactive spider and gain superpowers.",
    "You will finally remember where you put the thing you've been looking for.",
    "You will win a lifetime supply of free ice-cream but it's the flavour you hate"

];
  
const fonts = [
    "Monospace", 
    "Comic Sans MS",
    "Baskerville",
    "Papyrus"
];

function generate(name) {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    const outputElement = document.getElementById("output");
    outputElement.innerText = `${name}, ${fortune}`;
    outputElement.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
}
  
const options = [200, 55, 65, 70, 95];

function restyle() {
    const outputElement = document.getElementById("output");
    outputElement.style.fontSize = options[Math.floor(Math.random() * options.length)] + 'px';
    outputElement.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
  
const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    generate(name);
    restyle();
});

  
