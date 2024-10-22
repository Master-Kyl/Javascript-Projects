// The Magic 8-Ball is a toy and novelty item that serves as a simple fortune-telling device

let userName = "r";

let greeting = userName ? `Hello, ${userName}!` : 'Hello!';
console.log(greeting);

let userQuestion = "ewew";


console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";


switch(randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;

  case 1:
  eightBall = 'It is decidedly so';
  break;

  case 2:
  eightBall = 'Reply hazy try again';
  break;

  case 3:
  eightBall = 'Cannot predict now';
  break;

  case 4:
  eightBall = 'Do not count on it';
  break;

  case 5:
  eightBall = 'My sources say no';
  break;

  case 6:
  eightBall = 'Signs point to yes';
  break;

  case 7:
  eightBall = "Outlook not so good";
  break;


  



}
  console.log(eightBall);


