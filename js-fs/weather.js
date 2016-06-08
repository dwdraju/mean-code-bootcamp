//Write a program to read the file, then output the day number (column one) with the smallest temperature spread (the maximum temperature is the second column, the minimum the third column).
var fs = require('fs'),
fileName = "weather.csv",
minSpread=0;
var bufferString;
var arr = new Array();
fs.readFile(fileName, "utf-8", function(err, data) {
	if(err){
		console.log(err);
		return;
	}
	bufferString = data.toString();
	arr = bufferString.split('\n');
	var line;	
	for(var i=1; i < arr.length-1; i++){
		line = arr[i].split(',');
		spread =line[0]-line[1];
		if (spread < minSpread){
			minSpread = spread;
			day = line[0];
		}
	}
	console.log("Minimum spread is on day :" + day);
});