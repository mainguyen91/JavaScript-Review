//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

//code here
function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

//code here
function Person(name, age, height, gender) {
  return {
    name: name,
    age: age,
    height: height,
    gender: gender
  }
}

//Create a animal array and a person array.

//code here
var Animals = [];
var Persons = [];
//Create two instances of Animal and push those into your animal array

//code here
Animals.push(new Animal('mouse', 'Mickey', 2, 'black', ['cheese', 'sandwich']));
Animals.push(new Animal('duck', 'Donald', 2, 'white', ['pizza', 'hotdog', 'quiche']));

//Create two instances of person and push those into your person array.

//code here
Persons.push(new Person('Mai', 27, '157cm', 'female'));
Persons.push(new Person('John', 20, '160cm', 'male'));

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

//code here
Animal.prototype.eat = function () {
  var randomFood = Math.floor(Math.random() * this.food.length);
  alert(this.name + ' ate ' + this.food[randomFood]);
}
let dog = new Animal("dog", "Goofy", 2, "beige", ["hamburger", "watermelon", "fries"]);
let random = dog.eat(dog.food);
alert(dog.name.concat(" ate ").concat(random));

//At this point, if we wanted to add something to every istance of person could we?
//Yes or no? and why or why not?
//We cannot. Cannot run prototype method on Person. 
//The objects are created under a general class, they do not have their own class.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
It create a new object of that type.
  2) What's a good way to describe the keyword 'this'
It refers to the object in the function
  3) Can a normal function which creates an object and then returns that object use the prototype?
No. The objects are created under a general class, they do not have their own class.
  4) What happens if you forget to use 'new' when calling a constructor?
No new object can be created.
*/