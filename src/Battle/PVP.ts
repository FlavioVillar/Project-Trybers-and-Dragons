import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _enemy: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    // while faz loop até o player perder
    while (this.player.lifePoints > 0 && this._enemy.lifePoints > 0) {
      this.player.attack(this._enemy);     
      this._enemy.attack(this.player);
    }    
    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}