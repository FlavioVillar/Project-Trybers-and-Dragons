import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemy: SimpleFighter[];
  private _character: Fighter;

  constructor(character: Fighter, enemy: SimpleFighter[]) {
    super(character);
    this._enemy = enemy.length > 0 ? enemy : [new Monster()];
    this._character = character;
  }

  fight(): number {
    this._character.attack(this._enemy[0]);   
    if (this.player.lifePoints === -1) return -1; 
    this._enemy[0].attack(this.player);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}