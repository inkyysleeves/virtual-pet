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
    const maximumFitness = 10;
    if (this.fitness >= maximumFitness) {
      return this.fitness = 10;
    }
  },
  
    feed: function () {
      this.hunger -=3;
      const minimumHunger = 3;
      if (this.hunger <= minimumHunger) {
        return this.hunger = 3
      }
    }
};


module.exports = Pet;