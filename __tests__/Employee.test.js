const Employee = require('../lib/Employee');

test('create an employee class', () => {
    const employee = new Employee('John', 0,'good@email.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('good@email.com');
});

test('test employee methods', () => {
    const employee = new Employee('Cheryl', 2, 'ope@geedang.com');

    expect(employee.getName()).toBe('Cheryl');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toBe('ope@geedang.com');
    expect(employee.getRole()).toBe('Employee');
});