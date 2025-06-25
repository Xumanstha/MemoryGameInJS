const images = document.querySelectorAll(".png");
const pics = document.querySelectorAll(".pic");
let number1 = 0;
let color = "rgba(229, 205, 22, 0.989)";
pics.forEach(pic => {
    pic.addEventListener("click", () => {
        if (number1 < 2) {
            number1++;
            pic.style.backgroundColor = "initial";
            console.log(number1);
        } else {
            reset();
            number1 = 0;
        }
    });
});

function reset() {
    pics.forEach(pic => {
        pic.style.backgroundColor = "rgba(229, 205, 22, 0.989)";
    });
}