const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const limit = 255;

btn.addEventListener("click", function() {
    const randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

function getRandomColor() {
    const red = Math.floor(Math.random() * limit);
    const green = Math.floor(Math.random() * limit);
    const blue = Math.floor(Math.random() * limit);
    return `rgb(${red}, ${green}, ${blue})`;
}
