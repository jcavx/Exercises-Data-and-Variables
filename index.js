// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedMph = '17500';
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof 'Determination');
console.log(typeof '17500');
console.log(typeof 225000000);
console.log(typeof 38400);
console.log(typeof 0.621);

// Code your solution to exercises 3 and 4 here:
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
console.log(shuttleName + " will take " + daysToMars + " days to reach the Moon.");

// Code your solution to exercise 5 here:

let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");