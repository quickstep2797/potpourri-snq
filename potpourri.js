function doSomething() {
    console.log("DoSomething called");
}

function RollSixSidedDice() {
 document.getElementById("dice").value = Math.floor(Math.random() * 6) + 1;
}