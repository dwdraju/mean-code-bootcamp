var bmi = function(weight, height){
	cal_bmi = weight/(height*height);
	console.log(cal_bmi);

	switch(true){
		case (cal_bmi<18.5):
			return "Your BMI is " + cal_bmi + ". Its underweight";
			break;
		case (cal_bmi>=18.5 && cal_bmi<25.0):
			return 	"Your BMI is " + cal_bmi + ". Its normal weight";
			break;
		case (cal_bmi>=25.0 && cal_bmi<30.0):
			return 	"Your BMI is " + cal_bmi + ". Its overweight";
			break;
		case (cal_bmi>=30.0):
			return 	"Your BMI is " + cal_bmi + ". Its obesity";
			break;		
	}
}

console.log(bmi(80,1.73));
