console.log("Hello World!\n==========\n");

console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

let answer = prompt ("what is your name");
console.log("Hello, " + answer); //prints a message using the answer inputted by the user

let magicNumber = 10;
let min = 1
let max = 20

let guessNumber = prompt(`Guess a number between ${min} and ${max}?`);

guessNumber = parseInt(guessNumber);

if(isNaN(guessNumber) || guessNumber < 1 || guessNumber > 20) {
 console.log(`You didn't give a valid number between ${min} and ${max}(`);

} else {

if (guessNumber == magicNumber) {
  console.log("Congradulations! You guessed the magic number.");
 } else if (guessNumber > magicNumber) {
  console.log("Guess was too high ;/. Try again.");
} else {
  console.log("Guess was too low >:(.Try again.");
}
}

//Exercise 2
let birthMonth = prompt("What is your Birth Month?");

switch (birthMonth.toLowerCase()) {
 case "december":
case "january":
case "february":
   console.log("Winter");
  break;

case "march":
case "april":
case "may":
console.log("Spring");
break;

case "june":
  case "july":
    case "august":
      console.log("Summer");
      break;

      case "september":
        case "october":
          case "november":
            console.log("Fall");
            break;
            default:
              console.log("I don't recognize that month...");


}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId){
  case "01":
  type = "Tank Top";
  break;
  case "02":
  type = "T-Shirt";
  break;
  case "03":
  type = "Long Sleeve";
  case "04":
  type = "Sweat Shirt";
  break;
  default:
  type = "Other";
    
}

switch (colorId){
 case "BLK":
 color = "Black";
 break;
 case "BL":
 color = "Blue";
 break;
 case "RD":
 color = "Red";
 break;
 case "PU":
 color = "Purple";
 break;
 default:
 case "WH":
 color = "White";
         
}

switch (sizeId){
 case "S":
 size = "small";
 break;
 case  "M":
 size = "Medium";
 break;
 case "L":
 size = "Large";
 break;
 case "XL":
 size = "Extra-Large";
 break;
 default: 
 size =  "One size fits all";
}
 
 console.log(`Product: ${size} ${color} ${type}`);
