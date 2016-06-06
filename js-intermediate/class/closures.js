
// var random = (function() {
// 	var limit = 6;

// 	return {
// 		dice : function() {
// 			return Math.floor(Math.random() * limit) + 1;
// 		}
// 	}
// })();

// random.dice();



var myfunc = (function() {
	var a = 4;
	var b = 5;
	var myfunc1 = function() {
		return {a:a, b: b};
	}

	return myfunc1();
})();

