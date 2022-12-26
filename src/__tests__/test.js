import Character from '../js/Character';
import SuperCharacter from '../js/app';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';

test('Test 1', () => {
  const character = new Character('reya');
  const result = {
    name: 'reya', level: 1, health: 100,
  };
  expect(character).toEqual(result);
});

test('Test 2', () => {
  const daemon = new Daemon('Reya');
  const result = {
    name: 'Reya', level: 1, health: 100, _attack: 10, defense: 40, type: 'Daemon', _stoned: false,
  };
  expect(daemon).toEqual(result);
});

test('Test 3', () => {
  const magician = new Magician('Reya');
  const result = {
    name: 'Reya', level: 1, health: 100, _attack: 100, defense: 40, type: 'Magician', _stoned: false,
  };
  expect(magician).toEqual(result);
});

test('Test 4', () => {
  const superCharacter = new SuperCharacter('Reya');
  const result = {
    name: 'Reya', level: 1, health: 100, _stoned: false,
  };
  expect(superCharacter).toEqual(result);
});

test('Test 5', () => {
  const magician = new Magician('Reya');
  magician.stoned = false;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(90);
});
test('Test 6', () => {
  const magician = new Magician('Reya');
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(85);
});

test('Test 7', () => {
  const daemon = new Daemon('Reya');
  daemon.stoned = false;
  daemon.distance = 6;
  const result = daemon.attack;
  expect(result).toBe(0);
});

test('Test 8', () => {
  const daemon = new Daemon('Reya');
  daemon.stoned = true;
  daemon.distance = 2;
  const result = daemon.attack;
  expect(result).toBe(4);
});