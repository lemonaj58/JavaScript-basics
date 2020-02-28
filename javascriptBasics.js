/*

//  ----------Reading Documentation 1--------------
// Array element access

['fish', 'and', 'chips'][1];

//
Return Vaulues
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweets;
typeof words;
typeof isValid

//Method Chaining 
let tweet = 'Starting to get the hang of it... #javascript # launchschool'

tweet.split(' ');
tweet.split(' ').reverse();
tweet.split(' ').reverse().join(' ');

// -------------------Conditionals------------------

//yes?no? (pt1)

let randomNumber = Math.round(Math.random()) 
  if (randomNumber === 1) {
    console.log('Yes!')
  } else {
    console.log('No!')
  }

//Yes no? (pt2)

let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'yes!' : 'No.');

// Check the Weather, (pt1)


let weather = 'sunny'

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log("let's stay inside.")
}


// Check the weather, (pt2)

let weather = 'snowstorm' 

switch(weather) {
  case 'sunny':
  console.log("its a wonderful day out");
  break;
  case 'rainy':
  console.log("Rain, Rain, Go away");
  break;
  case 'snowstorm':
  console.log("Go build a snowman")
  break;
  case 'thunder storm':
  console.log("Cool lightning outside")
  break;
  
}

// ------------------------- Strings ----------------------------

//Length

let string = "These aren't the driods you're looking for.";
string.length;

//ALL CAPS

let allCaps = 'confetti floating everywhere' 
  
allCaps.toUpperCase();


//Repeat


function repeat(n, string) {
  let reps = 'string';
  
  while (n > 0) {
    reps += string;
    n -= 1;
  }
  
  return reps;
}
//Multiline String

let rhym = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

// Contains Character

let byteSequence = 'TXkgaG93ZXJjcmFmdCBpcyBmdWxsIG9mIGV1bHMu';
byteSequence.includes('x')

// Blank? Version 1

function isBlank(string) {
  return string.length === 0;
}

// Blank? Version 2

function isBlank(string) {
  return string.trim().length === 0;
}

// Capitalize Words

let string = 'Launch school tech & talk'
let words = string.plit(' ');
let capitalizedWords = [];
let i;

for (i = 0; i < words.length; i++) {
  let word= words[i];
  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}


//-------------------------------Loops--------------------------------
//loops and log
let i;

for (i = 0; i <= 0 ; i += 1) {
  console.log(i)
  
}


//countdown

let i;

for (i = 10; i >= 0; i-=1) {
  console.log(i);
}
console.log(launch)


//Tripple Greeting
let greeting = 'Aloha!';
let count = 1

for (count = 1; count <= 3; count += 1) {
  console.log(greeting);
  
}


//Take two


let numbers;
let i;

for (numbers = 1; numbers <= 100; numbers += 1) {
    console.log(numbers * 2);
  }


//Looping over Array Elements


let array = [1,2,3,4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
  }

// continue


let cities = ['Instanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing'] 
let index = 0
for (index = 0; index < cities.length; index += 1) {
  if (cities[index] === null) {
  continue;
  } else {
  console.log(cities[index].length);
  }
}

//And on and on and on

let i;

for (i = 0; ; i += 1) {
  console.log("and on");
  break;
}

//That's odd


let odds = 1;

while (odds <= 40) {
  if (odds % 2 !== 0) {
  console.log(odds);
  } 
  
  odds += 1; 

}

// Finding Nemo

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let ind;

for (ind = 0; ind < fish.length; ind += 1) {
  console.log(fish[ind]);
  
  if (fish[ind] === 'Nemo') {
    break;
  }
}


//Do...While

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

//---------------------------functions 1--------------------

//sum

function sum(num1, num2) {
  return num1 + num2;
}

//Log Quote

function BrendanEichQuote() {
  console.log('Always bet on JavaScript.');
}

//Cite the Author

let author;
let quote;

function quotes(author, quote) {
   console.log(author + "said" + quote + '"')
}

// Squared Number

function sqrt(num1) {
  return num1 * num1
}

// Three-way comparison

function lengthTest(string1, string2) {
  if (string1.length < string2.length) {
    console.log(-1);
    
}  else if (string1.length > string2.length) {
    console.log(1);
  
}  else   {
  console.log(0);
  
}
}

//Transformation

'Captain Ruby'.replace('Ruby', 'JavaScript');

// Internationalization 1


function lGreet(locale) {
  let leanguage = extractLanguage(local);
  let region = extractRegion(locale);
  
  switch (region) {
    case 'US': return 'hey!';
    case 'AU': return 'Hiya';
    case 'GB': return 'hey hey!';
    default: return lgreet(language);
  }
}


//Local pt1

function extractRegion(locale) {
  return locale.split('-')[0];
}  

//local pt2

function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}
// ------------------------Arrays---------------------


//First Element


function first(array) {
  return array[0]
}

//Last Element

function last(array) {
  return array[array.length - 1];
}
//Alphabet

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

alphabet.split('');

//Filter

let count = 0
let ind;
let scores = [96, 47, 113, 89, 100, 102];
for (ind = 0; ind < scores.length; ind += 1) {
  if (scores[ind] < 100) {
  count += 1;
}
}

console.log(count);

//Vocabulary

let vocabulary = [ 
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
  ];
 let index = 0
 
 
 for (index = 0; index < vocabulary.length; index += 1) {
    let vocabWords = vocabulary[index]
    let ind;
  
   for (ind = 0; ind < vocabWords.length; ind += 1) {
     console.log(vocabWords[ind]);
   }
 }

//Travel

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
  function checkDestination(input, desinations) {
    let i;
    
    for (i = 0; i < destinations.length; i += 1) {
      if (destinations && input){
        console.log(true);
        break;
    } else {
        console.log(false);
        break;
    }
    
    
  }
  }
  
//passcode
  
checkDestination('bora bora', destinations)


let passcode = ['11', 'jz5', 'hQ3f', '8!7g3', 'p3Fs']
let i;
let passString ='';

for (i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    passString += '-';
  }
    
    passString += passcode[i];
}

console.log(passString)


//Checking items off the grocery list

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}
// ------------------------------reading documentation 2------------------------
//Style guide

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');

//Which year is this?

let today = new Date();

today.getYear();
today.getFullYear();



//syntaxError

capitalizedWords.join(' ');


let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
console.log(" 'people are so bad at driving cars' + 
'that computers don/t have to be that good to bemuch better.'
+ "-- Marc Andreesen");  
}


//TypeError

let tweet = 'Woohoo! :-)';

if (tweet.length('') > 140) {
  console.log('Tweet is too long!');
}

//----------------------------- functions 2-------------------------

//greet 1


function greet(greeting = 'Hello') {
  console.log(greeting + ',world!');
}

console.log(greet());

//greet 2


function greet(greeting = 'Hello', to = 'world') {
  console.log(greeting + ',' + to + '!');
 
  }

//Greet 3


function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}



// Rest parameters

function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}

// Spread operator

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));


// Calculate BMI


function calcBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);
}

console.log(calcBMI(200,95))



// Cat Age

function catAge(years) {
  switch(years) {
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (years - 2) * 4;
  }
}

console.log(catAge (4))



function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}



// Arrow Functions (pt1)

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template 
  .replace('VERB', verb)
  .replace('NOUN', noun);
  
console.log(sentence('like','birds'))


//Arrows Function (pt2)


let initGame = () => ({
  level: 1,
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);



//------------------------Objects----------------------

//Retrieve a Value (pt1)

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

student['courses'];

//retrieve a Value (pt2)

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
}

jane.location.country;

//Add a Property

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido['age'] = 2;
fido['favorite food'] = 'peanutbutter';

//greetings from jane

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`hej, ${name}!`);
  }
};

jane.greet('Bobby');


//Car Keys

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);

console.log(keys);

//Convert an object to a nested array

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedArray = Object.owners(person);

//..and vice versa

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person = {};
let i;

for (i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);
*/
//Cloning a person

function clone(obj) {
  
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

function clone(obj) {
  return Object.assign({}, obj);
}
//did it this way because 'Object.assign' creats a true clone, in a way that it changes if the other changes