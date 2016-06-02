var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 

var merge_array = function(array1, array2){
	var array3 = [];

	var arr = array1.concat(array2),
	len = arr.length;

	while (len--) {
		var itm = arr[len];
		if (array3.indexOf(itm) === -1) {
			array3.unshift(itm);
		}
	}
	return array3;
}

console.log(merge_array(array1, array2));