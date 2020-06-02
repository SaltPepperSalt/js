// Q2) words 배열의 각 요소(문자열)를 역순으로 가지는 새로운 배열(newWords)을 만들어주세요.
const words = ['hello', 'world', 'nice', 'to', 'meet', 'you'];
const newWords = words.map(word => [...word].reverse().join(''));
console.log('Q2');
console.log(newWords); // [ 'olleh', 'dlrow', 'ecin', 'ot', 'teem', 'uoy' ]