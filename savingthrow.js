console.log("savingthrow.js connected!")


// get alert
var alert = document.querySelector('.alert');

// Choose correct array
function poison() {
    array = ["poison", 14, 14, 13, 13, 11, 11, 10, 10, 8, 8,]
    console.log("This is the array: " + array)
    doit();
    return array;
}

function breath() {
    array = ["breath", 17, 17, 16, 16, 14, 14, 13, 13, 11, 11]
    console.log("This is the array: " + array)
    doit();
    return array;
}

function poly() {
    array = ["poly", 15, 15, 14, 14, 12, 12, 11, 11, 9, 9]
    console.log("This is the array: " + array)
    doit();
    return array;
}

function spell() {
    array = ["spell", 15, 15, 14, 14, 12, 12, 11, 11, 9, 9]
    console.log("This is the array: " + array)
    doit();
    return array;
}

function item() {
    array = ["item", 15, 15, 14, 14, 12, 12, 11, 11, 9, 9]
    console.log("This is the array: " + array)
    doit();
    return array;
}





function doit() {
    //get lvl from form
    var form = document.getElementById('form');
    var level = form.elements[0].value;
    console.log(`The lvl is ${level}`);



    //roll d20
    var d20 = Math.trunc(Math.random() * (20) + 1);
    console.log("The d20 roll resulted in " + d20)




    //check input against dice roll
    if (d20 >= array[(level)]) {
        msg = "Success!";
        alert.classList.add("alert-success")
        alert.classList.remove("alert-danger")
    }

    else {
        msg = "Fail!";
        alert.classList.add("alert-danger")
        alert.classList.remove("alert-success")
    }

    // output if save is failed or not
    output = msg + " The monster rolled a 🎲" + d20 + " \n . At level " + level + ", a result of 🎲" + array[(level)] + " or higher needed to succeed the throw."

    alert.innerHTML = output;
    // alert(typeof level)
}








