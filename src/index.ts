import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';
import Fighter from './Fighter';

export const player1 = new Character('Player 1');
export const player2 = new Character('Player 2');
export const player3 = new Character('Player 3');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

export const monster1 = new Monster();
export const monster2 = new Dragon();

export const pvp = new PVP(player2, player3);
export const pve = new PVE(player1, [monster1, monster2]);

export function runBattles(battles: Battle[]): Battle {
  battles.forEach((battle) => battle.fight());
  return battles[0];
}

console.log(runBattles([pvp]));


