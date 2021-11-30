describe('Log test', () => {

    test('Validate login with proper data', ()=>{
        // AAA
        console.log('Validate login with proper data')

        //Assert
        expect(4).toBe(4)
    })
    test('Validate login with wrong data', ()=>{
         // AAA
         console.log('Validate login with wrong data')
         expect(4).toBe(4)
    })
    test('Validate forgot password', ()=>{
         // AAA
         console.log('Validate forgot password')
         obje = {
             'age': 21,
             'userCode': 123124312421321
         }
         expect(obje.age).toEqual(21)
         expect(obje.userCode).toEqual(expect.anything())
    })

});