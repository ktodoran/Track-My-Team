const Engineer = require ('../lib/Engineer.js');

// Engineer Object Test
test ('Creates Engineer Object', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.name === 'Patrick');
    expect(engineer.id === expect.any(Number));
    expect(engineer.email === expect.stringContaining('@'));
    expect(engineer.github === expect.any(String));
});
// Name Test
test ('Gets Name of Engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getName() === 'Patrick');
});
// Id Test
test ('Gets ID of Engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getId() === 123);
});
// Email Test
test ('Gets Email of Engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getEmail() === expect.stringContaining('@'));
});
// Position Test
test ('Gets Position of Engineer', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getPosition() === 'Engineer');
});
// GitHub Test - Specific to Engineer Position
test ('Gets GitHub User - Role Specific', () => {
    const engineer = new Engineer ('Patrick', 456, 'patrick@test.com');

    expect(engineer.getGitHub() === expect.any(String));
});