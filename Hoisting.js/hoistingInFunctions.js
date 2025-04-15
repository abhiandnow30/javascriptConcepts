function test() {
    console.log(x); // ✅ undefined (hoisted but not initialized)
    var x = 5;
    console.log(x); // ✅ 5
}
test();
