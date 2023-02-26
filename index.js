const Controller = require('./src/controllers/controller.js');
const chalk = require('chalk');

const controller = new Controller();

var figlet = require('figlet');

console.log(
  chalk.green(figlet.textSync('Einatec')),
  chalk.green('Technical test')
);
console.log(chalk.bgWhite('Insert commands:'));

// process.stdout.write('Einatec techincal test \n');
process.stdin.on('data', (data) => {
  const finish = controller.setCommand(data.toString());
  if (finish) process.exit();
});
