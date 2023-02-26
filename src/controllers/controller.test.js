const Controller = require('./controller.js');

describe('Test Controller add commands', () => {
  // test('Add invalid commands', () => {
  //   const controller = new Controller();
  //   let result;
  //   let spy = jest
  //     .spyOn(controller, 'printReport')
  //     .mockImplementation((res) => (result = res));
  //   controller.setCommand('PLACE 1,1');
  //   controller.setCommand('REPORT');
  //   expect(result).toBe('');
  // });

  // test('Add commands without report', () => {
  //   const controller = new Controller();
  //   let result2;
  //   let spy = jest
  //     .spyOn(controller, 'printReport')
  //     .mockImplementation((res) => (result2 = res));
  //   controller.setCommand('PLACE 1,1,NORTH');
  //   controller.setCommand('MOVE');
  //   controller.setCommand('MOVE');
  //   expect(result2).toBe(undefined);
  // });

  // test('Add commands', () => {
  //   const controller = new Controller();
  //   let result;
  //   let spy = jest
  //     .spyOn(controller, 'printReport')
  //     .mockImplementation((res) => (result = res));
  //   controller.setCommand('PLACE 1,1,NORTH');
  //   controller.setCommand('MOVE');
  //   controller.setCommand('MOVE');
  //   controller.setCommand('REPORT');

  //   expect(result).toBe('1, 3, NORTH');
  // });
  test('Add commands', () => {
    const controller = new Controller();
    let result;
    jest
      .spyOn(controller, 'printReport')
      .mockImplementation((res) => (result = res));
    controller.setCommand('PLACE 0,4,WEST');
    controller.setCommand('MOVE');
    controller.setCommand('RIGHT');
    controller.setCommand('MOVE');
    controller.setCommand('RIGHT');
    controller.setCommand('MOVE');
    controller.setCommand('MOVE');
    controller.setCommand('MOVE');
    controller.setCommand('MOVE');
    controller.setCommand('MOVE');
    controller.setCommand('LEFT');
    controller.setCommand('REPORT');
    expect(result).toBe('4, 4, NORTH');
  });
});
