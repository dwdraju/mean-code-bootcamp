// // var add = function(a,b) {
// // 	return a+b;
// // }

// // add(4,5);

// var a = 4;
// var b = 5;

// var add = function(){
// 	a = 2;
// 	console.log(a);
// 	return a+b;
// }

// var add = function() {
// 	var a = 2;
// 	console.log(a);
// 	return a+b;
// }

// var add = function(a) {
// 	a = 2;
// 	console.log(a);
// 	return a+b;
// }


// // console.log(add());

// // console.log(a);


// var a = 2;
// var a = 4;
// console.log(a);


// var sub = function(a,b){
// 	return a-b;
// }

// var add = function(a,b) {
// 	return a + b;
// }


// var multiply = function(a,b) {
// 	var product = 0;
// 	for(var i=0; i<a; i++) {
// 		product = add(product, b);
// 	}
// }


// var myfunc = function() {
// 	var a = 5;
// 	return a;
// } //How to access a?

var a = 3;

var meow = function() {
	var  a = 2;
	var b = function() {
		var c = function() {
			return a;
		}
		return c();
	}


	return b();
}



console.log(meow());

var meow = function() {
	var  a = 2;
	var b = function() {
		var c = function() {
			return a;
		}
		return c();
	}
	

	return c();
}

