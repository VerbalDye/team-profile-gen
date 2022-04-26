const Manager = require('../lib/Manager');

test('create the manager object', () => {
    const manager = new Manager('Luna', 0, 'luna@crescent.com', 5);

    expect(manager.name).toBe('Luna');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('luna@crescent.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getRole test', () => {
    const manager = new Manager('Pooh', 11, 'honeymunching@bear.haw', 3);

    expect(manager.getRole()).toBe('Manager');
})