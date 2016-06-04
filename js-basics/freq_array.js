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

// var obj = {
// 	key1:"val1",
// 	key2:"val2",
// 	key3:"val3",
// 	key4:"val4",
// }



// for(i in obj){
// 	console.log(i +" => "+obj[i]);
// }


var obj = {key:"value"}

// obj.hasOwnProperty("key") true
// obj.hasOwnProperty("hat") false

// i=0 
// arr1[i] = 3
// key 3;

// {}.hasOwnProperty(3) false;


var temp_obj = {};
for(i in arr1){
	key=arr1[i]
	if(!temp_obj.hasOwnProperty(key)){
		 temp_obj[key]={item:arr1[i],count:1};
	}else {
		ct = temp_obj[key].count;
		temp_obj[key]={item:arr1[i],count:ct+1};
	}
}


console.log(temp_obj);
ct=0;
res = 0;
for(i in temp_obj){
	elm = temp_obj[i];
	if(elm.count>ct) {
		ct=elm.count;
		res=elm.item;
	}
}

console.log(res + " = "+ct);