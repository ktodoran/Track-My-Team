const Employee = require('../lib/Employee.js');

//Test for Employee Object
test ('Creates an Employee Object', () => {
    const employee = new Employee ('Kyle');

    expect(employee.name === 'Kyle');
    expect(employee.id === expect.any(Number));
    expect(employee.email === expect.stringContaining('@'));
});
//Name Test
test('Gets name of Employee', ()=> {
    const employee = new Employee ('Kyle', 123, 'ktodoran@gmail.com');

    expect(employee.getName() === 'Kyle');
});
// Id Test
test ('Gets ID for Employee', () => {
    const employee = new Employee ('Kyle', 123, 'ktodoran@gmail.com');

    expect(employee.getId() === 123);
});
// Email Test
test ('Gets Email of Employee', () => {
    const employee = new Employee ('Kyle', 123, 'ktodoran@gmail.com');

    expect(employee.getEmail() === expect.any(String));
});
// Position Test
test ('Gets Position of Employee', () => {
    const employee = new Employee ('Kyle', 123, 'ktodoran@gmail.com');

    expect(employee.getPosition()).toEqual('Employee');
});