const Intern =  require ('../lib/Intern');

// test for intern object
test ('creates an intern object', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.name).toBe('Darth Vader');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
});
// test for name
test ('gets name of Intern', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getName()).toBe('Darth Vader');
});
// test for id
test ('gets ID of intern', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getId()).toBe(654);
});
// test for email
test ('gets email of intern', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});
// test for role
test ('gets role of intern', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getRole()).toEqual('Intern');
});
// test for school - role specific
test ('creates an intern object', () => {
    const intern = new Intern('Darth Vader', 654, 'darthvader@theforce.com');

    expect(intern.getSchool()).toEqual(expect.any(String));
});