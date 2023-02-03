const exercises = require('./exercises');
test('Question 1 isRealPalindrome', () => {
  expect(exercises.isRealPalindrome('abba')).toEqual(true);
  expect(exercises.isRealPalindrome('abda')).toEqual(false);
  expect(exercises.isRealPalindrome('Abba')).toEqual(true);
  expect(exercises.isRealPalindrome('abba123')).toEqual(false);
  expect(exercises.isRealPalindrome('321,abba123')).toEqual(true);
  expect(exercises.isRealPalindrome('')).toEqual(true);
})
test('Question 2 runningTotal', () => {
  expect(exercises.runningTotal([1,2,3])).toEqual([1,3,6]);
  expect(exercises.runningTotal([])).toEqual([]);
  expect(exercises.runningTotal([14, 11, 7, 15, 20])).toEqual([14, 25, 32, 47, 67]);
  expect(exercises.runningTotal([3])).toEqual([3]); 
  
})
test('Question 3 swap', () => {
  expect(exercises.swap('123')).toEqual('321');
  expect(exercises.swap('')).toEqual('');
  expect(exercises.swap('Abcde')).toEqual('edcbA'); 
  expect(exercises.swap('a')).toEqual('a');
  expect(exercises.swap('Hello my name is Anaya')).toEqual('olleH ym eman si ayanA');
})
test('Question 4 wordSizes', () => {
  expect(exercises.wordSizes('123')).toEqual({'3': 1});
  expect(exercises.wordSizes('')).toEqual({});
  expect(exercises.wordSizes('Hey diddle diddle, the cat and the fiddle!')).toEqual({ "3": 5, "6": 1, "7": 2 }); 
  expect(exercises.wordSizes("What's up Ana?")).toEqual({ "2": 1, "4": 1, "6": 1 });
})
test('Question 5 union', () => {
  expect(exercises.union([1,2,3],[1,2,3])).toEqual([1,2,3]);
  expect(exercises.union([1,2,3],[5,4,3])).toEqual([1,2,3,5,4]);
  expect(exercises.union([1,2,5],[5,4,3])).toEqual([1,2,5,4,3]);
  
})
test('Question 6 firstRecurring', () => {
  expect(exercises.firstRecurring('')).toEqual('');
  expect(exercises.firstRecurring('123')).toEqual('');
  expect(exercises.firstRecurring('abaa')).toEqual('a');
  expect(exercises.firstRecurring('abba')).toEqual('b');
})
test('Question 7 showMultiplicativeAverage', () => {
  expect(exercises.showMultiplicativeAverage([3, 5])).toEqual("7.500");
  expect(exercises.showMultiplicativeAverage([2, 5, 7, 11, 13, 17])).toEqual('28361.667');
  
})
test('Question 8 multiplyList', () => {
  expect(exercises.multiplyList([3, 5, 7], [9, 10, 11])).toEqual([27, 50, 77]);
  expect(exercises.multiplyList([5, 10, 15, 20], [1, 2, 3, 4])).toEqual([5, 20, 45, 80]);
  
})
test('Question 9 sequence', () => {
  expect(exercises.sequence(2)).toEqual([1,2]);
  expect(exercises.sequence(4)).toEqual([1, 2, 3, 4]);
  expect(exercises.sequence(0)).toEqual([]);
  
})












