$(document).ready(function() {
    var title = ["First Question!", "Second Question!", "Third Question!", "Fourth Question!"];
    var Questions ={
             "Qs" : [
                "This 1973 Ferrari Daytona could have been purchased new for $19,000. What was the estimated value of it when it went up for auction last year?",
                "The Sika Deer commonly found on Japan's island of Miyajima what is the average lifespan of these Deer",
                    ],

               "Pics" :[
               "<img src=assests/images/ferrariDaytona.jpg width='400px'>",
               "<img src=assests/images/japandeer.jpg width='400px'>", 
                    ],

              };
    var RandomArr = Math.floor((Math.random() * Questions.length));
    var right = 0; //these will be filled based on right an wrongly selected answers
    var wrong = 0; // then displayed on screen when the game ends
    var i = 0;
    var count = 5;

    $("#Questions").html("play");
    if (right === 0 && wrong === 0) { // this if statement is to make sure game hasnt started yet //
        //will repalce with better true statment//
        $("#Questions").on("click", function() {
            
             var Ans =[  
                    a0,
                    a1,
                    ]
            $("h1").html(title[i])
            $("#Questions").html(Questions.Qs[0])
            $("#Pictures").html(Questions.Pics[0])
            Questions.Ans[0]
            // $("#B").html(Questions.Q1[3])
            // $("#C").html(Questions.Q1[4])
            // $("#D").html(Questions.Q1[5])
        });
    };
    function a0(){
        var a0 = [
                "$9",
                "$25,000",
                "$670",
                "$20"
             ]
             console.log(a0[0])
            $("#A").append(a0[0])
            $("#B").append(a0[1])
            $("#C").append(a0[2])
            $("#D").append(a0[3])
    };

    function a1(){
        var a1 = [
                "$900,000",
                "$25,000",
                "$67,000",
                "$2,000,000"
             ]
             console.log(a1[0])
            $("#A").append(a1[0])
            $("#B").append(a1[1])
            $("#C").append(a1[2])
            $("#D").append(a1[3])
    };
    // function displayImage() {
    //     $("#Pictures").html("<img src= width='400px'>");
    // }
});