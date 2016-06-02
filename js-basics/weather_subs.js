var input = '32.6 31.2 35.2 37.4 44.9 42.1 44.1';

tempArray = new Array();
tempArray = input.split(" ");
console.log(tempArray);

for(i=0; i<tempArray.length-1; i++){
	tempArray[i+1] = ((tempArray[i]+tempArray[i+2])/2);
}
console.log(tempArray);