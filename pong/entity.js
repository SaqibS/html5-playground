function Entity() {
	this.x = 0
	this.y = 0
	this.width = 0
	this.height = 0
	this.xVelocity = 0
	this.yVelocity = 0
}

Entity.prototype.update = function() {
	this.x += this.xVelocity
	this.y += this.yVelocity
}

Entity.prototype.draw = function(context) {
	context.fillStyle = '#fff'
	context.fillRect(this.x, this.y, this.width, this.height)
}

Entity.prototype.intersects = function(other) {
	return this.y + this.height > other.y
		&& this.y               < other.y + other.height
		&& this.x + this.width  > other.x
		&& this.x               < other.x + other.width
}
