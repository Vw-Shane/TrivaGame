$(document).ready(function() {

	var Questions = ["First","Second","Third","Fourth"];
	var Pictures  = ["1st","2nd","3rd","4th"];
	var RightAns  = ["First","Second","Third","Fourth"];
	var WrongAns  = ["Random","Bs"];
	var RandomArr = Math.floor((Math.random()*Questions.length));
					

	$("#Questions").html("play");
	if (0==0) {// this if statement is to make sure game hasnt started yet //
		//will repalce with better true statment//
	$("#Questions").on("click", function() {
		console.log(Questions[RandomArr])
		console.log(Pictures[RandomArr])
		console.log(RightAns[RandomArr])


	});
	};
});