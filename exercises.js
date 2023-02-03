// Question 1
const isUpperCase = (str) => {
 
   const newStr = str.replace(/[^a-z]/gi,"");
   console.log(newStr)
  for (let i = 0; i< newStr.length;i++){
      if (newStr[i] !== newStr[i].toUpperCase()) return false
  }
  return true
};
// console.log(isUpperCase('FOUR SCO1E'))
// Question 2
const removeVowels = (arr) => {
  const result = [];
  for (let i = 0; i< arr.length;i++){
    let str = arr[i].replace(/[aeiou]/gi,"");
    result.push(str);
  }
  return result;
};

// Question 3
const wordCap = (str) => {
  str = str.split(" ");
  const result = [];
  for (let i = 0; i < str.length;i++){
    let word = str[i]
    let newStr = "";
    let upperCase = false;
    for (j = 0;j < word.length; j++){
      if (j === 0){
         newStr += word[j].toUpperCase();
      }else {
         newStr += word[j].toLowerCase()
         
      }
    }
    result.push(newStr)
  }
  return result.join(' ');
};
// console.log(wordCap('this is a "quoted" word'))
// Question 4
const swapCase = (str) => {
  let result = "";
  for(let i =0; i< str.length; i++){
    if (str[i].match(/[a-z]/g)){
      result+= str[i].toUpperCase();
    }else if (str[i].match(/[A-Z]/g)){
      result+= str[i].toLowerCase();
    }else {
      result += str[i]
    }
  }
  return result 
};
// console.log(swapCase('Tonight on XYZ-TV'))
// Question 5
const staggeredCase = (str) => {
  let upper = true;
  let result = "";
  for(let i =0; i < str.length;i++){
    if (str[i].match(/[A-Z]/gi) && upper){
      result += str[i].toUpperCase();
      upper = false;
    }else if (str[i].match(/[A-Z]/gi) && !upper){
      result += str[i].toLowerCase();
      upper = true;
    }else {
      result += str[i]
    }
  }
  return result 
};

// console.log(staggeredCase('I Love Launch School!'));

// Question 6
const wordLengths = (str) => {
  if (!str) return [];
  str = str.split(' ');
  const result = [];
  for (let i = 0; i < str.length; i++){
    result.push(str[i]+" "+str[i].length)
  }
  return result;
};
console.log(wordLengths("Supercalifragilisticexpialidocious"))
// Question 7
let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';

const searchWord = (word,text) => {
  text = text.split(' ');
  let count = 0;
  for (let i=0; i < text.length; i++){
    let wor = text[i].replace(/[,.!?]/g,"");
    if (wor.toLowerCase() === word.toLowerCase()) count++;
  }
  return count
};

console.log(searchWord('flow',text))

// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
