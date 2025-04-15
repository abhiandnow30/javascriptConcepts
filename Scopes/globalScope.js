//Scope determines where a variable is accessible.

//GLobal Scope: 
var globalVar = "I am global!";
let globalLet = "I am also global!";
const globalConst = "I never change globally!";

console.log(globalVar);   // ✅ Accessible
console.log(globalLet);   // ✅ Accessible
console.log(globalConst);

console.log(window)