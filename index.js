// Abstract Base class
class Animal {
  constructor(name) {
    if (
      (this.constructor == Animal) |
      (this.constructor == Invertebrate) |
      (this.constructor == Vertebrate) |
      (this.constructor == WarmBloodedVertebrate) |
      (this.constructor == ColdBloodedInvertebrate) |
      (this.constructor == ColdBloodedVertebrate)
    ) {
      throw new Error(`${this.constructor.name} should not be intialized`);
    } else {
      this.name = name;
    }
  }
  #sayName() {
    return this.name;
  }
  #sayPhylum() {
    return this.constructor.name;
  }
  greet() {
    console.log(`I am a ${this.#sayName()} from class ${this.#sayPhylum()}`);
  }
}
class Invertebrate extends Animal {
  hasBackbone = false;
}

class Vertebrate extends Animal {
  hasBackbone = true;
}
class ColdBloodedInvertebrate extends Invertebrate {
  bloodTemp = 'cold';
}

class WarmBloodedVertebrate extends Vertebrate {
  bloodTemp = 'warm';
}
class ColdBloodedVertebrate extends Vertebrate {
  bloodTemp = 'cold';
  layeggs = true;
}

// Initializable Animal Classes
class Arthropoda extends ColdBloodedInvertebrate {
  constructor(name, habitat, appendages, hasAntennae, canFly) {
    super(name);
    this.habitat = habitat;
    this.appendages = appendages;
    this.hasAntennae = hasAntennae;
    this.canFly = canFly;
  }
}

class Mammalia extends WarmBloodedVertebrate {
  producesMilk = true;
  constructor(name, habitat, diet) {
    super(name);
    this.habitat = habitat;
    this.diet = diet;
  }
}
class Aves extends WarmBloodedVertebrate {
  hasWings = true;
  layeggs = true;
  constructor(name, diet, canFly) {
    super(name);
    this.diet = diet;
    this.canFly = canFly;
  }
}
class Reptilia extends ColdBloodedVertebrate {
  constructor(name, diet, habitat, hasLimbs) {
    super(name);
    this.diet = diet;
    this.habitat = habitat;
    this.hasLimbs = hasLimbs;
  }
}
class Pisces extends ColdBloodedVertebrate {
  habitat = 'aquatic';
  constructor(name, diet) {
    super(name);
    this.diet = diet;
  }
}
class Amphibia extends ColdBloodedVertebrate {
  constructor(name, hasTail, hasTeeth) {
    super(name);
    this.hasTail = hasTail;
    this.hasTeeth = hasTeeth;
  }
}

const mammal = new Mammalia('Lion', 'Terrestial', 'Carnivorus');
const reptile = new Reptilia('Black Mamba', 'Carnivorus', 'Terrestial', 'false');
const fish = new Pisces('Shark', 'Carnivorus');
const bird = new Aves('Pigeon', 'Herbivorus', true);
const amphibian = new Amphibia('told', false, false);
const arthopod = new Arthropoda('crabs', 'aqautic', 8, false, false);
