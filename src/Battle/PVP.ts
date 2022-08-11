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

  fight() {
    // while faz loop até o player morrer
    while (this.player.lifePoints > 0 && this.enemy.lifePoints > 0) {
      this.player.attack(this.enemy);
      this.enemy.attack(this.player);
    }    
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}