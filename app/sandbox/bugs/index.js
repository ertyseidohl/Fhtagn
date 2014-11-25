'use strict';
var TURN_CENTER = 0;
var TURN_LEFT = -1;
var TURN_RIGHT = 1;

var WINDOW_SIZE_BUFFER = 100;

var ScreenBug = function(ctx) {
	this.ctx = ctx;
	this.pos = {
		x : 0,
		y : 0
	};
	this.speed = 2;
	this.sprites = [];
	this.loaded = 0;
	this.currentSprite = 0;
	this.rotation = 0;
	this.turn = 0;
	this.stateMachine = {
		explore : function() {
			this.turn = (function(turn){
				if (Math.random() < 0.9) return turn;
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
	};
	this.isOnStage = function() {
		return (this.pos.x > -WINDOW_SIZE_BUFFER
			&& this.pos.x < this.ctx.canvas.width + WINDOW_SIZE_BUFFER
			&& this.pos.y > -WINDOW_SIZE_BUFFER
			&& this.pos.y < this.ctx.canvas.height + WINDOW_SIZE_BUFFER
		);
	}
	this.currentState = 'explore';
	this.load = function() {
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
	this.draw = function() {
		if (this.loaded < 2) {
			return false;
		}
		ctx.drawRotatedImage(this.sprites[this.currentSprite], this.pos.x, this.pos.y, this.rotation - Math.PI / 2);
		if (Math.random() > 0.9) {
			if (++this.currentSprite >= this.sprites.length) {
				this.currentSprite = 0;
			}
		}
	};
	this.update = function() {
		if (this.loaded < 2) {
			return false;
		}
		this.stateMachine[this.currentState].call(this);
		this.pos.x -= this.speed * Math.cos(this.rotation);
		this.pos.y -= this.speed * Math.sin(this.rotation);
	};
}

function drawRotatedImage(image, x, y, angle) {
	//via http://creativejs.com/2012/01/day-10-drawing-rotated-images-into-canvas/
	this.save();
	this.translate(x, y);
	this.rotate(angle);
	this.drawImage(image, -(image.width/2), -(image.height/2));
	this.restore();
}

var bugs = [];

document.addEventListener("DOMContentLoaded", function(event) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawRotatedImage = drawRotatedImage;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	var loop = function() {
		ctx.clearRect (0, 0, ctx.canvas.width, ctx.canvas.height );
		for (var i = 0; i < bugs.length; i++) {
			bugs[i].update();
			bugs[i].draw();
		}
		window.requestAnimationFrame(loop);
	}
	loop();
	document.getElementById('canvas').onclick = function () {
		var bug = new ScreenBug(ctx);
		bug.load();
		bugs.push(bug);
	};
});
