const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Billy Joel', 3, 'pianoman@gmail.com', 'New York City');

    expect(intern.name).toBe('Billy Joel');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('pianoman@gmail.com');
    expect(intern.school).toBe('New York City');
});

test('intern methods', () => {
    const intern = new Intern('Phil', 1, 'phil@phil.com', 'Philly');

    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('Philly');
})