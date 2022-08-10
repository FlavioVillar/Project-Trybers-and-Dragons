import SimpleFighter from './SimpleFighter';
import { Energy } from '../Energy';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  levelUp(): void;
  special?(enemy: Fighter): void;
}
