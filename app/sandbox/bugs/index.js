'use strict';

var ScreenBug = function(ctx) {

	this.ctx = ctx;
	this.pos = {
		x : 0,
		y : 0
	};
	this.speed = BUG_SPEED;
	this.sprites = [];
	this.loaded = 0;
	this.currentSprite = 0;
	this.rotation = 0;
	this.turn = 0;
	this.currentState = 'explore';
}

ScreenBug.prototype = {
	constants = {
		//Keep track of which way the bug is turning
		TURN_CENTER : 0,
		TURN_LEFT : -1,
		TURN_RIGHT : 1,
		//How far offscreen a bug can go before turning around
		WINDOW_SIZE_BUFFER : 100,
		//How fast do the bugs move?
		BUG_SPEED : 2,
		//What are the odds that a bug will change direction?
		BUG_TURN_CHANCE : 0.9,
		//What are the odds that a bug will change sprite
		BUG_CHANGE_SPRITE_CHANCE : 0.1,
		//How many sprites are we loading?
		NUMBER_OF_SPRITES : 2
	},
	stateMachine : {
		explore : function() {
			this.turn = (function(turn){
				if (Math.random() < BUG_TURN_CHANCE) return turn;
				switch(turn) {
					case TURN_LEFT: return TURN_CENTER;
					case TURN_CENTER: return Math.random() > 0.5 ? TURN_LEFT : TURN_RIGHT;
					case TURN_RIGHT: return TURN_CENTER;
					default: return TURN_CENTER
				}
			})(this.turn);
			switch(this.turn) {
				case TURN_LEFT:
					this.rotation += Math.random() / 10;
					break;
				case TURN_RIGHT:
					this.rotation -= Math.random() / 10;
					break;
			}
			if (!this.isOnStage()) {
				this.currentState = 'get_visible';
			}
		},
		get_visible : function() {
			if (this.isOnStage()) {
				this.currentState = 'explore';
			}
			var desiredRotation = Math.atan2(
				this.pos.y - this.ctx.canvas.height / 2,
				this.pos.x - this.ctx.canvas.width / 2
			);
			this.rotation = desiredRotation;
		}
	},
	isOnStage : function() {
		return (this.pos.x > -WINDOW_SIZE_BUFFER
			&& this.pos.x < this.ctx.canvas.width + WINDOW_SIZE_BUFFER
			&& this.pos.y > -WINDOW_SIZE_BUFFER
			&& this.pos.y < this.ctx.canvas.height + WINDOW_SIZE_BUFFER
		);
	},
	update : function() {
		if (this.loaded < NUMBER_OF_SPRITES) {
			return false;
		}
		this.stateMachine[this.currentState].call(this);
		this.pos.x -= this.speed * Math.cos(this.rotation);
		this.pos.y -= this.speed * Math.sin(this.rotation);
	},
	draw : function() {
		if (this.loaded < NUMBER_OF_SPRITES) {
			return false;
		}
		ctx.drawRotatedImage(this.sprites[this.currentSprite], this.pos.x, this.pos.y, this.rotation - Math.PI / 2);
		if (Math.random() < BUG_CHANGE_SPRITE_CHANCE) {
			if (++this.currentSprite >= this.sprites.length) {
				this.currentSprite = 0;
			}
		}
	},
	load : function() {
		//load the images
		//TODO make this able to handle any number of sprites
		this.sprites[0] = new Image();
		this.sprites[0].src = "fly-1.png";
		this.sprites[1] = new Image();
		this.sprites[1].src = "fly-2.png";
		this.sprites[0].onload = function() {
			this.loaded++;
		}.bind(this);
		this.sprites[1].onload = function() {
			this.loaded++;
		}.bind(this);
	}
};

//keep track of all the bugs
var bugs = [];

// $(document).ready(...) but with no jquery
document.addEventListener("DOMContentLoaded", function(event) {
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.drawRotatedImage = function(image, x, y, angle) {
		//via http://creativejs.com/2012/01/day-10-drawing-rotated-images-into-canvas/
		this.save();
		this.translate(x, y);
		this.rotate(angle);
		this.drawImage(image, -(image.width/2), -(image.height/2));
		this.restore();
	};
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	//click on the canvas to add a new bug
	document.getElementById('canvas').onclick = function () {
		var bug = new ScreenBug(ctx);
		bug.load();
		bugs.push(bug);
	};
	var loop = function() {
		//clear the canvas at the beginning of each frame
		ctx.clearRect (0, 0, ctx.canvas.width, ctx.canvas.height);
		for (var i = 0; i < bugs.length; i++) {
			//update and draw (don't care about collisions)
			bugs[i].update();
			bugs[i].draw();
		}
		window.requestAnimationFrame(loop);
	}
	//Start the animationFrame loop
	loop();
});
