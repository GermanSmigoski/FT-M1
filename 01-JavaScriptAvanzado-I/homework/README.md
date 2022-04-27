
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; //  valor es 1.
var a = 5; // valor 5.
var b = 10; // valor 10.
var c = function(a, b, c) { 
  var x = 10; // valor 10
  console.log(x); // devuelve 10 porque toma como referencia la variable defendinida de arriba.
  console.log(a); // devuelve 8 que es tomada del global ya que no esta definida.
  var f = function(a, b, c) {
    b = a;
    console.log(b); // devuelve 8 ya que el valor de b es a y en el global la a es cambiada porr la c del final.
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // devuelve 9 que esta lo cambia el valor la variable c.
}
c(8,9,10);
console.log(b); // deuvelve 10 toma el valor global.
console.log(x); // devuelve 1 toma el valor global.
``` 

```javascript
console.log(bar); // devuelve devuelve undefined porque el valor esta definido dentro de la funcion.
console.log(baz); // devuelve no esta definido
foo();
function foo() { console.log('Hola!'); } 
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // devuelve Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // devuelve Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //devuelve Franco
   }
})();
console.log(instructor); //devuelve Tony porque Franco esta en otro contexto de ejecucion
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash (Let solo scope en el bloque)
}
console.log(instructor); // The Flash (Var es global)
console.log(pm); // Franco 
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
{}[0] // [0]
parseInt("09") // 9 
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5 
0 || 5 // 5
[3]+[3]-[10] // 23 - primero se concatena '3' '3' y despues se resta 10
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);  // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // devuelve false porque es false
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // Undefinded
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1- 1
            // 2- 4
            // 3- 3
            // 4- 2
```         
