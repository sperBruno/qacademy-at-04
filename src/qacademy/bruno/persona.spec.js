const person = require("./persona")

describe('Person tests', () => {
    test('Test for get full name', () => {
        //Arrange
        const bruno = new person('bruno', 'barrios', 28, 123123)
        expectedResult = "Bruno Barrios"

        //Act

        const actual = bruno.getFullName();
        //Assert

        expect(actual).toBe(expectedResult)
    })

    test('Export Person info to json', () => {
        //Arrange
        const miguel = new person('miguel', 'delgadillo', 12, 23123123, 123123)
        
        const expectedResult = "{'firstName': 'miguel', 'LastName': 'delgadillo', 'age':12, 'ci': 23123123, 'telf': 123123}"
        //Act

        const actual = miguel.toJson()
        //Assert

        expect(actual).toBe(expectedResult)
    })
})