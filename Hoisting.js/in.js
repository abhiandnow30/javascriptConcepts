console.log(k)
console.log(getName())
var k=10;
function getName(){
    let d1=document.createElement("div");
    d1.textContent="hii hello"
document.body.appendChild(d1);
    console.log("hii hello");
}
let t = document.createElement("p");
t.textContent=k;
document.body.appendChild(t);
let d=document.createElement("div");
document.body.appendChild(d);

console.log(k);
getName();