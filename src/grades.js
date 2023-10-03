
'use strict';

const desiredInput = document.getElementById("desiredGrade");
const currentInput = document.getElementById("currentGrade");
const weightInput = document.getElementById("weightGrade");
const neededDiv = document.getElementById("neededGrade");

let calculateGrade = () => {
    let desired = Number(desiredInput.value);
    let final = Number(weightInput.value) ; // Calculate the final exam weight as 100 - weightInput.value
    let current = Number(currentInput.value);     // Get the value of the current grade input
    let total = (desired - (100 - final)) * current;      // Calculate the total points needed
    let needed = total / final;                   // Calculate the needed final exam score
    neededDiv.innerText = `You need to score ${needed.toFixed(2)}% on the final exam.`;
};

// const calculateButton = document.getElementById("calculateButton");
// calculateButton.addEventListener("click", calculateGrade);
