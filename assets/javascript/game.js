$(document).ready(function () {

    var randomNumber;
    var counterOne = 0;
    var counterTwo = 0;
    var counterThree = 0;
    var counterFour = 0;
    var totalScore = 0;

    var wins = 0;
    var losses = 0;
    $(".wins").text(wins);
    $(".losses").text(losses);

    var randomNumber = Math.floor(Math.random() * 101) + 19;
    $(".randomNumber").text(randomNumber);

    var one = Math.floor(Math.random() * 11) + 1;
    console.log(one);
    var two = Math.floor(Math.random() * 11) + 1;
    console.log(two);
    var three = Math.floor(Math.random() * 11) + 1;
    console.log(three);
    var four = Math.floor(Math.random() * 11) + 1;
    console.log(four);

    function reset() {
        var randomNumber = Math.floor(Math.random() * 101) + 19;
        $(".randomNumber").text(randomNumber);

        var one = Math.floor(Math.random() * 11) + 1;
        var two = Math.floor(Math.random() * 11) + 1;
        var three = Math.floor(Math.random() * 11) + 1;
        var four = Math.floor(Math.random() * 11) + 1;
        counterOne = 0;
        counterTwo = 0;
        counterThree = 0;
        counterFour = 0;
        totalScore = 0;
        $(".totalScore").text(totalScore);
    }



    $(".crystalOne").on("click", function () {

        counterOne += 1;
        totalScore = (counterOne * one) + (counterTwo * two) + (counterThree * three) + (counterFour * four);
        $(".totalScore").text(totalScore);


        if (totalScore == randomNumber) {
            wins++;
            $(".wins").text(wins);
            reset();

        }

        else if (totalScore > randomNumber) {
            losses++;
            $(".losses").text(losses);
            reset();


        }

    }
    )
    $(".crystalTwo").on("click", function () {

        counterTwo += 1;
        console.log(two);
        totalScore = (counterOne * one) + (counterTwo * two) + (counterThree * three) + (counterFour * four);
        $(".totalScore").text(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            $(".wins").text(wins);
            reset();

        }

        else if (totalScore > randomNumber) {
            losses++;
            $(".losses").text(losses);
            reset();


        }
    }
    )

    $(".crystalThree").on("click", function () {

        counterThree += 1;
        console.log(three);
        totalScore = (counterOne * one) + (counterTwo * two) + (counterThree * three) + (counterFour * four);
        $(".totalScore").text(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            $(".wins").text(wins);
            reset();

        }

        else if (totalScore > randomNumber) {
            losses++;
            $(".losses").text(losses);
            reset();


        }
    }
    )

    $(".crystalFour").on("click", function () {

        counterFour += 1;
        console.log(four);
        totalScore = (counterOne * one) + (counterTwo * two) + (counterThree * three) + (counterFour * four);
        $(".totalScore").text(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            $(".wins").text(wins);
            reset();

        }

        else if (totalScore > randomNumber) {
            losses++;
            $(".losses").text(losses);
            reset();


        }
    }
    )




})