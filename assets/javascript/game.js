
var randomNumnber

var totalScore;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

// Beginning of the game

var wins = 0;
$(".wins").text(wins);

var losses = 0;
$(".losses").text(losses);

var randomNumnber = Math.floor(Math.random() * 101) + 19;
console.log(randomNumnber);
$(".randomNumber").text(randomNumnber);

var one = Math.floor(Math.random() * 11) + 1;
console.log(one);

var two = Math.floor(Math.random() * 11) + 1;
console.log(two);

var three = Math.floor(Math.random() * 11) + 1;
console.log(three);

var four = Math.floor(Math.random() * 11) + 1;
console.log(four);

// Game is now being played

$(".crystalOne").on("click", function () {
    var crystalOne = one;
    console.log(crystalOne);
})
$(".crystalTwo").on("click", function () {
    var crystalTwo = two;
    console.log(crystalTwo);
})

$(".crystalThree").on("click", function () {
    var crystalThree = three;
    console.log(crystalThree);
})

$(".crystalFour").on("click", function () {
    var crystalFour = four;
    console.log(crystalFour);
})

$("#totalScore").text(one);

