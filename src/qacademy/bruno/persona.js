const person = class Person {
    constructor(name, lastname, age, ci, telf) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.ci = ci;
        this.telf = telf;
    }

    getFullName() {
        let capName = this.name.substring(0,1).toUpperCase() + this.name.substring(1)
        let capLastName = this.lastname.substring(0,1).toUpperCase() + this.lastname.substring(1)
        return capName+ " " + capLastName;
    }

    toJson() {
        return `{'firstName': '${this.name}', 'LastName': '${this.lastname}', 'age':${this.age}, 'ci': ${this.ci}, 'telf': ${this.telf}}`;
    }
}

module.exports = person