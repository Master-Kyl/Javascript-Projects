// The provided code simulates a registration system for a race and determines the start time based on the runner's age and whether they registered early.

let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = false;

let runnerAge = 16;

// task 4
if (runnerAge > 18 && registerEarly) {
  raceNumber += 1000;
}


// task 5
if (runnerAge > 18 && registerEarly) {
  console.log(`The race starts at 9:30 am for runner number ${raceNumber}.`);
// task 6
} else if (runnerAge > 18 && !registerEarly) {
  console.log(`The race starts at 11.00 am for runner number ${raceNumber}.`);

} else if (runnerAge < 18) {
  console.log(`The race starts at 12.30 pm for runner number ${raceNumber}.`);

} else {
  console.log('See the registration desk');
}







