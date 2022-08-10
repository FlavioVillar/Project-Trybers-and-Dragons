import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _enemy: Fighter;

  constructor(Character1: Fighter, Character2: Fighter) {
    super(Character1);
    this._enemy = Character2;
  }

  get enemy(): Fighter {
    return this._enemy;
  }

  fight(): number {
    this.player.attack(this.enemy);    
    if (this.player.lifePoints === -1) return -1;
    this.enemy.attack(this.player);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}