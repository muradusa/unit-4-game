
var randomNumnber
var wins = "0";
var losses = "0";
var totalScore;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

var randomNumnber = Math.floor(Math.random()*101) + 19;
console.log(randomNumnber);
var one = Math.floor(Math.random()*11) + 1;
console.log(one);

$(".crystalOne").on("click", function(){
    var crystalOne = one;
    console.log(crystalOne);
}
)
$(".totalScore").text(crystalOne);