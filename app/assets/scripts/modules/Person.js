function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("Hello! I'm " + this.name + ". My color is " + this.favoriteColor + "!");
	}
}