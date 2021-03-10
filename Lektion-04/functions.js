demo4(); // Hej Gäst
// OBS! Vi får anropa funkioner innan deklarationer

// demo5();
// ReferenceError: Cannot access 'demo5' before initialization

// Deklarera funktioner i JavaScript

// En parameterlös funktion
function demo1() {
  console.log("Demo 1");
}

// En funktion med en parameter
function demo2(username) {
  if (username == undefined) username = "";
  console.log("Hello " + username);
}

// Anrop utan några argument
demo2(); // Hello undefined

// Anrop med ett argument
demo2("Mahmud"); // Hello Mahmud

// Anrop med flera argument
demo2("Mahmud", "TEST", "TEST"); // Hello Mahmud , Weird !!

// En funktion som returnerar data
function demo3(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
let fullname = demo3("Mahmud", "Al Hakim");
console.log(fullname); // Hello Mahmud Al Hakim

fullname = demo3("Mahmud");
console.log(fullname); // Hello Mahmud undefined

// Förvald parameter
function demo4(username = "Gäst") {
  console.log("Hej " + username);
}
demo4(); // Hej Gäst

// Funktionsuttryck
const demo5 = function () {
  console.log("DEMO 5");
};
demo5();

// En funktion som returnerar en array
function demo6() {
  const myArray = ["Test 1", "Test 2", "Test 3"];
  return myArray;
}
console.log(demo6()); // [ 'Test 1', 'Test 2', 'Test 3' ]

// En funktion som returnerar ett objekt
function demo7() {
  let temp = "Lokal variabel";
  const myObject = {
    firstname: "Mahmud",
    lastname: "Al Hakim",
    age: 48,
  };
  return myObject;
}
console.log(demo7()); // { firstname: 'Mahmud', lastname: 'Al Hakim', age: 48 }

// Varför kan vi skicka flera argument till en parameterlös funktion?
function demo8(){
    // Svar: Det finns ett objekt som tar emot alla argument
    console.log(arguments);
    console.log(arguments[0]); // Arg. 1
    console.log(arguments[1]); // Arg. 2
    console.log(arguments[2]); // Arg. 3
    console.log(arguments[3]); // undefined
}
demo8("Arg. 1", "Arg. 2", "Arg. 3");
// [Arguments] { '0': 'Arg. 1', '1': 'Arg. 2', '2': 'Arg. 3' }

// ES6 (ES2015) - Arrow Funktions (pilfunktioner)
//let demo9 = function(){};
let demo9 = () => {};

let demo10 = (username) => {
    console.log("Hello " + username);
}
demo10("John"); // Hello John


let demo11 = username => console.log("Hej " + username);
demo11("Kalle"); // Hej Kalle
