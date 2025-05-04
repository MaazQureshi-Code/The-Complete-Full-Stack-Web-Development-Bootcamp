


let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

const img1 = document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png")
const img2 = document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png")
const headings = document.querySelector("h1")

if(randomNumber1 === randomNumber2){
    headings.textContent = "Draw"
}else if(randomNumber1 > randomNumber2){
    headings.textContent = "Player 1 Won!"

}else{
     headings.textContent = "Player 2 Won!"

}