//Tricky concent number 1 - NaN

var a = 3 + "Hello World"
console.log(a);

var b = 3 * "Hello World";
console.log(b);

var d = Math.pow("e", "f");
console.log(d);

var c = 1/0;
console.log(c);

//NOT A NUMBER


//Tricky concept number 2 typeof

var g = true;

console.log(typeof(g));

var h = "Hello";
console.log(typeof(h));

var i = 2.4;
console.log(typeof(i));

var j = function() {}

console.log(typeof(j));

var k = {}
console.log(typeof(k));

var l = [];
console.log(typeof(l));

var m = [];
console.log(m instanceof Array);


var cat = {
	legs: 4,
	call: "meow"
}


cat.legs
cat["legs"]

var dog = {
	0: "Tiger",
	1: "Rossi"
}

console.log(m instanceof Object);

console.log({} instanceof Array);

var add = function(a,b){
	if(typeof(a) != "number" || typeof(b) != "number") {
		return 0;
	}
	return a+b;
}


add("Hello", "World")


// addElements(1,2) => 3
// addElements([1,2], [3,4]) => [1,2,3,4]
// addElements({hello: "World"}, {"Goodbye": "World"}) => {hello:"World", goodbye:"World"}
// addElements("Hello", "World") => HelloWorld


// var addElements = function(a,b){

// }
// // TYPEOF


// //TRICKY CONCEPT NUMBER 3 undefined

// console.log(typeof(z));

// var random = function(upper) {
// 	if(typeof(upper) == "undefined") {
// 		upper = 6;
// 	}
// 	return Math.floor(Math.random() * upper) + 1;
// }
// console.log(random(100));

// var cat = {
// 	legs: 4
// }

// if(typeof(cat.call=="undefined")) {
// 	console.log("This cat doesn't have a call");
// }

// function generateMarriageCertificate(param1, param2, isgay) {
// 	if(typeof(param1) == "object") {
// 		return "Congratulations to the boy" + param1.boyname + " and to the girl ";
// 	}

// 	if(typeof(isgay)!="undefined" && isgay == true) {
// 		return return "Congratulations to the boy" + boyname + " and to the boy " + girlname
// 	}
// 	return "Congratulations to the boy" + boyname + " and to the girl " + girlname
// }

// generateMarriageCertificate("dlfjld", "dkfdk", true)

// generateMarriageCertificate({
// 	boyname: "Hello",
// 	girlname: "World",
// 	gay: true
// }, "dfhkd");

//CONFIG PATTERN

// var arrange = function(numberOfElements, columns) {
// 	if(typeof(columns) == "undefined") {
// 		columns = 3;
// 	}

// 	var i = 1;
// 	while(i<= numberOfElements) {
// 		var line = "";
// 		for(var j=0; j<columns && i<=numberOfElements;j++) {
// 			line = line + " " + i;
// 			i++;
// 		}
// 		console.log(line);
// 	}
// }

// arrange(5);

// var slider = function(config) {
// 	var defaultConfigs = {
// 		transition: 3,
// 		delay: 3,
// 		effect: "fade"
// 	};

// 	if(typeof(config.transition)!="undefined") {
// 		defaultConfigs.transition = config.transition;
// 	}

// 	if(typeof(config.delay)!="undefined") {
// 		defaultConfigs.delay = config.delay;
// 	}

// 	if(typeof(config.effect)!="undefined") {
// 		defaultConfigs.effect = config.effect;
// 	}

// 	defaultConfigs
// }

// slider({})
// slider({transition: 2, delay: 4})

// arrange(5, 2);

// 1 2
// 3 4
// 5

// arrange(6,4)

// 1 2 3 4
// 5 6


//TRICKY CONCEPT NUMBER 4 identity vs equality

var a = 4; // ASSIGNMENT OPERATOR
var b = "4";

console.log(a==b); //EQUALITY OPERATOR
console.log(a===b); //IDENTITY OPERATOR

console.log(a!=b);
console.log(a!==b);

var a ="2";

if(a==2) //BAD
if(parseInt(a) === 2) { //GOOD
}










