import { Character, Prop } from "./rpg-combat";

describe("RPG Combat", () => {
  it("Creates a character with initial stats", () => {
    const character = new Character("Name");

    expect(character.getName()).toEqual("Name");
    expect(character.getHealth()).toBe(100);
    expect(character.getLevel()).toBe(1);
    expect(character.getIsAlive()).toBe(true);
  });

  describe("Attack", () => {
    it("A character can deal damage", () => {
      const charA = new Character("A");
      const charB = new Character("B");
      const damage = 25;
  
      charA.attack(charB, damage);
  
      expect(charB.getHealth()).toBe(75);
    });
  
    it("A character can kill", () => {
      const charA = new Character("A");
      const charB = new Character("B");
      const damageToOverkill = 110;
  
      charA.attack(charB, damageToOverkill);
  
      expect(charB.getHealth()).toBe(0);
      expect(charB.getIsAlive()).toBe(false);
    });

    it("A character cannot deal damage to itself", () => {
      const charA = new Character("A");
      const damage = 25;
  
      charA.attack(charA, damage);
  
      expect(charA.getHealth()).toBe(100);
    });

    it("When character deals damage to another character, if the target is 5 or more Levels above the attacker, Damage is reduced by 50%", () => {
      const levelOne = 1;
      const levelSix = 6;
      const charA = new Character("A", levelOne);
      const charB = new Character("B", levelSix);
      const damage = 100;
  
      charA.attack(charB, damage);
  
      expect(charB.getHealth()).toBe(50);
    });
  
    it("When character deals damage to another character, if the target is 5 or more Levels below the attacker, Damage is increased by 50%", () => {
      const levelOne = 1;
      const levelSix = 6;
      const biggerHealth = 200;
      const charA = new Character("A", levelSix);
      const charB = new Character("B", levelOne, biggerHealth);
      const damage = 50;
  
      charA.attack(charB, damage);
  
      expect(charB.getHealth()).toBe(100);
    });
  });

  describe("Heal", () => {
    it("A character can heal", () => {
      const charA = new Character("A");
      const heal = 25;
  
      charA.heal(charA, heal);
  
      expect(charA.getHealth()).toBe(125);
    });
  
    it("A character can heal up to 1000 health points", () => {
      const charA = new Character("A");
      const overHeal = 1025;
  
      charA.heal(charA, overHeal);
  
      expect(charA.getHealth()).toBe(1000);
    });
  
    it("A dead character cannot be healed", () => {
      const initialLevel = 1;
      const noHealth = 0
      const charA = new Character("A", initialLevel, noHealth);
      const heal = 1025;
  
      charA.heal(charA, heal);
  
      expect(charA.getHealth()).toBe(0);
      expect(charA.getIsAlive()).toBe(false);
    });
  
    it("A character can only heal itself", () => {
      const charA = new Character("A");
      const charB = new Character("B");
      const heal = 25;
  
      charA.heal(charB, heal);
      charA.heal(charA, heal);
  
      expect(charB.getHealth()).toBe(100);
      expect(charA.getHealth()).toBe(125);
    });
  });

  describe("Range", () => {
    it("Creates a character with attack range", () => {
      const character = new Character("Name");
  
      expect(character.getAttackRange()).toBe(2);
    });
  
    it("Creates a melee character with an attack range of 2 meters", () => {
      const initialLevel = 1;
      const initialHealth = 100;
      const character = new Character("Name", initialLevel, initialHealth, "melee");
  
      expect(character.getAttackRange()).toBe(2);
    });
  
    it("Creates a ranged character with an attack range of 20 meters", () => {
      const initialLevel = 1;
      const initialHealth = 100;
      const character = new Character("Name", initialLevel, initialHealth, "ranged");
  
      expect(character.getAttackRange()).toBe(20);
    });
  
    it("A ranged character can deal damage to another character if it is in range", () => {
      const initialLevel = 1;
      const initialHealth = 100;
      const charA = new Character("A", initialLevel, initialHealth, "ranged");
      const charB = new Character("B");
      const inRangePosition = 20;
      const damage = 25;
      
      charB.setPosition(inRangePosition);
      charA.attack(charB, damage);
  
      expect(charB.getHealth()).toBe(75);
    });
  
    it("A melee character can deal damage to another character if it is in range", () => {
      const initialLevel = 1;
      const initialHealth = 100;
      const charA = new Character("A", initialLevel, initialHealth, "melee");
      const charB = new Character("B");
      const inRangePosition = 2;
      const damage = 25;
      
      charB.setPosition(inRangePosition);
      charA.attack(charB, damage);
  
      expect(charB.getHealth()).toBe(75);
    });
  
    it("A character cannot deal damage to another character if it is out of range", () => {
      const charA = new Character("A");
      const charB = new Character("B");
      const outOfRangePosition = 25;
      const damage = 25;
      
      charB.setPosition(outOfRangePosition);
      charA.attack(charB, damage);
  
      expect(charB.getHealth()).toBe(100);
    });
  });

  describe("Factions", () => {
    it("Creates a character with no faction", () => {
      const character = new Character("Name");
  
      expect(character.getFactions()).toEqual([]);
    });
  
    it("A character can join multiple factions", () => {
      const character = new Character("Name");
  
      character.joinFaction("factionA");
      character.joinFaction("factionB");
  
      expect(character.getFactions()).toEqual(["factionA", "factionB"]);
    });
  
    it("A character can leave multiple factions", () => {
      const character = new Character("Name");
  
      character.joinFaction("factionA");
      character.joinFaction("factionB");
      character.joinFaction("factionC");
  
      character.leaveFaction("factionA");
      character.leaveFaction("factionB");
      character.leaveFaction("factionD");
  
      expect(character.getFactions()).toEqual(["factionC"]);
    });
  
    
    it("Characters belonging to the same faction are considered allies", () => {
      const charA = new Character("A");
      const charB = new Character("B");
  
      charA.joinFaction("factionA");
      charA.joinFaction("factionB");
  
      charB.joinFaction("factionA");
      charB.joinFaction("factionC");
  
      expect(charA.isAllyOf(charB)).toBe(true);
      expect(charB.isAllyOf(charA)).toBe(true);
    });
  
    it("Allies cannot deal damage to one another", () => {
      const charA = new Character("A");
      const charB = new Character("B");
      const damage = 25;
  
      charA.joinFaction("factionA");
      charB.joinFaction("factionA");
      
      charA.attack(charB, damage);
      charB.attack(charA, damage);
  
      expect(charA.getHealth()).toBe(100);
      expect(charB.getHealth()).toBe(100);
    });
  
    it("Allies can heal one another", () => {
      const charA = new Character("A");
      const charB = new Character("B");
      const heal = 25;
  
      charA.joinFaction("factionA");
      charB.joinFaction("factionA");
      
      charA.heal(charB, heal);
      charB.heal(charA, heal);
  
      expect(charA.getHealth()).toBe(125);
      expect(charB.getHealth()).toBe(125);
    });
  });

  describe("Props", () => {
    it("Creates a prop with initial stats", () => {
      const prop = new Prop("Tree", 100);

      expect(prop.getName()).toEqual("Tree");
      expect(prop.getHealth()).toBe(100);
      expect(prop.getIsDestroyed()).toBe(false);
    });

    it("A prop does not belong to factions", () => {
      const prop = new Prop("Tree");

      expect(prop.getName()).toEqual("Tree");
      expect(prop.getFactions()).toBe([]);
    });

    it("A prop with 0 health is destroyed", () => {
      const prop = new Prop("Tree", 0);

      expect(prop.getName()).toEqual("Tree");
      expect(prop.getIsDestroyed()).toBe(true);
    });

    it("Can be attacked by a character", () => {
      const prop = new Prop("Tree", 100);
      const character = new Character("Name");

      character.attack(prop, 25);

      expect(prop.getName()).toEqual("Tree");
      expect(prop.getHealth()).toBe(75);
    });
  });
});