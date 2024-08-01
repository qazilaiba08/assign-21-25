// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");

// let fullName = firstName.concat( " "+ lastName);

// alert("Hello, " + fullName + "!");

// // 2. Write a program to take a user input about his favorite
// // mobile phone model. Find and display the length of user
// // input in your browser

// let favouriteMobile = prompt("Enter your favourite mobile model:");

// document.write("My favourit Phone is:"+ favouriteMobile +"<br>");

// let inputLength = favouriteMobile.length;

// document.write("Length of string:"+ inputLength+"<br>");

// // 3. Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser .

// let Country = "Pakistani"
// document.write("String:" + Country+"<br>")
// let index =Country.indexOf("n");

// document.write("Index of n : "+index+"<br>");

// // 4. Write a program to find the last index of letter “l” in the
// // word “Hello World” and display the result in your browser.

// let word = "Hello World!";

// document.write("String :" + word +"<br>");

// let lindex = word.lastIndexOf("l");

// document.write("Last index of l :"+lindex +"<br>");

// // 5. Write a program to find the character at 3rd index in the
// // word “Pakistani” and display the result in your browser.

// let character = "Pakistani";

// document.write("String :" + character +"<br>");

// let chara = character.charAt(3);

// document.write("Character index 3 : " + chara +"<br>");

// // 6. Repeat Q1 using string concat() method.

// let text1 = prompt("Enter your name :");
// let text2 = prompt("Enter your last name :");
// let text3 = text1.concat(" ", text2);

// document.write("fullName : "+text3 +"<br>");

// // 7. Write a program to replace the “Hyder” to “Islam” in the
// // word “Hyderabad” and display the result in your browser.

// let city = "Hyderbad";

// document.write("City : " + city +"<br>");

// let replace = city.replace("Hyderbad","Islamabad");

// document.write("After Replacement : " + replace+"<br>");

// // 8. Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.
// // var message = “Ali and Sami are best friends. They play cricket and
// // football together.”;

// let message ="Ali and Sami are best friends. They play cricket and football togather.";

// document.write(message+"<br>");

// let Replacement = message.replace("and","&");

// document.write("After Replacement : " + Replacement+"<br>");

// // 9. Write a program that converts a string “472” to a number
// // 472. Display the values & types in your browser.

// let str = "472";

// document.write("Value : "+str+ " (Type: " + typeof str + ")<br>");

// let num = Number(str);

// document.write("Value : "+num+ " (Type: " + typeof num + ")<br>");

// // 10. Write a program that takes user input. Convert and
// // show the input in capital letters.

// let userInput = prompt("Enter input value :");

// document.write( "User Input : "+userInput +"<br>");

// let change = userInput.toUpperCase()

// document.write("User Upper case : "+change+"<br>");

// // 11. Write a program that takes user input. Convert and
// // show the input in title case.

let userInput1 = prompt("Enter input value :");

document.write( "User Input : "+userInput1 +"<br>");

let firstChar = userInput1.slice(0, 1);
let otherChars = userInput1.slice(1);
firstChar = firstChar.toUpperCase(); 
otherChars = otherChars.toLowerCase();
let cappedCity = firstChar + otherChars;

document.write("User Title case : "+cappedCity+"<br>");

// // 12. Write a program that converts the variable num to
// // string.
// // var num = 35.36 ;
// // Remove the dot to display “3536” display in your browser.

// let number = 35.36 ;

// let numstr = number.toString()

// document.write("Number : "+numstr+"<br>");

// let numReplace = numstr.replace(".","");

// document.write("Result : "+numReplace+"<br>");

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput2 = prompt("Enter an item to search:");

// let lowerCaseInput = userInput2.toLowerCase();

// let found = false;
// for (let item of A) {
//   if (item.toLowerCase() === lowerCaseInput) {
//     found = true;
//   }
// }

// if (found) {
//   document.write(userInput2 + " is available in the list.") ;
// } else {
//   document.write("We Sorry "+ userInput2 + " is not available in the list .");
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = "University of Karachi";
var universityArray = university.split();

// Display the elements of the array in the browser

document.write( "<ul>")
document.write( "<li>"+universityArray +"</li>")
document.write( "<br>"+"</ul>")

// 17. Write a program to display the last character of a user input.

let user = prompt("Enter a text");
document.write("User Input : "+user+"<br>")

let  promt = user.charAt(7);

document.write("Last character of Input :"+promt+"<br>");

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

let str = "The quick brown fox jumps over the lazy dog.";

for (let i = 0; i < str.length; i++) {
  document.write(str[i]);
}