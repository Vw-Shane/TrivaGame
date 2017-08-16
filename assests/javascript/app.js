$(document).ready(function() {
    var title = ["First Question!", "Second Question!", "Third Question!", "Fourth Question!"];
    var Questions = {
        "Qs": [
            "This 1973 Ferrari Daytona could have been purchased new for $19,000. What was the estimated value of it when it went up for auction last year?", 
            "The Sika Deer is commonly found on Japan's island of Miyajima. What is the average lifespan of these Deer?",
        ],
        "Pics": [
            "<img src=assests/images/ferrariDaytona.jpg width='400px'>",
            "<img src=assests/images/japandeer.jpg width='400px'>",
        ],
    };
   // var RandomArr = Math.floor((Math.random() * Questions.length));// this is was for my first idea
    var right = 0; //these will be filled based on right an wrongly selected answers
    var wrong = 0; // then displayed on screen when the game ends
    // var i = 0; //currently useless
    var t = 0;//used to cycle through the 'Title'
    var count = 60;//amount of time to play entire game
    $("#Questions").html("play");// creates a string play that starts the game when clicked
    timer();// calls the below funk

    function timer() {
        count = count - 1;
        $("#Questions").on("click", function() {
            $("h1").html(title[t])
            $("#Questions").html(Questions.Qs[0])
            $("#Pictures").html(Questions.Pics[0])
            a1();
            var counter = setInterval(timer, 1000);
            $("#A").on("click", function() {
                right = right + 1;
            });
        });

        if (count === 50) {
            t++;
            $("h1").html(title[t]);
            $("#Questions").html(Questions.Qs[1])
            $("#Pictures").html(Questions.Pics[1])
            var counter = setInterval(timer, 1000);
            a2();
            $("#C").on("click", function() {
                right = right + 1;
                console.log("rights" + right);
            });
            console.log("wrong" + wrong);
            console.log("rights" + right);
        };
    };

    function a1() {
        var a1 = [
            "A) $900,000", //right answer
            "B) $25,000",
            "C) $67,000",
            "D) $2,000,000"
        ]
        console.log(a1[0])
        $("#A").html(a1[0])
        $("#B").html(a1[1])
        $("#C").html(a1[2])
        $("#D").html(a1[3])
    };

    function a2() {
        var a2 = [
            "A) 100 years",
            "B) 6 months",
            "C) 12 years", //right answer
            "D) 30 years"
        ]
        console.log(a2[0])
        $("#A").html(a2[0])
        $("#B").html(a2[1])
        $("#C").html(a2[2])
        $("#D").html(a2[3])
    };

    function a3() {
        var a2 = [
            "A) 100 years",
            "B) 6 months",
            "C) 12 years", //right answer
            "D) 30 years"
        ]
        console.log(a2[0])
        $("#A").html(a2[0])
        $("#B").html(a2[1])
        $("#C").html(a2[2])
        $("#D").html(a2[3])
    };

});