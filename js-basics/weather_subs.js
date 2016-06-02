var input = "32.6 31.2 35.2 37.4 44.9 42.1 44.1";

tempArray = new Array();
tempArray = input.split(" ").map(Number);
tempArray_new = input.split(" ").map(Number);
for(i=1; i<tempArray.length-1; i++){
	
	tempArray_new[i] = (tempArray[i]+tempArray[i-1]+ tempArray[i+1])/3;	
	
}
console.log(tempArray_new.join(" "));