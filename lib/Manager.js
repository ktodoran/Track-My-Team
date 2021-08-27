const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super (name, id, email)
    this.phoneNumber = 'phoneNumber'

    }

    getPhoneNumber(){
        return this.phoneNumber;
    }

    getPosition() {
        return 'Manager';
    }
    
};

module.exports = Manager;