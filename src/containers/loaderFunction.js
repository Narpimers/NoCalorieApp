export const loadingAnimation = () => {
const squareOne = document.getElementById("squareOne");
const squareTwo = document.getElementById("squareTwo");
const squareThree = document.getElementById("squareThree");

squareOne.style.backgroundColor = "rgb(255, 123, 0)";


setInterval(() => {
    if (squareOne.style.backgroundColor === "rgb(255, 123, 0)") {
        squareOne.style.backgroundColor = "#efeee9";
        squareTwo.style.backgroundColor = "rgb(255, 123, 0)";
        return;
    }

    if (squareTwo.style.backgroundColor === "rgb(255, 123, 0)") {
        squareTwo.style.backgroundColor = "#efeee9";
        squareThree.style.backgroundColor = "rgb(255, 123, 0)";
        return;
    }

    if (squareThree.style.backgroundColor === "rgb(255, 123, 0)") {
        squareThree.style.backgroundColor = "#efeee9";
        squareOne.style.backgroundColor = "rgb(255, 123, 0)";
        return;
    }
}, 500)

}