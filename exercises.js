// Question 1
const isRealPalindrome = (str) => {
   let newStr = str.replace(/[^a-z0-9]/gi,"").toLowerCase();
   console.log(newStr)
   let isPalindromeStr = "";
   const regx = /[a-z0-9]/g;
   for (let i = newStr.length-1; i >=0;i--){
      if (newStr[i].match(regx)){
        isPalindromeStr += newStr[i];
    }
  
    
   }
   
   return newStr === isPalindromeStr
};

// console.log(isRealPalindrome('Madam'))
// Question 2
const runningTotal = (arr) => {
  if (arr.length === 0 || arr.length === 1 ){
      return arr
  }
  const result = [arr[0]];
  for (let i = 1; i < arr.length;i++){
      result.push(arr[i]+ result[i-1])
  }
  return result 
};
// console.log(runningTotal([]))
// Question 3
const swap = (str) => {
  let newStr = str.split(" ")
  const result = [];
  for (let i =0; i< newStr.length;i++){
    let word = newStr[i].split("").reverse().join('')
    result.push(word)
  }

  return result.join(" ")
  
};
// console.log(swap('Oh what a wonderful day it is'))
// Question 4
const wordSizes = (str) => {
  const obj = {};
  if (str === "") return {}
  str = str.split(' ');
  
  for (let i =0; i < str.length; i++){
    let word = str[i]
    if (obj[word.length]){
      obj[word.length]++
    }else {
      obj[word.length] = 1
    
  }
  }
 return obj 


};

// console.log(wordSizes('Four score and seven.'))
// Question 5
const union = (a,b) => {
    const arr = a.concat(b);
    console.log(arr)
    const result = [];
    const obj = {};
    arr.forEach(x => {
      if (!obj[x]){
        result.push(x);
        obj[x] = true
      }
      
    });
    return result
};
// console.log(union([1, 3, 5], [3, 6, 9]))
// Question 6
const firstRecurring = (str) => {
  const obj = {};
  for (let i =0; i < str.length;i++){
      if (obj[str[i]]){
        return str[i];
      }else {
        obj[str[i]] = true;
      }
  }
  return ""
};
// console.log(firstRecurring("reuben"))
// Question 7
const showMultiplicativeAverage = (nums) => {
    const length = nums.length;
    const total =  nums.reduce((a,b)=> a*b) / length;
    return total.toFixed(3)+""
};
// console.log(showMultiplicativeAverage([3, 5]))
// Quetsion 8
const multiplyList = (a,b) => {
  return a.map((x,i)=> x * b[i])
};
// console.log(multiplyList([3, 5, 7], [9, 10, 11]))
// Question 9
const sequence = (num) => {
  const result = [];
  for (let i = 1; i <= num;i++){
      result.push(i)
  }
  return result 
};
console.log(sequence(5))
// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
