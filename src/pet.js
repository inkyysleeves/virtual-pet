function Pet(name, age, hunger, fitness) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 4;
};
Pet.prototype = {
  growUp: function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  },
  walk: function () {
    this.fitness += 4;
    if (this.fitness >= 10) {
      return this.fitness = 10;
    }
  }
};


module.exports = Pet;