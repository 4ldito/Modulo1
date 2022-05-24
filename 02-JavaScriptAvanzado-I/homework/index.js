x = 1; 
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10; 
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a; 
    console.log(b); // 8
    b = c; // 10
    var x = 5; // no sirve
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1


///////////////////////////

console.log(bar); // no da error, pq lo primero que hace el compilador es crear todas las variables declaradas.
console.log(baz); // da error pq baz no está declarado.
foo(); // no da error pq la función esta declarada.
function foo() { 
    console.log('Hola!');
}
var bar = 1;
baz = 2;

/////////////////

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);


/////////////


