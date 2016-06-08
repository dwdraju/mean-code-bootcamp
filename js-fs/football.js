// The columns labeled ‘Goals’ and ‘Goals Allowed’ contain the total number of goals scored for and against each team in that season (so Arsenal scored 79 goals against opponents, and had 36 goals scored against them).
// Write a program to read the file, then print the name of the team with the smallest difference in ‘for’ and ‘against’ goals.var fs = require('fs'),
var fs = require('fs'),
fileName = "football.csv",
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
		spread =Math.abs(line[5]-line[6]);
		if (i === 1) minSpread = spread;
		if (spread < minSpread){
			minSpread = spread;
			team = line[0];
		}
	}
	console.log("Team with smallest difference in ‘for’ and ‘against’ goals is : " + team);
});