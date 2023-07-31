//Number 1
let challenge='30 Days Of JavaScript';

//Number  2
console.log(challenge);

//number 3
console.log(challenge.length);

//number 4
let capitalizedChallenge= challenge.toLocaleUpperCase();
console.log(capitalizedChallenge);

//Number 5
let lowercasechallenge = challenge.toLowerCase();
console.log(lowercasechallenge);

//Number 6
'30 Days Of JavaScript'
let firstWord= challenge.substring(0,challenge.indexOf(' '));
console.log(firstWord);

//Number 7 
let slicePhrase= challenge.slice(3);
console.log(slicePhrase);

//Number 8
let containsScript= challenge.includes('Script');
console.log(containsScript);

//Number 9
let splitArray= challenge.split(' ');
console.log(splitArray);

//Number 10
let sring= "30 Days Of JavaScript";
let splittedArray= challenge.split(" ");
console.log(splittedArray);

//Number 11
let string= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let array= string.split(',');
console.log(array);

//Number 12
string= "30 Days Of JavaScript";
string= string.replace("JavaScript", "Python");
console.log(string);

//Number 13
string = "30 Days Of JavaScript"; 
let chartCode= string.charCodeAt(sring.indexOf('J'));
console.log(chartCode);

//number 14
string= "30 Days Of JavaScript"
let character = string.charAt(15);
console.log(character);

//Number 15
string = "30 Days Of JavaScript"; 
let position1 = string.indexOf('a');
console.log(position1);

//Number 16
string= "30 Days Of JavaScript"
position2= string.lastIndexOf('a');
console.log(position2);

//Number 17
let sentence= 'You cannot end a sentence with because because because is a conjuction';
let position3= sentence.indexOf('because');
console.log(position3);

//Number 18
sentence=  'You cannot end a sentence with because because because is a conjuction';
let position4= sentence.lastIndexOf('because');
console.log(position4);

//Number 19
sentence=  'You cannot end a sentence with because because because is a conjuction';
let position= sentence.search('because');
console.log(position);

//Number 20
string= "30 Days Of JavaScript";
let trimmedString= string.trim();
console.log(trimmedString);

//Number 21
string= "30 Days Of JavaScript";
let startsWith= string.startsWith('30 Days');
console.log(startsWith);

//Number 22
str= "30 Days Of JavaScript";
let endsWith= string.endsWith('JavaScript');
console.log(endsWith);

//Number 23

string= "30 Days Of JavaScript";
let matches= string.match(/a/g);
console.log(matches);

//Number 24
let str1="30 Days of";
let str2= "JavaScript";
let mergedString= str1.concat(str2);
console.log(mergedString);

//Number 25
string= "30 days Of javaScript"
let repeatedString= string.repeat(2);
console.log(repeatedString);



















