import { getRange } from '../utils';

const { it } = global;

it('should have array with values 1 -> 5', () => {
  const pages = getRange(1, 5);
  for (let i = 1; i <= 5; i++) {
    expect(i).toBe(pages[i - 1]);
  }
  expect(pages.length).toBe(5);
});

it('should have array with values 2 -> 5', () => {
  const pages = getRange(2, 5);
  const templates = [2, 3, 4, 5];
  for (let i = 0; i < templates.length; i++) {
    expect(templates[i]).toBe(pages[i]);
  }
  expect(pages.length).toBe(4);
});
