import SuperCharacter from './app';

export default class Daemon extends SuperCharacter {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defense = 40;
  }
}