const Pet = require('../src/pet');


it('returns a new object', () => {
  expect(new Pet('Fido')).toBeInstanceOf(Object);
});
it('sets the name property', () => {
  const pet = new Pet('Fido');
  expect(pet.name).toEqual('Fido');
});


it('gives the pet an age of 0', () => {
  const pet = new Pet('Fido');
  expect(pet.age).toEqual(0)
});

it('checks if the age has increased by 1', () => {
  const pet = new Pet('Fido');

  pet.growUp();

  expect(pet.age).toEqual(1)
});

it('give the pet an initial hunger of 0', () => {
  const pet = new Pet('Fido');
  expect(pet.hunger).toEqual(0)
});


it('checks if the hunger has increased by 5', () => {
  const pet = new Pet('Fido');

  pet.growUp();

  expect(pet.hunger).toEqual(5);
});

it('gives my pet a fitness level of 10', () => {
  const pet = new Pet('Fido');
  expect(pet.fitness).toEqual(4);
});

it('checks if the fitness has decreased by 3', () => {
  const pet = new Pet('Fido');

  pet.growUp();

  expect(pet.fitness).toEqual(1);
});
describe('fitness gone up by 4', () => {
it('checks the fitness has gone up by 4', () => {
  const pet = new Pet('Fido');
  const startingFitness = pet.fitness;

  pet.walk();

  expect(pet.fitness).toBe(startingFitness + 4);
});
});
describe('fitness should never go above 10', () => {
  it('checks fitness hasnt surpassed 10', () => {
    const pet = new Pet('Fido');
    for (let walk = 0; walk < 5; walk++) {
      pet.walk();
    }
    expect(pet.fitness).toEqual(10);
  });
});

