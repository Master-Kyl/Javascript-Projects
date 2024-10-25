let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

// console.log(secretMessage.length);

secretMessage.push("to", "program"); 

// console.log(secretMessage);

secretMessage[7] = 'right';

secretMessage.shift();

// console.log(secretMessage);

secretMessage.unshift("programming");

console.log(secretMessage);

secretMessage.splice(6, 5, 'know,');

console.log(secretMessage.join(' '));


