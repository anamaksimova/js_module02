import filter from './filter';

describe('фильтр массива объектов', () => {
  const array = [
    {
      id: 12,
      name: 'Name 1'
    },
    {
      id: 22,
      name: 'Name 2'
    },
    {
      id: 43,
      name: 'Name 3'
    },
    {
      id: 222,
      name: 'Name 2'
    },
  ];
  
  it('несколько совпадений', () => {

    const expected = [array[2]];
    const filtered = filter(array, 'name', 'Name 3');
    expect(Array.isArray(filtered)).toBe(true);
    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('одно совпадение по string', () => {
    const expected = [array[1], array[3]];
    const filtered = filter(array, 'name', 'Name 2');
    expect(Array.isArray(filtered)).toBe(true);
    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('одно совпадение по numbers ', () => {
    const expected = [array[3]];
    const filtered = filter(array, 'id', 222);
    expect(Array.isArray(filtered)).toBe(true);
    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('нет совпадений', () => {
    const expected = [];
    const filtered = filter(array, 'name', 'Name 4');
    expect(Array.isArray(filtered)).toBe(true);
    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });
});