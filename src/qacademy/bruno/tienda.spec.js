const producto = require("./producto");
const tienda = require("./tienda");

describe("Tienda tests", () => {
  test("Calcular total ", () => {
    //Arrange
    const tiendaPepito = new tienda("pepito");
    tiendaPepito.addProduct(new producto("Pan", 1));
    tiendaPepito.addProduct(new producto("Fideos", 5));
    tiendaPepito.addProduct(new producto("Bolsa de leche", 6));

    const totalEsperado = 12;
    //Act
    const totalActual = tiendaPepito.getTotal();

    //Assert

    expect(totalActual).toBe(totalEsperado);
  });

  test("Test to create invoice ", () => {
    // Arrange
    const tiendaPepito = new tienda("pepito");
    tiendaPepito.addProduct(new producto("Pan", 1));
    tiendaPepito.addProduct(new producto("Fideos", 5));
    tiendaPepito.addProduct(new producto("Bolsa de leche", 6));
    const totalEsperado = 12;
    const facturaEspera =
      "Pan - Bs 1\nFideos - Bs 5\nBolsa de leche - Bs 6\nTotal - Bs 12";

    // Act
    const facturaActual = tiendaPepito.getFactura();
    const total = tiendaPepito.getTotal();
    // Assert
    expect(total).toBe(totalEsperado);
    expect(facturaActual).toBe(facturaEspera);
  });
});
