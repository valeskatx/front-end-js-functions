/**
 * Exercise 0: angryGandalf (example)
**/
 
// Define angryGandalf with input parameters
var angryGandalf = function(type) {
 
	// Define the variables needed
	var message;
 
	// Run conditional on type for 'grey' and 'white'
	if (type === 'grey') {
		message = "YOU...SHALL NOT... PASS!";
	} else if (type === 'white') {
		message = "You merely passed me to your demise.";
	} else {
		message = "I don't think I'm Gandalf anymore.";
	}
 
	// Return message
	return message 
 
}
 
// console.log(angryGandalf('grey'));  // Expect "YOU...SHALL NOT... PASS!" 
// console.log(angryGandalf('white')); // Expect "You merely passed me to your demise."
// console.log(angryGandalf(2)); // Expect "I don't think I'm Gandalf anymore."
 
 
/**
 * Exercise 1: tellFortune
**/
 
// Create function with name tellFortune and appropriate parameters
var tellFortune = function(job,location,partner,children) {
	// takes 4 arguments: number of children, partner's name, geographic location, job title.
 
	// Define string variable that will have that output
	var fortune = "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids."
	
	// console.log(fortune);
 
	// Return that string
	return fortune;
};
 
// console.log(tellFortune('bball player', 'spain', 'Shaq', 3)); // Expect 'You will be a bball player in spain and married to Shaq  with 3 kids. '
// console.log(tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000)); // Expect 'You will be a stunt double in Japan and married to Ryan Gosling  with 3000 kids. '
// console.log(tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0)); // You will be a Elvis impersonator in Russia and married to The Oatmeal  with 0 kids. 
 
 
 
/**
 * Exercise 2: calculateAge
**/
 
// Create function with name calculateAge and appropriate parameters
 var calculateAge = function(birthYear,  currentYear){

	// Define a number variable named age and save the age based on the years given, ie 2010-1990 = '20'
 	var age = currentYear - birthYear;
	// Define a number variable that will account for month discrepancies, ie Jan 2010 - August 1990 = '19'
    var discrepancy = age - 1;
    // return string that says 'You are either XX or YY'
    return "You are either " + age + " or " + discrepancy;
 }
// console.log(calculateAge(1984, 2014)); // You are either 28 or 27 
// console.log(calculateAge(1988, 2014)); // You are either 24 or 23 
// console.log(calculateAge(1982, 2014)); // You are either 30 or 29 
 
 
 
/**
 * Exercise 3: calculateSupply
**/
 
// Create function with name calculateSupply and appropriate parameters
 var calculateSupply = function(currentAge, cupsPerDay){
	// define max age as 100
    var maxAge = 100;
    // Do math to substract max string - string
 	var totalYears = maxAge - currentAge;
 	var totalDays = totalYears * 365;
 	var cups = totalDays * cupsPerDay;
    // Create Message
 	var message = "You will need " + cups + " cups of tea to last you until the ripe old age of " + maxAge;
    // Return Message
    return message;
}
// console.log(calculateSupply(28, 36)); // You will need 946080 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 2.5)); // You will need 65700 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 400));  // You will need 10512000 cups of tea to last you until the ripe old age of 100 
 
 
 
/**
 * Exercise 4: The Circle Calculator
**/
 
// Create function with name calcDiameterFromRadius and appropriate parameters
 var calcDiameterFromRadius = function(radius){
	// Define string variable that will have that output
    var diameter = radius * 2;
    // return string to pass the tests below
    return diameter;
 }
// Create function with name calcCircumference and appropriate parameters
 var calcCircumference = function (radius){
	// Define string variable that will have that output
 	var circumference;
	// Get Diameter from radius with calcDiameterFromRadius() made above
    var diameter = calcDiameterFromRadius(radius);
    circumference = diameter * 3.14;
    // Create string to pass test below
 	var message = "The circumference is " + circumference;
    // return string
    return message;
}
 
// console.log(calcCircumference(3)); // The circumference is 18.84
// console.log(calcCircumference(4)); // The circumference is 25.12
// console.log(calcCircumference(5)); // The circumference is 31.4


/**
 * Exercise 5:  The Temperature Converter
**/
 
// Create a function called convertTemp:
// Give it 2 parameters, the first being number, second being inputType. inputType should accept strings 'F' or 'C'
var convertTemp = function (number, inputType){	
	// Define the variables used
 	var temp;
	// Convert the number from the inputType to the opposite
	if (inputType == "F"){
		temp = (number - 32) / 1.8;
	} 
	else if (inputType == "C"){
		temp = (number * 1.8) + 32;
	}
	// Return that number
	return temp;
}
// console.log(convertTemp(32, 'F')); // 0
// console.log(convertTemp(100, 'C')); // 212
 

/**
 * Exercise 6:  The Temperature Converter
**/

// Create a function called waterState. This function will tell you if a temperature is boiling, liquid, or freezing:
// Give it 2 parameters, one that's a number and the second that's a inputType, ie 'F' or 'C'. 
 var waterState = function (temp, inputType){
 	// Write a conditional and save proper water state variables based on if the inputType parameter is 'C' or 'F'.
 	var boiling, freezing, standard;
 	if (inputType === "F"){
 		boiling = 212;
 		freezing = 32;
 		standard = "Fahrenheit";
 	}
 	else if (inputType === "C"){
 		boiling = 100;
 		freezing = 0;
 		standard = "Celsius";
 	}
	// Define a variable that will save the string of the conditional below.
 	var state;	
	// Write a conditional if then statement that saves 'boiling', 'liquid', or 'freezing' depending on what the temperature is.
	if (temp <= freezing){
		state = "freezing";
	}
	else if (temp >= boiling){
		state = "boiling";
	}
	else {
		state = "liquid";
	}
    return "It's currently " + temp + " degrees in the " + standard + " standard and water is in a " + state + " state.";

 }
console.log(waterState(50, 'C')); // "It's currently 50 degrees in the Celsius standard and water is liquid. "
console.log(waterState(213, 'F')); // "It's currently 213 degrees in the Fahrenheit standard and water is boiling. "
console.log(waterState(-1, 'F')); // "It's currently -1 degrees in the Fahrenheit standard and water is liquid. " 
