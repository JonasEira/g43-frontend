// JS Fundamentals


// var firstName; // undefined
// firstName = null;
// var username,pincode, active; // undefined, undefined, undefined
// username = "simonelbrink"; // String
// pincode = 1236123 // Number
// active = true;

// console.log(firstName);

// console.log(username);
// console.log(pincode);
// console.log(active);

// console.log(username + " " + pincode);

// Backtics `
// console.log(`Username: ${username} pincode: ${pincode}`)


//JavaScript Object

// var testPerson = {id: 0, firstName: "", lastName: ""};

// var simon = {};
// simon.id = 1000;
// simon.firstName = "Simon";
// simon.lastName = "Elbrink";

// console.log(simon);

// simon.title = "Teacher";
// console.log(simon);

// delete simon.id;
// console.log(simon);

//-----

//JavaScript function
// syntax function functionName(){}

function display(){
    console.log("display function has been triggered");
}


function subtraction(num1, num2){
    return num1 - num2;
}

display(); // Calling function


var subtractionresult = subtraction(10,1); // Try= "50", "foo"
console.log(subtractionresult);