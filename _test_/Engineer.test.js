const Engineer = require ('../lib/Engineer');

// Engineer Object Test
test ('creates an engineer object', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.name).toBe('Patrick');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
});
// Name Test
test ('gets name of engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getName()).toEqual('Patrick');
});
// Id Test
test ('gets ID of engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getId()).toBe(456);
});
// Email Test
test ('gets email of engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});
// Position Test
test ('gets role of engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getRole()).toEqual('Engineer');
});
// GitHub Test - Specific to Engineer Position
test ('gets github username of engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});