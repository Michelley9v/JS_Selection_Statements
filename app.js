console.log("Hello World!\n==========\n");

console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

let answer = prompt ("what is your name");
console.log("Hello,"); 

let magicNumber = 3;
let min = 1;
let max = 100;


let guessNumber = prompt(`Guess a number between $(min and $(max)?`);


guessNumber = parseInt(guessNumber);


if ('isNaan(guessNumber) // guessNumber < 1 // guessNumber > 100');{
console.log(
  `You didn't give me a valid number between ${min}and ${max}as a guess >:(`);
} 

if (guessNumber == magicNumber) {
  console.log("Congrats!You guessed the magic number.");
}else if (guessNumber> magicNumber){
  console.log("Guess was too high ;/. Try again.");
}else {
  console.log("Guess was too low >:(.Try again.");
}













let birthMonth = window.prompt("What is your Birth Month?");

switch (birthMonth) {
 case "December":
case "January":
case "February":
   console.log("Winter");
  break;

case "March":
case "April":
case "May":
console.log("Spring");
break;

case "June":
  case "July":
    case "August":
      console.log(Summer);
      break;

      case "September":
        case "October":
          case "November":
            console.log(Fall);
            break;
            default:
              console.log("I don't recognize that month...");


}

switch  (tankTop){
  case "01":
    type = "Tank Top";
 break;
 case "02":
  type = "T-Shirt"
  break;
  case "03":
    type = "Long Sleeve";
    case "04":
      type = "Sweat Shirt";
      break;
  default:
    type = "Other";
    break;
}

    switch (colorId){
      case "Blk":
      color = "Black";
      break;
case "Bl":
  color = "Blue";
  break;
  case "RD":
    color = "Red";
    break;
    case "PURP":
      color = "purple"
      break;
      case "WH":
        color = "White";
        default:
          type = "other";
          break;
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
    case "One":
    size =  "One size fits all";
    break;
}
    console.log(`Product: ${size} ${color} ${type}`);
  
