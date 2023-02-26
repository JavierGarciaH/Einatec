const { getReport, setPlace, setDirection, setMove } = require('./commands.js');

describe('Test Commands setPlace', () => {
  test('setPlace if invalid direction', () => {
    setPlace('PLACE 0,0,LEFT');
    expect(getReport()).toBe('');
  });

  test('setPlace 1,2,NORTH', () => {
    setPlace('PLACE 1,2,NORTH');
    expect(getReport()).toBe('1, 2, NORTH');
  });

  test('setPlace 2,10,NORTH Y out of table', () => {
    setPlace('PLACE 0,10,NORTH');
    expect(getReport()).toBe('1, 2, NORTH');
  });

  test('setPlace -1,0,NORTH X out of table', () => {
    setPlace('PLACE -1,0,NORTH');
    expect(getReport()).toBe('1, 2, NORTH');
  });

  test('setPlace 2,4,WEST', () => {
    setPlace('PLACE 2,4,WEST');
    expect(getReport()).toBe('2, 4, WEST');
  });
});

describe('Test Commands setDirection', () => {
  test('setDirection LEFT', () => {
    setPlace('PLACE 0,0,NORTH');
    setDirection('LEFT');
    expect(getReport()).toBe('0, 0, WEST');
    setDirection('LEFT');
    expect(getReport()).toBe('0, 0, SOUTH');
    setDirection('LEFT');
    expect(getReport()).toBe('0, 0, EAST');
    setDirection('LEFT');
    expect(getReport()).toBe('0, 0, NORTH');
  });

  test('setDirection RIGHT', () => {
    setPlace('PLACE 0,0,NORTH');
    setDirection('RIGHT');
    expect(getReport()).toBe('0, 0, EAST');
    setDirection('RIGHT');
    expect(getReport()).toBe('0, 0, SOUTH');
    setDirection('RIGHT');
    expect(getReport()).toBe('0, 0, WEST');
    setDirection('RIGHT');
    expect(getReport()).toBe('0, 0, NORTH');
  });
});

describe('Test Commands setMove', () => {
  test('Move to invalid position', () => {
    setPlace('PLACE 0,0,SOUTH');
    setMove();
    expect(getReport()).toBe('0, 0, SOUTH');
  });

  test('Move to NORTH', () => {
    setPlace('PLACE 0,0,NORTH');
    setMove();
    expect(getReport()).toBe('0, 1, NORTH');
  });

  test('Move to EAST', () => {
    setPlace('PLACE 0,0,EAST');
    setMove();
    setMove();
    expect(getReport()).toBe('2, 0, EAST');
  });
});

describe('Test Commands movements', () => {
  test('place turn and move', () => {
    setPlace('PLACE 0,0,NORTH');
    setDirection('LEFT');
    setMove();
    setMove();
    expect(getReport()).toBe('0, 0, WEST');
    setDirection('RIGHT');
    setMove();
    setMove();
    expect(getReport()).toBe('0, 2, NORTH');
    setDirection('RIGHT');
    setMove();
    setMove();
    setMove();
    setMove();
    setMove();
    expect(getReport()).toBe('4, 2, EAST');
  });
});
