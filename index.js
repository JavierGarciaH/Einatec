import Controller from './src/controllers/controller.js';

const controller = new Controller();

process.stdout.write('Einatec techincal test \n');
process.stdin.on('data', (data) => {
  const finish = controller.setCommand(data.toString());
  if (finish) process.exit();
});
