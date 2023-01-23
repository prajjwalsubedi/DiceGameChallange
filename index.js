var firstRandom = Math.floor(Math.random() * 6 + 1)
var secondRandom = Math.floor(Math.random() * 6 + 1)

var image1 = "images/dice"+firstRandom+".png";
var image2 = "images/dice"+secondRandom+".png";

console.log(document.querySelectorAll("img")[0].setAttribute("src", image1));
console.log(document.querySelectorAll("img")[1].setAttribute("src", image2));

if (firstRandom > secondRandom) {
    document.querySelector("h1").textContent = "Player 1 Wins🇳🇵";
} else if (firstRandom < secondRandom) {
    document.querySelector("h1").textContent = "Player 2 Wins🇳🇵";
} else {
    document.querySelector("h1").textContent = "DRAW🇳🇵";
}





