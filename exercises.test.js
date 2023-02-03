const exercises = require('./exercises.js');

test('Question 1 isUpperCase', () => {
  expect(exercises.isUpperCase('')).toEqual(true);
  expect(exercises.isUpperCase('123')).toEqual(true);
  expect(exercises.isUpperCase('abaa')).toEqual(false);
  expect(exercises.isUpperCase('ABBA')).toEqual(true);
  expect(exercises.isUpperCase('aABBA')).toEqual(false);
  expect(exercises.isUpperCase('ABBA!')).toEqual(true);
})


test('Question 2 removeVowels', () => {
  expect(exercises.removeVowels(['123','aeip'])).toEqual(['123','p']);
  expect(exercises.removeVowels(['green', 'YELLOW', 'black', 'white'])).toEqual(["grn", "YLLW", "blck", "wht"]);
  expect(exercises.removeVowels(['ABC', 'AEIOU', 'XYZ'])).toEqual(["BC", "", "XYZ"]);
  expect(exercises.removeVowels([])).toEqual([]);
})

test('Question 3 wordCap', () => {
  expect(exercises.wordCap('four score and seven')).toEqual("Four Score And Seven");
  expect(exercises.wordCap('the javaScript language')).toEqual("The Javascript Language");
  expect(exercises.wordCap('this is a "quoted" word')).toEqual('This Is A "quoted" Word');
})

test('Question 4 swapCase', () => {
  expect(exercises.swapCase('CamelCase')).toEqual('cAMELcASE');
  expect(exercises.swapCase('123')).toEqual('123');
  expect(exercises.swapCase('ab-aa')).toEqual('AB-AA');

})

test('Question 5 staggeredCase', () => {
  expect(exercises.staggeredCase('I Love Launch School!')).toEqual("I lOvE lAuNcH sChOoL!");
  expect(exercises.staggeredCase('ALL CAPS')).toEqual("AlL cApS");
  expect(exercises.staggeredCase('ignore 77 the 444 numbers')).toEqual("IgNoRe 77 ThE 444 nUmBeRs");

})

test('Question 6 wordLengths', () => {
  expect(exercises.wordLengths('cow sheep chicken')).toEqual( ["cow 3", "sheep 5", "chicken 7"]);
  expect(exercises.wordLengths('baseball hot dogs and apple pie')).toEqual(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]);
  expect(exercises.wordLengths("It ain't easy, is it?")).toEqual(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]);
  expect(exercises.wordLengths('Supercalifragilisticexpialidocious')).toEqual(["Supercalifragilisticexpialidocious 34"]);
  expect(exercises.wordLengths('')).toEqual([]);
  expect(exercises.wordLengths()).toEqual([]);
})

test('Question 7 searchWord', () => {
  let text = "D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix's hip-hop reality competition centered on the discovery of hip-hop's next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood."
  expect(exercises.searchWord('his', text)).toEqual(4);
  expect(exercises.searchWord('hip-hop', text)).toEqual(1);
  expect(exercises.searchWord('flow', text)).toEqual(1);
  expect(exercises.searchWord('is', text)).toEqual(1);
})








