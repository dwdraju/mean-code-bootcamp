var nameObj = {college: "HCOE", place: "KTM"};

new_array = new Array();
for(obj in nameObj){
	// console.log(obj);
	// console.log(nameObj[obj]);
	new_array.push([obj,nameObj[obj]]);

}
console.log(new_array);


console.log(Math.abs(2.3))