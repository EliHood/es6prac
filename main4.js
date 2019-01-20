"use strict";

// Scopes

function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 10000000 );

// console.log(c);


function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );

// console.log(c);

// Closures

// wrong way of doing closures

// function doSomething(a) {
// 	b = a + doSomethingElse( a * 2 );

// 	console.log( b * 3 );
// }

// function doSomethingElse(a) {
// 	return a - 1;
// }

// var b;

// doSomething( 2 ); // 15

// right way of doing closure

function doSomething(a) {
	function doSomethingElse(a) {
		return a - 1;
	}

	var b;

	b = a + doSomethingElse( a * 2 );

	console.log( b * 3 );
}

// doSomething( 2 ); // 15

// setTimeout( function timeoutHandler(){ // <-- Look, I have a name!
// 	console.log( "I waited 1 second!" );
// }, 1000 );


/*

More closures

in the above example, return InnerFunction; returns InnerFunction from 
OuterFunction when you call OuterFunction(). A variable innerFunc reference the InnerFunction() only, not the OuterFunction(). So now, when you call innerFunc(), it can still access outerVariable which is declared in OuterFunction(). 
This is called Closure.

*/

const outerFunction = () => {

	var owl = 100;

	function innerFunction(){
		console.log(owl);
	}

	return innerFunction;

}


let owl = outerFunction();

owl();

