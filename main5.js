// More closures
// Closure is when a function is able to remember and access its lexical scope even when 
// that function is executing outside its lexical scope.

// not really a closure

function foo() {
	var a = 2;

	function bar() {
		console.log( a ); // 2
	}

	bar();
}

// foo();

// more of a closure

function foo() {
	var a = 2;

	function bar() {
		console.log( a );
	}

	return bar;
}

var baz = foo();

// baz(); // 2 -- Whoa, closure was just observed, man.


// Closures are functions that refer to independent (free) variables. 
// In other words, the function defined in the closure ‘remembers’ the environment in which it was created.




// function wait(message) {

// 	setTimeout( function timer(){
// 		console.log( message );
// 	}, 1000 );

// }

// wait( "Hello, closure!" );

// good example

function foo(x, y) {
	var z = 3;
  
	return function bar(a, b, c) {
	  return (a + b + c) * (x + y + z);
	};
  }
  
  var closure = foo(1, 2);
  closure(5, 6, 7);


// function multiples(number) {
// 	let sum = 0;
// 	for (let i = 0; i <= number; i++) {
  
// 	  if (i % 3 === 0 || i % 5 === 0) {
// 		sum += i;
// 	  }
// 	}
// 	return sum;
//   }
  
// console.log(multiples(10));

/*
A closure is a way to access and manipulate external variables from within a function.
MDN: “A closure is the combination of a function and the lexical environment within which that function was declared.”

*/

/*
const anotherFunc = (owl) =>{


	const innerFunc = () =>{
		console.log(owl);
	}

	return innerFunc;

}

let owl = anotherFunc("name");
let owl2 = anotherFunc("name2");
owl();
owl2();
*/
const anotherFunc = (first) =>{


	const innerFunc = (last) =>{
		console.log(first +  last);
	}

	return innerFunc;

}

let owl = anotherFunc("Eli");
let owl2 = anotherFunc("name2");
owl("Hood");
// owl2();