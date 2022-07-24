const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorChange = document.querySelector(".btn");
const colorcode = document.querySelector(".Color");
const hexMode = document.querySelector(".Hexmode");
const rgbMode = document.querySelector(".rgb");

colorChange.addEventListener('click', () => {

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getrandomcolor()];
    }
    colorcode.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
});

rgbaMode.addEventListener('click', () => {
    console.log("rgbamode");

    const r = getrandomcolorRGBA();
    const g = getrandomcolorRGBA();
    const b = getrandomcolorRGBA();
    const rgbcolor = `rgba(${r},${g},${b})`;

    document.body.style.backgroundColor = rgbcolor;

});
function getrandomcolorRGBA() {
    return Math.floor(Math.random() * 255);
}


function getrandomcolor() {
    return Math.floor(Math.random() * hex.length);
}