export class Hero {
  private _id: number;
  private _name: string;
  private _lvl: number;
  private _hp?: number = 0;
  private _mp?: number = 0;
  private _monsterKilled?: number = 0;


  constructor(id: number, name: string, lvl:number) {
    this._id = id;
    this._name = name;
    this._lvl = lvl;
    this._hp = 24 * lvl ;
    this._mp = 24 * (lvl - 7);
    this._monsterKilled = Math.floor(this.hp * (lvl/5));

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lvl(): number {
    return this._lvl;
  }

  set lvl(value: number) {
    this._lvl = value;
  }


  get hp(): number {
    return this._hp;
  }

  get mp(): number {
    return this._mp;
  }


  get monsterKilled(): number {
    return this._monsterKilled;
  }

}
