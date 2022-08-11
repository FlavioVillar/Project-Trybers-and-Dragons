import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemy: SimpleFighter[];

  constructor(player: Fighter, enemy: SimpleFighter[]) {
    super(player);
    this._enemy = enemy.length > 0 ? enemy : [new Monster()];
  }

  fight(): number {
    // while faz loop até o player perder - enemy vem em Array porque pode ter mais de um
    while (this.player.lifePoints > 0
      && this._enemy.some((e) => e.lifePoints > 0)) {
      this.player.attack(this._enemy[0]);
      this._enemy.forEach((e) => e.attack(this.player));
    }
    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}
