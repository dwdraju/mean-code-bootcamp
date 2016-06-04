var nameObj = {college: "HCOE", place: "KTM"};

new_array = new Array();
for(obj in nameObj){
	new_array.push([obj,nameObj[obj]]);
}
console.log(new_array);
