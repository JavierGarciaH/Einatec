const Robot = require('./robot.js');
describe('Test Robot getInstance', () => {
  test('getInstance if not created', () => {
    const robot = Robot.getInstance();
    expect(robot).toBe(undefined);
  });

  test('getInstance created', () => {
    const robot = Robot.create(0, 1, 0);
    expect(robot).not.toBe(undefined);
    expect(typeof robot).toBe('object');
    expect(robot.getPosition()).toStrictEqual({ x: 0, y: 1, f: 0 });
  });
});

describe('Test Robot create', () => {
  test('create instance', () => {
    const robot = Robot.create(0, 1, 0);
    expect(robot).not.toBe(undefined);
    expect(typeof robot).toBe('object');
    expect(robot.getPosition()).toStrictEqual({ x: 0, y: 1, f: 0 });
  });

  test('create if instance is created with place', () => {
    const robot = Robot.create(1, 2, 3);
    expect(robot).not.toBe(undefined);
    expect(typeof robot).toBe('object');
    expect(robot.getPosition()).toStrictEqual({ x: 1, y: 2, f: 3 });
  });
});

describe('Test Robot move', () => {
  test('move robot', () => {
    const robot = Robot.create(0, 0, 0);
    robot.move(5, 6);
    expect(robot.getPosition()).toStrictEqual({ x: 5, y: 6, f: 0 });
  });
});

describe('Test Robot turnLeft', () => {
  test('Robot turnLeft north to west', () => {
    const robot = Robot.create(0, 0, 0);
    robot.turnLeft();
    expect(robot.getPosition()).toStrictEqual({ x: 0, y: 0, f: 3 });
  });
  test('Robot turnLeft west to south', () => {
    const robot = Robot.create(0, 0, 3);
    robot.turnLeft();
    expect(robot.getPosition()).toStrictEqual({ x: 0, y: 0, f: 2 });
  });
});

describe('Test Robot turnRight', () => {
  test('Robot turnRight west to north', () => {
    const robot = Robot.create(0, 0, 3);
    robot.turnRight();
    expect(robot.getPosition()).toStrictEqual({ x: 0, y: 0, f: 0 });
  });
  test('Robot turnRight north to east', () => {
    const robot = Robot.create(0, 0, 0);
    robot.turnRight();
    expect(robot.getPosition()).toStrictEqual({ x: 0, y: 0, f: 1 });
  });
});

describe('Test Robot getNextPosition', () => {
  test('Robot go to north', () => {
    const robot = Robot.create(0, 0, 0);
    expect(robot.getNextPosition()).toStrictEqual({ x: 0, y: 1 });
  });
  test('Robot go to south', () => {
    const robot = Robot.create(0, 0, 2);
    expect(robot.getNextPosition()).toStrictEqual({ x: 0, y: -1 });
  });
  test('Robot go to east', () => {
    const robot = Robot.create(0, 0, 1);
    expect(robot.getNextPosition()).toStrictEqual({ x: 1, y: 0 });
  });
  test('Robot go to west', () => {
    const robot = Robot.create(0, 0, 3);
    expect(robot.getNextPosition()).toStrictEqual({ x: -1, y: 0 });
  });
});
