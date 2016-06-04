var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


var obj = {key:"value"}

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