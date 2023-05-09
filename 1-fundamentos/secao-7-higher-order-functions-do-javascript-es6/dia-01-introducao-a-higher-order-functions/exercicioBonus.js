const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => Math.floor(Math.random() * (dragon.strength - 14) + 15);

const warriorAttack = (warrior) =>
  Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) + warrior.strength);

const mageAttack = (mage) => {
  if (mage.mana < 15) return { damageDealt: 'Não possui mana suficiente', manaSpent: 0 };
  const damageDealt = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) + mage.intelligence);
  return { damageDealt: damageDealt, manaSpent: 15};
};
