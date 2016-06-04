var sorting = function(nos){
	var tempArr = new Array();
	tempArr = nos.split(',');

	for(i=0; i<tempArr.length; i++){
		for(n=1; n<tempArr.length; n++){
			if(tempArr[i]<tempArr[n+1]){
				temp = tempArr[n+1];
				tempArr[n+1]=tempArr[i];
				tempArr[i]=temp;
			}
		}
	}
	for(i=0; i<tempArr.length; i++){
		console.log(tempArr[i]);
	}
}
sorting("0,-1,4");
