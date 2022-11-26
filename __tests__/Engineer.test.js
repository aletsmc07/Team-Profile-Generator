const Engineer = require('../lib/Engineer');

test('Expect setName to iqual Name', () => {
    let setName = 'Alejandro';
    const engineer = new Engineer(setName);
    expect(engineer.name).toBe(setName)
});