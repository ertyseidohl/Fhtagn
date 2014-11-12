;(function(exports) {

// Constants
var C = {
	STATEMENT : "statement",
	QUESTION : "question",
	NARRATOR : "Narrator",
}

exports.SCRIPT_START = "root";

exports.SCRIPT = {
	root : {
		//exists just to kick off the game
		next : "intro_1"
	},
	intro_1 : {
		type : C.STATEMENT,
		speaker : C.NARRATOR,
		text : "Ah, welcome welcome. I see you're new here. We'll be walking you through your new job today. As a community manager, it's your job to find the truly crazy comments among the ones that just look crazy! Ha ha, people are sometimes so strange.",
		next : "intro_2"
	},
	intro_2 : {
		type : C.STATEMENT,
		speaker : C.NARRATOR,
		text : "Why don't you try. Here's a random sampling of comments from a YouToob video. Just go ahead and select the comment by a worshipper of The Dark One.",
		next : "question_1"
	},
	question_1 : {
		type : C.QUESTION,
		speaker : C.NARRATOR,
		options : [
			{
				user : "asdfxjck",
				text : "what the fuck is the eighties, some kind of cheese candie ? ? ? ?",
				next : "question_1_wrong",
				correct : false
			},
			{
				user : "JOHNJONH",
				text : "iphone is a garbage phone, its signel so weak,it drops lots of my calls,so i throw in lake,i hate appleproducts",
				next : "question_1_wrong",
				correct : false
			},
			{
				user : "asianchkkkk",
				text : "You have a secret crush! Paste this message into 8 other comment sections to learn who loves you!",
				next : "question_1_wrong",
				correct : false
			},
			{
				user : "Cthulu Worshipper",
				text : "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!",
				next : "question_1_right",
				correct : true
			}
		]
	},
	question_1_right : {
		type : C.STATEMENT,
		speaker : C.NARRATOR,
		text : "Very good! I'm quite impressed. Nearly 80% of candidates for this position fail that question. It's a little more difficult sometimes when the Acolyte of the Unholy Terror speaks in code. Try again:",
		next : false //TODO
	},
	question_1_wrong : {
		type : C.STATEMENT,
		speaker : C.NARRATOR,
		text : "Hmm, that's actually a real-life YouToob comment. Why don't you try again...",
		next : false //TODO
	}
};

})(window);
