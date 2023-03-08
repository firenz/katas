// Reference: https://github.com/ardalis/kata-catalog/blob/main/katas/RPG%20Combat.md

class InteractiveElement {
  protected name: string;
  protected health: number;

  protected currentPosition: number;

  protected factions: string[];

  constructor(name: string, health = 100) {
    this.name = name;
    this.health = health;

    this.currentPosition = 0;

    this.factions = [];
  }

  getName(): string {
    return this.name;
  }

  getHealth(): number {
    return this.health;
  }

  getCurrentPosition(): number {
    return this.currentPosition;
  }

  getFactions(): string[] {
    return this.factions;
  }

  setPosition(position: number) {
    this.currentPosition = position;
  }

  receiveDamage(damagePoints: number) {
    this.health -= damagePoints;
    if (this.health <= 0) this.health = 0;
  }
}

export class Character extends InteractiveElement {
  private level: number;
  private isAlive: boolean;

  private rangeType: "melee" | "ranged";
  private attackRange: number;

  constructor(name: string, level = 1, health = 100, rangeType: "melee" | "ranged" = "melee") {
    super(name, health);

    this.level = level;

    this.health === 0
      ? this.isAlive = false 
      : this.isAlive = true;

    this.rangeType = rangeType;
    this.rangeType === "melee"
      ? this.attackRange = 2
      : this.attackRange = 20;
  }

  getLevel(): number {
    return this.level;
  }

  getIsAlive(): boolean {
    return this.isAlive;
  }

  getAttackRange(): number {
    return this.attackRange;
  }

  attack(element: InteractiveElement, damagePoints: number) {
    if (!this.canHit(element)) return;

    if(element instanceof Character) {
      damagePoints = 
        this.calculateDamage(damagePoints, element.getLevel());
    }

    element.receiveDamage(damagePoints);
  }

  receiveDamage(damagePoints: number) {
    super.receiveDamage(damagePoints);
    if (this.health === 0) this.isAlive = false;
  }

  heal(element: InteractiveElement, healthPoints: number) {
    if(!(element instanceof Character)) return;
    if (!this.canHeal(element)) return;

    element.recoverHealth(healthPoints);
  }

  private recoverHealth(healthPoints: number) {
    if (!this.isAlive) return;

    this.health += healthPoints;
    if (this.health >= 1000) this.health = 1000;
  }

  private canHit(element: InteractiveElement): boolean {
    if (this === element) return false;
    if(this.isAllyOf(element)) return false;

    const elementPosition = element.getCurrentPosition();
    const rangeDifference = Math.abs(this.currentPosition - elementPosition);
    return rangeDifference <= this.attackRange ? true : false;
  }

  private calculateDamage(damagePoints: number, characterLevel: number): number {
    const levelDifference = characterLevel - this.level;
    if (levelDifference >= 5) return damagePoints * 0.5;
    if (levelDifference <= -5) return damagePoints * 2;
    return damagePoints;
  }

  private canHeal(character: Character): boolean {
    if (this === character) return true;
    else if (this.isAllyOf(character)) return true;
    return false;
  }

  setPosition(position: number) {
    this.currentPosition = position;
  }

  joinFaction(faction: string) {
    this.factions.push(faction);
  }

  leaveFaction(factionToLeave: string) {
    this.factions = this.factions
      .filter(faction => faction !== factionToLeave);
  }

  isAllyOf(element: InteractiveElement): boolean {
    return this.factions.some(faction => { 
      return element.getFactions().includes(faction);
    });
  }
}

export class Prop extends InteractiveElement {
  private isDestroyed: boolean;

  constructor(name: string, health = 100) {
    super(name, health);

    this.health === 0
      ? this.isDestroyed = true 
      : this.isDestroyed = false;
  }

  getIsDestroyed(): boolean {
    return this.isDestroyed;
  }

  receiveDamage(damagePoints: number) {
    super.receiveDamage(damagePoints);
    if (this.health === 0) this.isDestroyed = false;
  }
}