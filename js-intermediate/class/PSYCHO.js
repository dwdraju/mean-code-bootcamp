var d = 4;

var a = function() {
	var b = 1;

	return (function() {
		return function() {
			return {
				c: function() {
					return b;
				},
				d: function(){
					return b+1;
				}
			}
		}
	})();
}



// console.log(a()()());
// console.log(d);

console.log(a()().d());