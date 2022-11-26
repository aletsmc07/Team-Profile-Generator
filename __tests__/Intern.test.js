const Intern = require('../lib/Intern');

test('Expect setName to iqual Name', () => {
    let setName = 'Alejandro';
    const intern = new Intern(setName);
    expect(intern.name).toBe(setName)
});