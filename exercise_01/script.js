var me = {
	name: "Julianna", 
	age: 31
};

me.age += 1;
me.introduce = function () {
	console.log("My name is " + this.name + " and I am " + this.age + " years old.");
};

me.introduce();