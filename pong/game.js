function Game(canvas) {
	var self = this

	this.context = canvas.getContext("2d")
	this.width = canvas.width
	this.height = canvas.height

	this.keyStates = {}
	$(canvas).on('keydown keyup', function(e) {
		var keyName = Game.keyNames[e.which]
		if (keyName) {
			isPressed = e.type === 'keydown'
			self.keyStates[keyName] = isPressed
			e.preventDefault()
		}
	})
}

Game.keyNames = {
	32: 'space',
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down'
}

Game.prototype.start = function() {
	var self = this

	var fps = 60
	var interval = 1000 / fps
	setInterval(function() {
		self.update()
		self.draw()
	}, interval)
}

Game.prototype.update = function() {
	this.entities.forEach(function(entity) {
		if (entity.update) {
			entity.update()
		}
	})
}

Game.prototype.draw = function() {
	var self = this

	this.entities.forEach(function(entity) {
		if (entity.draw) {
			entity.draw(self.context)
		}
	})
}

