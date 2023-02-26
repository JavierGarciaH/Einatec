const maxColumns = 5;
const maxRows = 5;

const commandsDto = {
  place: 'PLACE',
  move: 'MOVE',
  left: 'LEFT',
  right: 'RIGHT',
  report: 'REPORT',
};

const directionsDto = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

module.exports = {
  maxColumns,
  maxRows,
  commandsDto,
  directionsDto,
};
