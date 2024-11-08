// This code refines a written story by enhancing readability and appropriateness.
// It removes unnecessary words, corrects spelling errors, replaces inappropriate language
// with more neutral terms, and limits the length of words to keep the text concise.
// The end result is a cleaner, more polished version of the story that’s both easy to read
// and suitable for a wider audience.


let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;

// Count the number of words
storyWords.forEach((word) => {
  count++;
});
console.log(count);

// Remove unnecessary words
storyWords = storyWords.filter(function(word) {
  return word !== unnecessaryWord;
});

// Correct misspelled words
storyWords = storyWords.map(function(word) {
  if (word === misspelledWord) {
    return "beautiful"; 
  } else {
    return word; 
  }
});

// Find the index of a bad word
let badWordIndex = storyWords.findIndex(function(word) {
  return word === badWord; 
});

// Replace the bad word
if (badWordIndex !== -1) {
    storyWords[badWordIndex] = "really";
}

// Check if all words are 10 characters or less
const lengthCheck = storyWords.every(function(word) {
  return word.length <= 10; 
});

if (lengthCheck) {
    console.log("true"); // All words are 10 characters or less
} else {
    console.log("false"); // One or more words are longer than 10 characters
}

// Replace long words with 'stunning'
let result = []; // Define the result array
storyWords.forEach((word) => {
    // Check if word length is greater than 10
    if (word.length > 10) {
        // Replace with 'stunning'
        result.push('stunning');
    } else {
        result.push(word); // If not long, keep the original word
    }
});

// Join the modified story back into a string
console.log(result.join(' '));
console.log(badWordIndex);
