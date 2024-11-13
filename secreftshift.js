const randomDecimal = Math.random();

const range = 33 - 3 + 1; // 31

const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).

const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).

const shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33

//We added 1 to ensure we include both endpoints of our range, 3 and 33, so we have a total of 31 possible numbers (from 3 to 33 inclusive).//

//Multiplying the randomDecimal (which is between 0 and 1) by the range scales the decimal to fall within the range of 0 to range. This means we'll get a decimal number that's between 0 (inclusive) and the value of range (exclusive), thus fitting it within our desired range.//

//We use Math.floor() to ensure we always round down to the nearest whole number, giving us an integer between 0 and range - 1. Using Math.round() could potentially round up, causing us to exceed our desired range.//

//Since randomInt is a number between 0 and range - 1 (which is 30 in this case), adding 3 shifts this range upward, resulting in numbers between 3 and 33 inclusive.//


