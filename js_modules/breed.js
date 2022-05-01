export class Breed {
  constructor(newBreedName) {
    this.setBreedName(newBreedName);
  }

  getBreedName() {
    return this.breedName;
  }

  setBreedName(newBreedName) {
    this.breedName = newBreedName;
  }
}
