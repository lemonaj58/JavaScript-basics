/*
if (/b/.test('bobcat')) {
  console.log("Yes, it contains the letter 'b'")
} else {
  console.log("No, it doesn't conatin the letter 'b'");
}

function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    console.log(`we have a match! ${results}`)
  } else {
    console.log('No match here.');
  }
}

has_a_or_e("basketball");
has_a_or_e("foorball");
has_a_or_e("hockey");
has_a_or_e("golf")

function foo() {
  console.log(bar);
}
foo();
*/

let myArray = [
  'doggy', 
  'cat', 
  'lion',
  'roar',
  'yello'
  ]
  function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }
  
  return matches;
  }