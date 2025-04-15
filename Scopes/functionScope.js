function testScope() {
    var functionVar = "I exist only inside this function";
    let functionLet = "Me too!";
    const functionConst = "I am function scoped as well!";
    
    console.log(functionVar);   // ✅ Accessible inside
    console.log(functionLet);   // ✅ Accessible inside
    console.log(functionConst); // ✅ Accessible inside
}

testScope();
 //console.log(functionVar);   // ❌ Error: functionVar is not defined
// console.log(functionLet);   // ❌ Error: functionLet is not defined
// console.log(functionConst); // ❌ Error: functionConst is not defined



if (true) {
    let x = 100;
}
console.log("aaaw",x); // ✅ 100 (var leaks out of the block)