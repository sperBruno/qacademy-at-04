const producto = require("./producto")
const tienda = require("./tienda")

describe('Tienda tests', ()=> {
    test('Calcular total ', () => {
        //Arrange
        const tiendaPepito = new tienda("pepito")
        tiendaPepito.addProduct(new producto('Pan', 1))
        tiendaPepito.addProduct(new producto('Fideos', 5))
        tiendaPepito.addProduct(new producto('Bolsa de leche', 6))

        const totalEsperado = 12
        //Act
        const totalActual = tiendaPepito.getTotal()

        //Assert

        expect(totalActual).toBe(totalEsperado)
    })
    
})