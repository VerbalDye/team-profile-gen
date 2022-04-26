const Engineer = require('../lib/Engineer');

test('create the engineer object', () => {
    const engineer = new Engineer('Garfield', 3, 'lasagna@orange.cat', 'OdieDroolz');

    expect(engineer.name).toBe('Garfield');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('lasagna@orange.cat');
    expect(engineer.github).toBe('OdieDroolz');
});

test('engineer methods test', () => {
    const engineer = new Engineer('Pearl', 2, 'daddiesgirl@mammal.sea', 'BreathTheAir3');

    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('BreathTheAir3');
})