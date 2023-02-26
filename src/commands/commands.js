const {
  commandsDto,
  directionsDto,
  maxColumns,
  maxRows,
} = require('../utils/constants.js');
const Robot = require('../robot/robot.js');

const isValidPosition = (x, y) => {
  const invalidX = x < 0 || x >= maxColumns;
  const invalidY = y < 0 || y >= maxRows;
  return !invalidX & !invalidY;
};

const setPlace = (command) => {
  let x, y, f;
  try {
    const parameters = command.split(' ')[1];
    x = parameters.split(',')[0].trim();
    y = parameters.split(',')[1].trim();
    f = parameters.split(',')[2].trim();
  } catch {
    return;
  }

  if (!isValidPosition(x, y) || !directionsDto.includes(f)) return;

  Robot.create(x, y, directionsDto.indexOf(f));
};

const getReport = () => {
  const robot = Robot.getInstance();
  if (!robot) return '';
  const { x, y, f } = robot.getPosition();
  return `${x}, ${y}, ${directionsDto[f]}`;
};

const setMove = () => {
  const robot = Robot.getInstance();
  if (robot) {
    const { x, y } = robot.getNextPosition();
    if (isValidPosition(x, y)) {
      robot.move(x, y);
    }
  }
};

const setDirection = (direction) => {
  const robot = Robot.getInstance();
  if (robot) {
    direction === commandsDto.left ? robot.turnLeft() : robot.turnRight();
  }
};

module.exports = {
  getReport,
  setDirection,
  setMove,
  setPlace,
};
