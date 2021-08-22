const Manager = require ('../lib/Manager');

// Manager Object Test
test ('creates a manager object', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.name).toBe('Captain America');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
});
// Name Test
test ('gets name of manager', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getName()).toBe('Captain America');
});
// Id Test
test ('gets id of manager', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getId()).toBe(1776);
});
// Email Test
test ('gets email of manager', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});
// Position Test
test ('gets role of manager', () => {
    const manager = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getRole()).toEqual('Manager');
});

//Phone Number Test - Specific to Manager Position
test ('Get Phone Number', () => {
    const phoneNumber = new Manager('Captain America', 1776, 'captainamerica@theavengers.com');

    expect(manager.getPhoneNumber().toEqual(expect.any(Number)));
});