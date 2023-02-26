const chalk = require('chalk');
const { commandsDto } = require('../utils/constants.js');
const {
  setPlace,
  getReport,
  setDirection,
  setMove,
} = require('../commands/commands.js');

class Controller {
  commands = [];

  getCommand = (input) => {
    return input.split(' ')[0].trim();
  };

  isValidCommand = (command) => {
    return Object.values(commandsDto).includes(command);
  };

  generateReport = () => {
    for (let idx = 0; idx < this.commands.length; idx += 1) {
      const command = this.getCommand(this.commands[idx]);
      switch (command) {
        case commandsDto.place:
          setPlace(this.commands[idx]);
          break;
        case commandsDto.move:
          setMove();
          break;
        case commandsDto.left:
        case commandsDto.right:
          setDirection(command);
          break;
        case commandsDto.report:
          return getReport();
      }
    }
  };

  printReport = (report) => {
    console.log(chalk.magenta(report));
  };

  setCommand = (data) => {
    const command = this.getCommand(data);
    if (!this.isValidCommand(command)) {
      return;
    }
    this.commands.push(data);

    if (command === commandsDto.report) {
      const report = this.generateReport();
      this.printReport(report);
      return true;
    }
  };
}

module.exports = Controller;
