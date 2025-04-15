if (true) {
    let blockLet = "I exist only inside this block";
    const blockConst = "Me too!";
}

console.log(blockLet);   // ❌ Error: blockLet is not defined
console.log(blockConst); // ❌ Error: blockConst is not defined

if (true) {
    var blockVar = "I am not block-scoped";
}
console.log(blockVar); // ✅ "I am not block-scoped"