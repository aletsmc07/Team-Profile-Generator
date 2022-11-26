const Employee = require('../lib/Employee');

test('Expect setName to iqual Name', () => {
    let setName = 'Alejandro';
    const employee = new Employee(setName);
    expect(employee.name).toBe(setName)
});