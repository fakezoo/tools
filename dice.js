console.log("dice.js conntected")

var form = document.getElementById("form");
var placemarker = document.getElementById('placemarker');
var container = document.getElementById('container');
var totalHTML = document.getElementById('total');
var output;
resultArray = []

function doit() {
    // reset results from previous rounds, otherwise the same result will be rolled when button is clicked twice
    reset();

    // JS gets the inputed values of the two form fields
    var amount = form.elements[0].value;
    var sides = form.elements[1].value;


    for (var i = 0; i < amount; i++) {
        /// the following actions are repeated the same amount of dice rolled:

        // 1. function rollDice is executed
        // 2. the returned value of the function rollDice is stored in the var result
        var result = rollDice();

        // 3. the result is stored in an array
        resultArray.push(result);

        // 4. a new p element ("output" in JS) is created
        output = document.createElement("p");

        // 5. the p element writes an element from the result array and some text
        output.innerHTML = "#" + (i + 1) + ": d" + sides + " was rolled. The result is: " + resultArray[i];

        // 6. the newly created p is prepended in the parent container 
        container.prepend(output);

        // 7. if d20 make crits red or green
        if (sides == 20 & resultArray[i] == 1) {
            output.classList.add("text-danger")
            console.log("It's a fail!")
        }
        else if (sides == 20 & resultArray[i] == 20) {
            output.classList.add("text-success")
            console.log("It's a success!")
        }


    }

    function rollDice() {
        // a random number between 1 and the # of sides is created
        result = Math.trunc(Math.random() * (sides) + 1);

        // the result is returned, so that it can be used in other functions
        return result;
    }


    //sum up content of result array via the reduce method
    // this is complicated but mdn explains it well 
    total = resultArray.reduce(sum);
    function sum(a, b) {
        return a + b;
    }
    totalHTML.innerHTML = total;
}


/// make it so you can wipe every thing clean and roll anew
function reset() {

    console.log("resetting")
    // remove p's from previous rounds
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    // remove total from previous rounds &  update html of total
    resultArray = [];
    totalHTML.innerHTML = 0;

}





