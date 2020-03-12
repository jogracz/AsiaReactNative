import translateToMorse from '../translateToMorse';
import { DictOptions } from '../morseDictionary';

const s = DictOptions.s;
const l = DictOptions.l;
const pause = DictOptions.pause;

test('translate ""', () => {
  expect(translateToMorse('')).toStrictEqual([]);
});

test('translate " "', () => {
  expect(translateToMorse(' ')).toStrictEqual([pause, pause]);
});

test('translate "a"', () => {
  expect(translateToMorse('a')).toStrictEqual([s, l, pause]);
});

test("translate 'Abrakadabra'", () => {
  expect(translateToMorse('Abrakadabra')).toStrictEqual([
    s,
    l,
    pause,
    l,
    s,
    s,
    s,
    pause,
    s,
    l,
    s,
    pause,
    s,
    l,
    pause,
    l,
    s,
    l,
    pause,
    s,
    l,
    pause,
    l,
    s,
    s,
    pause,
    s,
    l,
    pause,
    l,
    s,
    s,
    s,
    pause,
    s,
    l,
    s,
    pause,
    s,
    l,
    pause
  ]);
});

test('translate "What a day"', () => {
  expect(translateToMorse('What a day')).toStrictEqual([
    s,
    l,
    l,
    pause,
    s,
    s,
    s,
    s,
    pause,
    s,
    l,
    pause,
    l,
    pause,
    pause,
    pause,
    s,
    l,
    pause,
    pause,
    pause,
    l,
    s,
    s,
    pause,
    s,
    l,
    pause,
    l,
    s,
    l,
    l,
    pause
  ]);
});

test('translate "!?."', () => {
  expect(translateToMorse('!?.')).toStrictEqual([]);
});

test('translate "ah! !? ok."', () => {
  expect(translateToMorse('ah! !? ok.')).toStrictEqual([
    s,
    l,
    pause,
    s,
    s,
    s,
    s,
    pause,
    pause,
    pause,
    pause,
    pause,
    l,
    l,
    l,
    pause,
    l,
    s,
    l,
    pause
  ]);
});

test('translate "490 521"', () => {
  expect(translateToMorse('490 521')).toStrictEqual([
    s,
    s,
    s,
    s,
    l,
    pause,
    l,
    l,
    l,
    l,
    s,
    pause,
    l,
    l,
    l,
    l,
    l,
    pause,
    pause,
    pause,
    s,
    s,
    s,
    s,
    s,
    pause,
    s,
    s,
    l,
    l,
    l,
    pause,
    s,
    l,
    l,
    l,
    l,
    pause
  ]);
});
