const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super (name, id, email)
            this.id = 123;
        this.github = 'github';
    }

    getGitHub() {
        return this.github;
    }
    
    getPosition() {
        return 'Engineer';
    }
    
};

module.exports = Engineer;