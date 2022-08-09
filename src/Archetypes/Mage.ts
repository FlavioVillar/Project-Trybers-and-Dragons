import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static countMages = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.countMages += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.countMages;
  }
}