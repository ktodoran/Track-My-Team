class Manager {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getPhoneNumber(){
        return this.phoneNumber;
    }

    getPosition() {
        return 'Manager';
    }
    
};

module.exports = Manager;