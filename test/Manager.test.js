const Manager = require ('../lib/Manager.js');

// Manager Object Test
test ('Creates Manager Object', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.name === 'Captain America');
    expect(manager.id === expect.any(Number));
    expect(manager.email === expect.stringContaining('@'));
});
// Name Test
test ('Gets Name of Manager', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getName() === 'Captain America');
});
// Id Test
test ('Gets ID of Manager', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getId() === 1776);
});
// Email Test
test ('Gets Email of Manager', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getEmail() === expect.stringContaining('@'));
});
// Position Test
test ('Gets Position of Manager', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getPosition() === 'Manager');
});

//Phone Number Test - Specific to Manager Position
test ('Get Phone Number', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getPhoneNumber() === expect.any(Number));
});