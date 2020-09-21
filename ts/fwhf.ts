interface LabelledValue {
  label: string;
  width?: number;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface SquareConfig {
  color: string;
  width?: number;
}
function createSquare(config: SquareConfig){
// function createSquare(config: SquareConfig): {color: string; area: number} {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
}
let myObj2 = {xxx:10 , color: "black"};
createSquare(myObj2);

// createSquare({xxx:10 , color: "black"} as SquareConfig);

interface Person {
  name: string
  age?: number
}
let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
} as Person

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = {1:"Alice", 2:"Bob"};
console.log(myArray[1])

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

let deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker2 = deck2.createCardPicker();
let pickedCard2 = cardPicker2();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

