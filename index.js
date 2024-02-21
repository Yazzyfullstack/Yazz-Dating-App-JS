'use strict';

const mockData = require('./mockData.js').data;

let profile = {
  first_name: "",
  last_name: "",
  age: 0,
  gender: "",
  gender_interest: "",
  location: "",
  min_age_interest: 0,
  max_age_interest: 0
};

console.log("Hello, welcome to Winc dating-app. Create a new account by filling out the questions below, and our matching will help you find real love ♥");

// Input sign-up profile

// First name            
let firstName = "";
while (firstName.length <= 1 || !isNaN(firstName)) {
  firstName = prompt("What is your first name?");
  if (firstName.length <= 1) alert("Enter your first name please to continue. Your first name cannot be empty.");
  if (!isNaN(firstName)) alert("Enter no number please");
}
profile.first_name = firstName;

// Last name
let lastName = "";
while (lastName.length <= 1 || !isNaN(lastName)) {
  lastName = prompt("What is your last name?");
  if (lastName.length <= 1) alert("Enter your last name please to continue. Your last name cannot be empty.");
  if (!isNaN(lastName)) alert("Enter no number please");
}
profile.last_name = lastName;

// Age
let age = 0;
while (age < 18 || isNaN(age)) {
  age = prompt("What is your age?");
  if (isNaN(age)) alert("Please enter numbers.");
  if (age < 18) alert("You have to be 18 or older to create an account.");
}
profile.age = age;

// Gender add extra toUpperCase
let gender = "";
while (true) {
  gender = prompt("What's your gender? (type: F for female, M for male, or X for all other genders)");
  gender = gender.toUpperCase();  // Convert to uppercase
  //prints case-sensitive

  if (gender === "M" || gender === "F" || gender === "X") {
    break;
  }
}
profile.gender = gender;

// add extra toUpperCase for Gender interest
let genderInterest = "";
while (true) {
  genderInterest = prompt("What gender are you interested in dating? Choose a type: F for female, M for male, X for all other genders, or B for bi").toUpperCase();

  if (["M", "F", "X", "B"].includes(genderInterest)) {
    break;
  } else {
    alert("Invalid input. Please enter either F, M, X, or B.");
  }
}
profile.gender_interest = genderInterest;
// prints case-sensitive

// add extra toLowerCase for location
let location = "";
while (true) {
  location = prompt("Are you from the 1.city or 2.rural? Please select which one of the two is your location?").toLowerCase();
  if (location === "city" || location === "rural") {
    break;
  }
}
profile.location = location.toLowerCase();
//prints case-sensitive

// Minimum age interest
let minAgeInterest = 0;
while (minAgeInterest < 18 || isNaN(minAgeInterest)) {
  minAgeInterest = prompt("What's the minimum age (18 or older) you are interested in dating?")
  minAgeInterest = Number(minAgeInterest);
  if (minAgeInterest < 18 || isNaN(minAgeInterest)) {
    alert("Please enter a valid number and ensure it's 18 or higher.");
  }
}
profile.min_age_interest = minAgeInterest;

// Maximum age interest
let maxAgeInterest = 0;
while (maxAgeInterest < 18 || isNaN(maxAgeInterest) || maxAgeInterest <= minAgeInterest) {
  maxAgeInterest = prompt("What is the maximum age you want to date?");
  maxAgeInterest = Number(maxAgeInterest);

  if (isNaN(maxAgeInterest) || maxAgeInterest < 18 || maxAgeInterest <= minAgeInterest) {
    alert("Please enter a valid number greater than the minimum age.");
  }
}
profile.max_age_interest = maxAgeInterest;

//prints match given age range min30-max50 

console.log(`${profile.first_name} Thank you for filling out your information! Look below at your answers. You are now signed up for Winc dating app ♥.`);

// New profile to match vs user(s)
let matchingArray = [];

for (let item of mockData) {
  const ageInRange = item.age >= profile.min_age_interest && item.age <= profile.max_age_interest;
  const userAgeInRange = profile.age >= item.min_age_interest && profile.age <= item.max_age_interest;
  const gendersMatch = profile.gender === item.gender_interest && item.gender === profile.gender_interest;
  const locationMatches = profile.location === item.location;

  if (ageInRange && userAgeInRange && gendersMatch && locationMatches) {
    matchingArray.push(item);
  }
}

if (matchingArray.length > 0) {
  console.log("Matching profiles:", matchingArray);
} else {
  console.log("Unfortunately, no match is found yet.");
}
//in for loop











