export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }
  
  private set name(value: string) {
    this._name = value;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public set dexterity(value: number) {
    this._dexterity = value;
  }
    
  static createdRacesInstances(value: number): void {
    if (value < 3 || !value) {
      throw new Error('Not implemented');
    }
  } 

  abstract get maxLifePoints(): number;
}