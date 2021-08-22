const Employee = require('../dist/Employee');

//Test for Employee Object
test ('Creates an Employee Object', () => {
    const employee = new Employee ('Kyle');

    expect(employee.name).toBe('Kyle');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});
//Name Test
test('Get name', ()=> {
    const employee = new Employee ('Kyle', 123, 'ktodoran@gmail.com');

    expect(employee.getName().toEqual('Kyle'));
});
// Id Test
test ('gets ID of employee', () => {
    const employee = new Employee ('Kyle', 123, 'ktodoran@gmail.com');

    expect(employee.getId()).toEqual(123);
});
// Email Test
test ('gets email of employee', () => {
    const employee = new Employee ('Kyle', 123, 'ktodoran@gmail.com');

    expect(employee.getEmail()).toEqual(employee.email);
});
// Position Test
test ('gets role of employee', () => {
    const employee = new Employee ('Kyle', 123, 'ktodoran@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});