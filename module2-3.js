var Character = function (name, gender, posX, posY, health, energy) {
  this.name = name;
  this.gender = gender;
  this.posX = posX;
  this.posY = posY;
  this.health = health;
  this.energy = energy;
}

Character.prototype = {
  walk: function (x, y) {
    console.log('walking..');
    this.posX = x;
    this.posY = y;
    this.energy--;
  },
  rest: function () {
    setTimeout(function() {this.energy =+ 10; this.heal =+ 10;}, 5000);      
  }
}



/***/
var Human = function (name, gender, posX, posY, health, energy, weapons) {
  Character.call(this, name, gender, posX, posY, health, energy);
  this.weapons = weapons;
}

Human.prototype = Object.create(Character.prototype);
Human.prototype.constructor = Human;
Human.prototype.attack = function (character, weapon) {
  character.health =- weapon.hit();
  this.energy--
}



/***/

var Dwarf = function (name, gender, posX, posY, health, energy, weapons, gold) {
  Character.call(this, name, gender, posX, posY, health, energy);
  this.weapons = weapons;
  this.gold = gold
}

Dwarf.prototype = Object.create(Character.prototype);
Dwarf.prototype.constructor = Dwarf;
Dwarf.prototype.attack = function (character, weapon) {
  character.health = - weapon.hit();
  this.energy--
}
Dwarf.prototype.goldDigging = function () {
  this.gold =+ parseInt(Math.random() * 10)
}

/***/

var Wizard = function (name, gender, posX, posY, health, energy, mana, spells) {
  Character.call(this, name, gender, posX, posY, health, energy);
  this.mana = mana;
  this.spells = spells;
}
Wizard.prototype = Object.create(Character.prototype);
Wizard.prototype.constructor = Wizard;
Wizard.prototype.spell = function (spell, character) {
  console.log(this.name + 'is casting ' + spell.name + ' to ' + character.name);
  this.mana =- spell.consumedMana;
  character.health =- spell.damage;
  console.log(this.name + 'mana is now: ' + this.mana, + character.name + ' health is now: ' + character.health)
}

Wizard.prototype.heal = function (character) {
  console.log(this.name + ' is healing ' + character.name);
  character.health =+ 30;
  this.mana =- 10;
  console.log(this.name + 'mana is now ' + this.mana + ' and ', character.name + ' health is now ' + character.health)
}

Wizard.prototype.rest = function () {
  setTimeout(function() {this.energy =+ 10; this.heal =+ 10; this.mana = 100;}, 5000);
}




var Weapon = function (name, damage, consumedEnergy) {
  this.name = name;
  this.damage = damage;
  this.consumedEnergy = consumedEnergy;
}

Weapon.prototype.hit = function () {
  return this.damage;
}

/**
 * Creation of some weapons for later use
 **/

var claymoreSword = new Weapon('Legendary claymore of the North', 40, 40)
var dagger = new Weapon('Iron Dagger', 15, 15)


var Spell = function (name, damage, consumedMana) {
  this.name = name;
  this.damage = damage;
  this.consumedMana = consumedMana;
}

Spell.prototype.hit = function () {
  return this.damage;
}

/**
 * Creation of spells for later use  
 **/

var fireball = new Spell('Fireball', 30, 30);
var freeze = new Spell('Freeze', 30, 30);


var humanEric = new Human('Eric', 'Male', 0, 0, 100, 100, [claymoreSword, dagger]);
var dwarfPupi = new Dwarf('Pupi', 'Male', 0, 0, 100, 100, [dagger, claymoreSword], 30);
var hermioneWizard = new Wizard('Hermione', 'Female', 0, 0, 100, 100, 100, [fireball, freeze]);