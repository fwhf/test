function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
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
var myObj2 = { xxx: 10, color: "black" };
createSquare(myObj2);
var tom = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
var myArray = { 1: "Alice", 2: "Bob" };
console.log(myArray[1]);
// var deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function () {
//         return function () {
//             var pickedCard = Math.floor(Math.random() * 52);
//             var pickedSuit = Math.floor(pickedCard / 13);
//             return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//         };
//     }
// };
// var cardPicker = deck.createCardPicker();
// var pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker2 = deck2.createCardPicker();
var pickedCard2 = cardPicker2();
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var deck3 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return ()=>{
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker3 = deck3.createCardPicker();
var pickedCard3 = cardPicker3();
console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);


var obj = {
	a: 1,
	b: function(){
		return function(){
			console.log(this) //window
		}
	}
}
var objf = obj.b();
objf();
var obj2 = {
	a: 1,
	b: function(){
		return ()=>{
			console.log(this) //obj2
		}
	}
}
var objf2 = obj2.b();
objf2();