let today1 = Date();
console.log(today1); // OBS! En sträng
console.log(today1.toString()); // OBS! En sträng
console.log(typeof today1); // string

// Wed Mar 10 2021 11:40:40 GMT+0100 (Central European Standard Time)
// today.toUpperCase(); // YAGNI

let s1 = new String("Hello"); // YAGNI
let n1 = new Number(123);  // YAGNI

// Vi vill ha ett datum-objekt
let today2 = new Date(); // ett objekt
console.log(today2.getFullYear()); // 2021
console.log(typeof today2); // object
console.log(today2.getHours());
console.log(today2.getMinutes());
console.log(today2.getSeconds());
console.log(today2.toLocaleDateString()); // 10/03/2021
console.log(today2.toLocaleTimeString()); // 11:52:10

