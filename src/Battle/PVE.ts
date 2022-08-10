import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemy: Monster;

  constructor(fighters: Fighter, enemy: [Monster | SimpleFighter]) {
    super(fighters);
    this._enemy = enemy[0] as Monster;
  }

  get enemy(): Monster {
    return this._enemy;
  }

  fight(): number {
    this.player.attack(this.enemy);    
    if (this.player.lifePoints === -1) return -1; 
    this.enemy.attack(this.player);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}