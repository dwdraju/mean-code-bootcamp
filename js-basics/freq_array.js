//TODO

var freq_array = function(arr1){
	var count = 0;
	for(i=0; i<arr1.length; i++){
		for(j=1; j<arr1.length; j++){
			if(arr1[i]==arr1[j]){
				count++;
			}
		}
	}
	console.log(count);
}



var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

freq_array(arr1);