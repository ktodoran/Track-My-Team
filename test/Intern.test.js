const Intern =  require ('../lib/Intern.js');

// Intern Object Test
test ('Creates Intern Object', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.name === 'Darth Vader');
    expect(intern.id === expect.any(Number));
    expect(intern.email === expect.stringContaining('@'));
});
// Name Test
test ('Gets Intern Name', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getName() === 'Darth Vader');
});
// Id Test
test ('gets ID of Intern', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getId() === 654);
});
// Email Test
test ('Gets Email of Intern', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getEmail() === expect.stringContaining('@'));
});
// Position Test
test ('Gets Position for Intern', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getPosition() === 'Intern');
});
// test for school - role specific
test ('Gets Intern School - Role Specific', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getSchool() === expect.any(String));
});