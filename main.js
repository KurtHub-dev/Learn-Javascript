//Car counter
let count = 0
let counting = document.getElementById("counter")
let saveP = document.getElementById("savePast")

function plus() {
count += 1
counting.textContent = count
}

function save() {
    let saveNew = count + " - "
    saveP.textContent += saveNew
    counting.textContent = 0
}

//Calculator
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")
let answer = 0

function add() {
    answer = num1 + num2
    sum.textContent = "Sum: " + answer
}
function subtract() {
    answer = num1 - num2
    sum.textContent = "Sum: " + answer
}

function divide() {
    answer = num1 / num2
    sum.textContent = "Sum: " + answer
}

function multiply() {
    answer = num1 * num2
    sum.textContent = "Sum: " + answer
}

//Score Board

let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let totalScoreh = 0
let totalScoreg = 0

function plush1() {
    totalScoreh += 1
    scoreHome.textContent = totalScoreh
}

function plush2() {
    totalScoreh += 2
    scoreHome.textContent = totalScoreh
}

function plush3() {
    totalScoreh += 3
    scoreHome.textContent = totalScoreh
}

function plusg1() {
    totalScoreg += 1
    scoreGuest.textContent = totalScoreg
}

function plusg2() {
    totalScoreg += 2
    scoreGuest.textContent = totalScoreg
}

function plusg3() {
    totalScoreg += 3
    scoreGuest.textContent = totalScoreg
}

function newgame() {
    totalScoreh = 0
    totalScoreg = 0
    scoreHome.textContent = totalScoreh
    scoreGuest.textContent = totalScoreg
}

//Blackjack

let firstNum = 10
let secondNum = 11

let sumCard = firstNum + secondNum

if (sumCard < 21) {
    console.log("Do you want to draw another card?")
} else if (sumCard === 21) {
    console.log("Congrats! You've won the game!")
} else if (sumCard > 21) {
    console.log("You're out of the game!")
}