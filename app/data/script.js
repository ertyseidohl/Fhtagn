;(function(exports) {

// Constants
var C = {
  STATEMENT : "statement",
  QUESTION : "question",
  RESPONSE : "response",
  NARRATOR : "Narrator",
}

exports.SCRIPT_START = "root";

exports.SCRIPT = {
  root : {
    //exists just to kick off the game
    next : "intro_1"
  },
  loss : {
      type : C.STATEMENT,
      speaker : C.NARRATOR,
      text: "YOU LOSE.",
      next: "intro_1"
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
        user : "mystreechkkkk",
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
    type : C.RESPONSE,
    speaker : C.NARRATOR,
    text : "Very good! I'm quite impressed. Nearly 80% of candidates for this position fail that question. It's a little more difficult sometimes when the Acolyte of the Unholy Terror speaks in code. Try another:",
    next : "question_2"
  },
  question_1_wrong : {
    type : C.RESPONSE,
    speaker : C.NARRATOR,
    text : "Hmm, that's actually a real-life YouToob comment. Why don't you try again...",
    next : "question_1"
  },
  question_2 : {
    type : C.QUESTION,
    speaker : C.NARRATOR,
    options : [
      {
        user : "nontheistis",
        text : "why isnt the sun the most dangerous place on earth",
        next : "question_2_wrong",
        correct : false
      },
      {
        user : "TheDarkOneComes",
        text : "Can This Help U Life Happy Underwater?",
        next : "question_2_right",
        correct : true
      },
      {
        user : "McGeeGeeGee",
        text : "this music makes me want to kick my cat",
        next : "question_2_wrong",
        correct : false
      },
      {
        user : "gollumcorner",
        text : "Hahahaha holy shit this is SO funny. She said they were moving too fast and they were literally moving fast!!! and then he said he wished he saw the signs and then he got HIT BY SIGNS lol. And the they DIED!!!",
        next : "question_2_wrong",
        correct : false
      }
    ]
  },
  question_2_right : {
    type : C.STATEMENT,
    speaker : C.NARRATOR,
    text : "Excellent! You could probably tell by the username, or the fact that the comment was an initialism for 'Cthulu'. It looks like you're going to be a natural at this job. Why don't you go ahead and get started on the queue. I'll be here to check in on your progress.",
    next : "intro_1"
  },
  question_2_wrong : {
    type : C.STATEMENT,
    speaker : C.NARRATOR,
    text : "Hmm, that's actually a real-life YouToob comment. Why don't you try again...",
    next : "question_2",
    animate: "test-animate"
  }
};

})(window);
