$(document).ready(function () {
var qNum = 0;
var totalScore = 0;


	$(".button").on('click', function() {
		$('#q'+ qNum).hide();
		//console.log("#"+qNum);
		qNum += 1;
		$('#q'+ qNum).show();
		//console.log("#"+qNum);
		//console.log(this.id);
		if(this.id == "correct") {
			totalScore += 20;
		};
		if(qNum == 4) {
			finish(totalScore);
			//console.log(totalScore);
		};
	});

	function finish(score) {
		$(".score").show();
		$(".score").html("<p>congrats, you scored a "+score+" on this quiz</p>");
	};

});


/*counter = 
total score =

while question exists:
function show question
if answer is x, add to total score, else don't add points
counter ++*/
