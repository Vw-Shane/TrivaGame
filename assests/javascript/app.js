$(document).ready(function() {
	var title = ["First Question!","Second Question!","Third Question!","Fourth Question!"];
	var Questions = ["First","This 1973 Ferrari Daytona could have been purchased new for $19,000. What was the estimated value of it when it went up for auction last year?","Third","Fourth"];
	var Pictures  = ["assests/images/japandeer.jpg","assests/images/ferrariDaytona.jpg","assests/images/hemeji.jpg","assests/images/Fuji.jpg"];
	                  
	var RightAns  = ["First","900,000","Third","Fourth"];
	var WrongAns  = ["Random","Bs"];
	var RandomArr = Math.floor((Math.random()*Questions.length));
	var right = 0;//these will be filled based on right an wrongly selected answers
	var wrong = 0;// then displayed on screen when the game ends
	var i = 0;
					

 $("#Questions").html("play");
 if (right === 0 && wrong === 0) {// this if statement is to make sure game hasnt started yet //
		//will repalce with better true statment//
	$("#Questions").on("click", function() {
		displayImage();
		$("h1").html(title[i])
		$("#Questions").html(Questions[1])
		$("#A").append(RightAns[1])
		
		


	});
	};
	function displayImage() {
  		$("#Pictures").html("<img src=" + Pictures[1] + " width='400px'>");
		}
});







