
// call method
/*
let nameObj = {
	name: "Tony"
}

let PrintName = {
	name: "steve",
	sayHi: function (age) {
		console.log(this.name + " age is " + age);
	}
}

PrintName.sayHi.call(nameObj, 42);*/

// bind method
/*
let nameObj = {
	name: "Tony"
}

let PrintName = {
	name: "steve",
	sayHi: function () {

		// Here "this" points to nameObj
		console.log(this.name);
	}
}

let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();*/

let nameObj = {
	name: "Tony"
}

let PrintName = {
	name: "steve",
	sayHi: function (...age) {
		console.log(this.name + " age is " + age);
	}
}
PrintName.sayHi.apply(nameObj, [42]);




