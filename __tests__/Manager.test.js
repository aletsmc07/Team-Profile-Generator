const Manager = require('../lib/Manager');

test('Expect setName to iqual Name', () => {
    let setName = 'Alejandro';
    const manager = new Manager(setName);
    expect(manager.name).toBe(setName)
});