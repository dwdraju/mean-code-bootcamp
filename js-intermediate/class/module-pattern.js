var car = (function() {
	var wheels = 4;

	var moveSpeedometer = function() {
		console.log("Move Speedometer");
	}

	var moveForward = function() {
		console.log("going forward");
	}

	var moveBackward = function() {
		console.log("Moving Backward");
	}

	return {
		moveForward: moveForward,
		moveBackward: moveBackward
	}
})();

car.moveForward();
car.moveBackward();
