//Hoisting with let and const (Hoisted but Not Initialized)
//console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // ✅ 10

{
    console.log("fhg:,",a)
    var a= 5
    console.log(a)
}