;(function(exports) {

// Constants
var C = {
  STATEMENT : "statement",
  QUESTION_MULTIPLE : "question_multiple",
  QUESTION_TEXT : "question_text",
  RESPONSE : "response",
  NARRATOR : "The Narrator",
  JOHANSEN : "Johansen"
}

exports.SCRIPT_START = "root";

exports.SCRIPT = {
  root : {
    //exists just to kick off the game
    next : "intro"
  },
  loss : {
      type : C.STATEMENT,
      speaker : C.NARRATOR,
      text: "YOU LOSE.",
      next: "intro_1"
  },
  intro : {
    type : C.STATEMENT,
    speaker : C.NARRATOR,
    text : [
      "Ah, welcome welcome. I see you're new here.",
      "We'll be walking you through your new job today.",
      "As a community manager, it's your job to find the truly crazy comments among the ones that just look crazy!",
      "Ha ha",
      "People are sometimes so strange.",
      "Why don't you try. Here's a random sampling of comments from a YouToob video. Just go ahead and select the comment by a worshipper of The Dark One."
    ],
    next : "question_a"
  },
  question_a : {
    type : C.QUESTION_MULTIPLE,
    speaker : C.NARRATOR,
    options : [
      {
        user : "asdfxjck",
        text : "what the fuck is the eighties, some kind of cheese candie ? ? ? ?",
        next : "question_a_wrong",
        correct : false
      },
      {
        user : "JOHNJONH",
        text : "iphone is a garbage phone, its signel so weak,it drops lots of my calls,so i throw in lake,i hate appleproducts",
        next : "question_a_wrong",
        correct : false
      },
      {
        user : "mystreechkkkk",
        text : "You have a secret crush! Paste this message into 8 other comment sections to learn who loves you!",
        next : "question_a_wrong",
        correct : false
      },
      {
        user : "Cthulu Worshipper",
        text : "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!",
        next : "question_a_right",
        correct : true
      }
    ]
  },
  question_a_right : {
    type : C.RESPONSE,
    speaker : C.NARRATOR,
    text : "Very good! I'm quite impressed. Nearly 80% of candidates for this position fail that question. It's a little more difficult sometimes when the Acolyte of the Unholy Terror speaks in code. Try another:",
    next : "question_b"
  },
  question_a_wrong : {
    type : C.RESPONSE,
    speaker : C.NARRATOR,
    text : "Hmm, that's actually a real-life YouToob comment. Why don't you try again...",
    next : "question_a"
  },
  question_b : {
    type : C.QUESTION_MULTIPLE,
    speaker : C.NARRATOR,
    options : [
      {
        user : "nontheistis",
        text : "why isnt the sun the most dangerous place on earth",
        next : "question_b_wrong",
        correct : false
      },
      {
        user : "TheDarkOneComes",
        text : "Can This Help U Life Happy Underwater?",
        next : "question_c_intro",
        correct : true
      },
      {
        user : "McGeeGeeGee",
        text : "this music makes me want to kick my cat",
        next : "question_b_wrong",
        correct : false
      },
      {
        user : "gollumcorner",
        text : "Hahahaha holy shit this is SO funny. She said they were moving too fast and they were literally moving fast!!! and then he said he wished he saw the signs and then he got HIT BY SIGNS lol. And the they DIED!!!",
        next : "question_b_wrong",
        correct : false
      }
    ]
  },
  question_b_wrong : {
    type : C.STATEMENT,
    speaker : C.NARRATOR,
    text : "Hmm, that's actually a real-life YouToob comment. Why don't you try again...",
    next : "question_b",
    animate: "test-animate"
  },
  question_c_intro : {
    type : C.STATEMENT,
    speaker : C.NARRATOR,
    text : [
      "Excellent! You could probably tell by the username, or the fact that the comment was an initialism for 'Cthulu'.",
      "It looks like you're going to be a natural at this job. Why don't you go ahead and get started on the queue. I'll be here to check in on your progress.",
    ],
    next : "question_c_intro"
  },
  question_c: {
    options: [
      {
        user: "Hamfistapple",
        text : "The reason Nye lost the debate so bad was that he was relying on information from gay atheist researchers, while Ham got his information from the infallible unchanging word of God! Atheist research journals are really gay porn magazines, which is why these disgusting magazines are only found in the states of California, New York City, and France."
      },
      {
        user : "SmithRayom8889920",
        text : "Actually, recorded at the white house, November 6th, 2012. &ldquo;Ha ha ha ha! They voted me back in for another 4 years!&rdquo;",
      },
      {
        user : "gumking",
        text: "you know its actually really bad at tablets"
      },
      {
        user : "cth_lh_",
        text : "he waits dreaming in his house, under the black waters"
      }
    ]
  },
  question_d_intro : {
    speaker : C.NARRATOR,
    text : [
      "Ah, that one was easy.",
      "This next one requires a bit more arcane knowledge.",
      "Good luck!"
    ]
  },
  question_d : {
    options : [
      {
        user : "swaghitler420",
        text : "i give you a thumbs up for your commit and it was not counted. Jew cotnrol too much media, i cant even like someone free speech"
      },
      {
        user : "ghatanothoa",
        text : "oh my god i watched this and it turned me into a mummy"
      },
      {
        user : "WashingtonBackpacker",
        text : "ok there was a wild fox that went around eating out peoples eyeballs. it even ate my grandmas. so we tied up a 5 year old as a trap, and as it was getting eaten , i threw a knife atit and killed it and made it into a pelt"
      },
      {
        user : "ruby12093812",
        text : "Ummm I thought this was funny anyways I did laugh &lt;&lt;&lt;&lt;&lt;;;;;...;)"
      }
    ]
  },
 question_e_intro : {
    speaker : C.NARRATOR,
    text : [
      "That's right!",
      "Ghatanothoa is the firstborn of Cthulhu.",
      "Gazing upon his amorphous form petrifies you, turning your skin thick like leather.",
      "Ha ha ha, isn't that weird."
    ]
  },
  question_e : {
    options : [
      {
        user : "1998tomisme888",
        text : "they are animel they don know what we talk thats why the whale kill its trainer",
      },
      {
        user : "WUT208",
        text : "hemp oil also cures cancer"
      },
      {
        user : "KnowlegeSaidGod",
        text : "anyone who would trust the medical industry in this country which has not cured shit since polio is clearly miss guided and ignorant"
      },
      {
        user : "~~motherhydra~~",
        text : "wtf is with this GOO like seriously message me boys and i will show you"
      }
    ]
  },
  question_f_intro : {
    speaker : C.NARRATOR,
    text : [
      "Hmm, good catch!",
      "GOO probably stands for Great Old Ones.",
      "And Mother Hydra is kin of Cthulhu, overgrown after thousands of years of ruling from her watery lair.",
      "Here you can see an attempt to recruit young men into her black cult."
    ]
  },
  question_f : {
    options : [
      {
        user : "sweetmarie322",
        text : "i luv thesong butim like wtf with the vid?"
      },
      {
        user : "shubniggurath",
        text : "hahaha awhat a black goat ? they must have a thousand babies"
      },
      {
        user : "everlastinggoldsin",
        text : "... hi there ... in ma opinion ... GOLD is supposingly and historically the shiniest metal ever ... either in terms of what its worth ... or its historical presence as the shinies durin all Eras ... with all respectt its ma humble opinion ... ds"
      },
      {
        user : "buysme000",
        text : "cap and trade oculdntpas so obama will pass it with the e.p.a. hows that for a dmeocracy"
      }
    ]
  },
  question_g_intro : {
    speaker : C.NARRATOR,
    text : [
      "You got it!",
      "Excellent!",
      "Shub-Niggurath is often known as The Black Goat of the Woods with a Thousand Young",
      "Whom the men of the jungle have long since deserted",
      "Who is now unworshipped and alone.",
      "Great catch there, but the next one is really tricky."
    ]
  },
  question_g : {
    options : [
      {
        user : "edwardpretorius",
        text : "haha i love WOW especially i love azathoth"
      },
      {
        user : "hempoil616",
        text : "yay u maded fun of  fred"
      },
      {
        user : "333timetravler333",
        text : "hav u gotten out of high skool yet? if so r u workin or studyin? did u go 2 law skool or r u an architect? did u mov from the states or ru still livin in that dump? did u fix ur grammar issue? lol"
      },
      {
        user : "christ416416",
        text : "As Satan takes control of all governments. The Anti-Christ rides the ten headed Hydra like in the movie The Omen II the EU and NAU are just two of the heads. Next WWIII then the Great Tribulation. Isn't that how the prophecy goes?",
        no_seriously : "that's a real comment"
      }
    ]
  },
  question_h_intro : {
    speaker : C.NARRATOR,
    text : [
      "Great! You're a natural.",
      "I'm glad your sharp eye noticed that Edward Pretorius is a Lovecraftian character",
      "and while &ldquo;Azeroth&rdquo; is the name of the land in World of Warcraft, Azathoth is the boundless daemon sultan",
      "whose name no lips dare speak aloud",
      "and who gnaws hungrily in inconceivable, unlighted chambers beyond time and space amidst the muffled, maddening beating of vile drums and the thin monotonous whine of accursed flutes.",
      "Oh, sorry.",
      "Moving on."
    ]
  },
  question_h : {
    options : [
      {
        user : "reeferee",
        text : "SMOKE WEED 410 ERRY DAY"
      },
      {
        user : C.JOHANSEN,
        text : "You should know that " + C.NARRATOR + " is using this tool to recruit members for his cult. You should stop while you still can!"
      },
      {
        user : "el_diablo",
        text : "obama is ruining america he makes the taxes IMPEACH OBAMA KICK HIM OUT"
      },
      {
        user : "Hypnos1929",
        text : "You're all missing the point. Drugs are hubris, not holy. You praise this &ldquo;420&rdquo; but do you understand it? The only true path is that of the Dreamer – Lennon was not the only one."
      }
    ]
  },
  question_i_intro : {
    speaker : C.NARRATOR,
    text : [
      "Ha ha ha, how did that get in there.",
      "Usually we have filters for that kind of thing.",
      "Why don't you go ahead and report that kind of content when you come across it, okay?"
    ]
  },
  question_i : {
    options : [
      {
        user : "oh_ryleh",
        text : "I only believe in really old gods"
      },
      {
        user : "TurtleSkate69",
        text : "I showed this to my dad ... now he's my mom"
      },
      {
        user : "gorthoki",
        text : "FIRST YOLO SWAG"
      },
      {
        user : C.JOHANSEN,
        text : "Stop now! They're only becoming more and more powerful! Walk away!"
      }
    ]
  },
  question_i_report : {
    speaker : C.NARRATOR,
    text : [
      "Ah, this crap still shows up from time to time.",
      "Thanks for reporting it."
    ]
  },
  question_j_intro : {
    speaker : C.NARRATOR,
    text : [
      "Hmm, there was more of that crap about our good work here, keeping those pesky Cthulhu worshippers out of otherwise fine YouToob comments.",
      "Just make sure to report them when it happens."
    ]
  },
  question_k : {
    options : [
      {
        user : C.JOHANSEN,
        text : "TODO"
      },
      {
        user : "Dagon371",
        text : "the ancient ones always had better, why you think still name the animal in latin???"
      },
      {
        user : "fkljeio8988",
        text : "The Goverment says no smoking in public we respect the reason n stop Goverment says no smoking in cars w young 1s in it so we stop Goverment says pay 4 the debt they made so we pay Goverment says buy bag tags 4 our garbage so we pay facebook is a non profit organization where we can chat w friends n b$&amp;#h about life n escape from the prblms the Goverment gives us keep facebook free @ least I'll have 1 thing 2 b proud of we r a free Country after all unless the Goverment wants 2 screw that up 2"
      },
      {
        user : "hanahah1977",
        text : "he is not in the balon he never vear﻿ in the balon he whas foun in a boks in heas ha"
      }
    ]
  },
  question_l_intro : {
    speaker : C.NARRATOR,
    text : [
      "Excellent!",
      "Unlike the aeons that pass in the blink of an eye for the elder gods, our work here must progress quickly.",
      "Our analysts should strive to work fast. Let's see how well you do under the pressure of time."
    ]
  },
  question_l : {
    options : [
      {
        user : "Pastor Todd Lerfanzler",
        text : "What do I see here? Three of the numbers you got when approaching the jackpot where &ldquo;666&rdquo;. 666 = the devil. Your win was influenced by Satan to encourage the public into thinking that you are a &ldquo;God&rdquo;. Well, I'm going to say it here and now; you're not. You're a fucking loser. Pastor Todd over an' out."
      },
      {
        user : "galgat",
        text : "at﻿ first i thught yoy were sitting with yur knees in front of u but it seems it's just thine boobs"
      },
      {
        user : C.JOHANSEN,
        text : "Seriously, stop! Stop! STOP! " + C.NARRATOR.toUpperCase() + " IS ONE OF THEM. " + C.NARRATOR.toUpperCase() + " IS ONE OF THEM."
      },
      {
        user : "ERT+HPL",
        text : "Nyan Cat? More like Nyarlathotep Cat, amirite???"
      }
    ]
  },
  /*
    (the screen is slowly turning darker and starting to wobble around a la amnesia)
    (In the following, every answer is acceptable. The narrator gives the *next line* of text as an explanation)
  */
  question_m : {
    options : [
      {
        user : "theirinmybrain",
        text : "one off uss"
        /*That's right! Three words with three letters! They represent the three elder gods worshipped by the Deep Ones: Cthulhu, Mother Hydra, and Father Dragon.*/
      },
      {
        user : "GhostHog28",
        text : "That is one ugly poodle..."
        /*That's right! GhostHog is an anagram of Shoggoth. Be wary of shoggoths - they are among the more dangerous of posters.*/
      },
      {
        user : "OldYeller563",
        text : "LOL and then it was all BOOM!!! Like this 4 HOCKY!!!"
        /*Oh, yes. OldYeller is probably a reference to Hastur, The Feaster from Afar, a yellow, shriveled, flying monstrosity with tentacles tipped with razor-sharp talons that can pierce a victim's skull and siphon out the brain*/
      },
      {
        user : C.JOHANSEN,
        text : "Look, I'm one of this game's programmers. The game was supposed to be a joke - this isn't even in the script."
        /*Hmm... yes, I can see how you would think that. This Johansen fellow is clearly paranoid. I'm not sure how this even got in there... I certainly don't remember putting it in...*/
      }
    ]
  },
  /*(letters begin switching themselves around)*/
  question_n_intro : {
    user : C.NARRATOR,
    text : [
      "You're doing good work, finding the cultists.",
      "It is imperative that you continue."
    ]
  },
  question_n : {
    options : [
      {
        user : C.JOHANSEN,
        text : "Listen to me, the script keeps changing itself. If you don't believe me, check the actual script - it's in the game folder."
      },{
        user : C.JOHANSEN,
        text : "All the other game writers disappeared shortly after we published. As did all the beta testers. Look, you're the only one left."
      },{
        user : C.JOHANSEN,
        text : "I'm not sure what happened, but it seems like the game became... self-aware at some point in development. I'm not sure how, exactly."
      },{
        user : C.JOHANSEN,
        text : "All I know is this: You're too far in, now. You can't go back, you can't leave; it will find you. It will hunt you down. If you want to live, you have to win."
      }
    ]
  },
  question_o_intro : {
    user : C.NARRATOR,
    text : [
      "This " + C.JOHANSEN + "'s comments seem to be very paranoid.",
      "By the way, we run into people like that from time to time.",
      "Best advice is just to ignore them. Don't let it get to you, you know?",
      "Anyway, I cannot overstate the importance of our work.",
      "It is absolutely critical that you continue."
    ]
  },
  /*(entire words fade in and out. blood begins to drop from the top of the screen)*/
  question_o : {
    options : [
      {
        user : C.JOHANSEN,
        text : "You have to win. Please, for the love of all that is holy, win the game."
      },
      {
        user : C.JOHANSEN.substring(0,5) + "ssoth",
        text : "Please, you vugtlagln help R'lyeh – you n'gha-ghaa the only one left!"
      },
      {
        user : "gloth" + C.JOHANSEN.substring(2,6) + "ssoth",
        text : "I don't ulnagr Yuggoth Farnomi help ilyaa Shaggor please fhayak vulgtmm, Hastur sf'tagn..."
      },
      {
        user : "Shub'gloth" + C.JOHANSEN.substring(2,6) + "ssoth",
        text : "Shub'Glothanssoth : IÄ, IÄ, CTHULHU FHTAGN! CTHULHU FHTAGN! PH'NGLUI MGW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN!"
      }
    ],
  },
  /*(the screen wobbles strongly. Each of the answers is in larger font than the last.)*/
  question_p_intro : {
    options : [
      {
        user : "",
        text : "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!"
      },
      {
        user : "",
        text : "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!"
      },
      {
        user : "",
        text : "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!"
      },
      {
        user : "",
        text : "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!"
      }
    ]
  },
  end : {
    user : "",
    text : "TODO: fade to black - game over"
  }
};

})(window);

/*

question_x : {
  options : [
    {
      user : "william rivera",
      text : "YEAH MY CAPSLOCK IS BROKEN BUT ONLY IN YOUR MIND"
    },
    {
      user : "curtis peers",
      text : "When the legion comes Medan will need to protect and we won't know what to do. This will be perfect timing for Medivh to truly atone for his/sargeras' sins"
    },
    {
      user : "Chris Rice",
      text : "good job brother,evil is evil,he was part of killing the last true president of america.hell has a place for him.rest in peace john kennedy,and lee oswald."
    },
    {
      user : "Howard 'Lovemachine' Phillips",
      text : "Hello every1 awesome videos here btw if anyone wants to download books 4 free like The Doom That Came To Sarnath click on my name see ya soon xoxo"
    }
  ]
},
question_x_correct : {
  speaker : C.NARRATOR,
  text : "Good job! The Doom That Came To Sarnath is a Lovecraft short story about the ancient land of Mnar, and the hatred and vengeance which turned it to ashes after a thousand years."
},
question_xa : {
  options : [
    {
      user : "Pastor Todd Lerfondler",
      text : "What do I see here? Three of the numbers you got when approaching the jackpot where "666". 666 = the devil. Your win was influenced by Satan to encourage the public into thinking that you are a "God". Well, I'm going to say it here and now; you're not. You're a fucking loser. Pastor Todd over an' out. With faith, Pastor Todd L. Fondler"
      // is this a duplicate?
    },
    {
      user : "Luke Fearnley",
      text : "FUCK EVERYONE FUCKING ARBITER HOLY SHITE AND ONION SOUP"
    },
    {
      user : "monkeyplayer258",
      text : "HEY HEY HEY, come into my shed! we serve moist and yummy brains! come to fluttershys brain diner and say derpytoaster to get the rainbow dash special!"
      //hey hey hey
    },
    {
      user : "Dagons Shadow",
      text : "ENGLISH TRANSLATION OF THE LYRICS: Look to the future, not to the past/This world is short and will not last/Behind is done/Ahead's yet to come/The stone shall call the chosen one./Through nameless ooze the god shall crawl/Transforming earth to unhallowed halls/The god shall rise/Beware his cries/Go forth, in fear, and say your goodbyes."
    }
  ]
},
question_xb : {
  options : [
    {
      user : "Abba Okoro",
      text : "It's Government holding back medicine. #justsaying"
    },
    {
      user : "BladeOfLight16",
      text : "&ldquo;If men were angels, no government would be necessary.&rdquo; What's wrong with communism is that it makes the assumption that humans are capable of reaching such a point because they are merely products of their environment. I would strongly disagree and argue that humans are fundamentally flawed. Marx was certainly wrong in just about every prediction he made based on that assumption."
    },
    {
      user : "Zartymil",
      text : "THANK YOU DUDE! RIGHT IN THE FEELINGS DUDE! RIGHT THERE! I FEEL GOOD DUDE"
    },
    {
      user : "RlyRlyOld",
      text : "Read the fucking description, asshole, it's a GRIMOIRE not a fucking MONSTER MANUAL and it's pronounced "Wermis" as in "of the Worm" not like fucking vermin DON'T YOU KNOW YOUR FUCKING LATIN jesus christ you sound like such a fucking joke you obviously don't know what the fuck you're talking about I hope you get burned at the stake"
    }
  ]
},
question_xb_correct : {
  speaker : C.NARRATOR,
  text : "(Well that certainly had some fire and brimstone in it! De Vermis Mysteriis (pronounced &ldquo;De Wermis Mysteriis&rdquo; in modern/Oxford Latin) is a grimoire written by the alchemist, necromancer, and reputed mage Ludwig Prinn, who was burned at the stake at the height of the witch trials in Brussels.)"
},
question_xc : {
  options : [
    {
      user : "Alex the Lion",
      text : "How is there 31 million views when youtube doesnt even exist?"
    },
    {
      user : "Emily Doolittle",
      text : "I think, therefore I am reminds me of solipsism."
    },
    {
      user : "greenechri",
      text : "How the fuck, when the fuck, and why the fuck did I get here?@!?!? i just wanted to make some homemade cheesecake people, >.>"
    },
    {
      user : "XxXFallingInLovecraftXxX",
      text : "yo i watched this video and saw a fuckin elephant-sized bird fly straight out of the screen into my room, it bit me with its horse-head and the darkness consumed me, the fucked up thing is i dont even own a computer"
    }
  ]
},
question_xc_correct : {
  speaker : C.NARRATOR,
  text : "Yep! Sounds like this user is describing a Shantak, a huge, scaly, birdlike creature from the nether realms – they're clearly trying to recruit other users into the cult!"
},
question_xd : {
 options : [
  {
    user : "james pryor",
    text : "i have a question. is Shrek a religion?"
  },
  {
    user : "john trollston",
    text : "ahem!... PFRTRFT oops, draw cubes draw cubes draw cudes draw cubes."
  },
  {
    user : "Dopest",
    text : "Everyone please pray I'm not trying to be a buzz kill but in telling you it will help a lot just like it helped me please its for you just believe in Jesus to receive help.Thank you."
  },
  {
    user : "JustElderThings",
    text : "the native americans had it right pray to the stones and to the bones and you will be saved the sentinels are watching"
  }
 ]
},
question_xd_correct : {
  speaker : C.NARRATOR,
  text : "Sentinel Hill is the site of an ancient stone altar where profane rituals were performed at the birth of the Dunwich Horror. Good catch!"
},
question_xe : {
  options : [
    {
      user : "jenna bartley",
      text : "I told my mother this and she told me i was wrong and that I shouldn't listen to people who tell me these things. SCIENTISTS believed up until the 80's that babies didn't need anesthesia during surgery. clearly people know better know. why is this any different?﻿"
    },
    {
      user : "mariana Narvaez",
      text : "I had that rare condition it was not pleasant"
    },
    {
      user : "autumn laymy",
      text : "when she said not master baiting regularly is it healthy to masterbait",
    },
    {
      user : "Old Whateley",
      text : "ALL'A YEW DAMN PRO-LIFERS ARE TH' REASON THIS WORLD IS DESCENDING INTO AN ABYSSAL HELL! MY DAUGHTER SHOULDA KNOWN BETTER THAN T' GET PREGNANT IN THE FIRST PLACE, NOW THAT HORRIBLE LITTLE BASTARD CHILD IS RUNNIN' WILD ON TH' WHOLE TOWN! " 
    }
  ]
},
question_xe_correct : {
  speaker : C.NARRATOR,
  text : "That's right! The Wizard Whateley is a weak-chinned, aged man, obsessed with rotting ancient books about the Great Old Ones. His albino daughter Lavinia summoned Yog-Sothoth and was impregnated by Him, giving birth to twins – one human, one decidedly not."
},
question_xf : {
  options : [
    {
      user : "Jimmy Quick",
      text : "TWO WORDS - woman lie. Learn them and be the master of your own existence. Fail this lesson and become a slave to stupidity for your entire life. Signed, Someone who knows"
    },
    {
      user : "Jessica Hoover",
      text : "I think I'm in love with you. You do what I want to do for a living. you're literally my idol."
    },
    {
      user : "Anthony Reich",
      text : "In a video tell me how the helicopter you have over a million subscribers talking about the vagina"
    },
    {
      user : "William Dyer",
      text : "This video takes place at the mountains of madness – you can tell by the pixels, I have seen such things before"
    }
  ]
},
question_xf_correct : {
  speaker : C.NARRATOR,
  text : "That's right! William Dyer is the narrator of At The Mountains of Madness, a Lovecraftian novel."
}

*/
