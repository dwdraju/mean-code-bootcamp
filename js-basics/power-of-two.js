var power_of_2 = function(n){
	if (n == 0 || n ==1){
		return false;
	}
	while (n != 1){
		if (n%2 != 0)
			return false;
		n = n/2;
	}
	return true;
}

console.log(power_of_2(16)); 
console.log(power_of_2(18)); 
console.log(power_of_2(256));
console.log(power_of_2(1));