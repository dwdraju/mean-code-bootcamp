temp = [];

for(i=1;i<=100;i++){
	temp.push(i);
}
	for(j=0;j<100;j++){
		if(temp[j] % 3 == 0 && temp[j] % 5 == 0){
			temp[j] = "FizzBuzz";
			
		}
		else if(temp[j] % 5 ==0){
			temp[j] = "Buzz";
			
		}
		else if(temp[j] % 3 == 0){
			temp[j] = "Fizz";
			
		}
		console.log(temp[j]);
	}
