import translateToMorse from './translateToMorse';
import { DictOptions } from './morseDictionary';

const s = DictOptions.s;
const l = DictOptions.l;
const pause = DictOptions.pause;

test('translate "a"', () => {
  expect(translateToMorse('a')).toStrictEqual([s, l, pause]);
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
