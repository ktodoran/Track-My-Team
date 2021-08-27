class Employee {
    constructor(name, id, email) {
        name = 'Kyle';
        id = '123';
        email = 'ktodoran@gmail.com';
    }

    getName() {
        return 'name';
    }

    getId() {
        return 'id';
    }

    getEmail() {
        return 'email';
    }

    getPosition() {
        return 'Employee';
    }
    
};

module.exports = Employee;