const Pet = require('../src/pet');

describe('constructor', () => {
it('returns a new object', () => {
  expect(new Pet('Fido')).toBeInstanceOf(Object);
 });
 it('sets the name property', () => {
   const pet = new Pet('Fido');
   expect(pet.name).toEqual('Fido');
 });
 describe('pets age', () => {
it('gives the pet an age of 0', () =>{
  const pet = new Pet('Fido');
expect(pet.age).toEqual(0)
 });
describe('pets all growing', () => {
 it('checks if the age has increased by 1', () => {
   const pet = new Pet('Fido');

   pet.growUp();

   expect(pet.age).toEqual(1)
         });
      });
   });
});