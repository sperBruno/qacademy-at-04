const producto = require("./producto");
const tienda = require("./tienda");

describe("Tienda tests", () => {
  test("Calcular total ", () => {
    //Arrange
    const tiendaPepito = new tienda("pepito");
    tiendaPepito.addProduct(new producto(1, "Pan", 1));
    tiendaPepito.addProduct(new producto(1, "Fideos", 5));
    tiendaPepito.addProduct(new producto(1, "Bolsa de leche", 6));

    const totalEsperado = 12;
    //Act
    const totalActual = tiendaPepito.getTotal();

    //Assert

    expect(totalActual).toBe(totalEsperado);
  });

  test("Test to create invoice ", () => {
    // Arrange
    const tiendaPepito = new tienda("pepito");
    tiendaPepito.addProduct(new producto(1, "Pan", 1));
    tiendaPepito.addProduct(new producto(1, "Fideos", 5));
    tiendaPepito.addProduct(new producto(1, "Bolsa de leche", 6));
    const totalEsperado = 12;
    const facturaEspera =
      "1 - Pan - Bs 1\n1 - Fideos - Bs 5\n1 - Bolsa de leche - Bs 6\nTotal - Bs 12";

    // Act
    const facturaActual = tiendaPepito.getFactura();
    const total = tiendaPepito.getTotal();
    // Assert
    expect(total).toBe(totalEsperado);
    expect(facturaActual).toBe(facturaEspera);
  });

  test("Get Factura with items number ", () => {
      // Arrange
    const tiendaPepito = new tienda("pepito");
    tiendaPepito.addProduct(new producto(3, "Pan", 1));
    tiendaPepito.addProduct(new producto(2, "Fideos", 5));
    tiendaPepito.addProduct(new producto(1, "Bolsa de leche", 6));
    const facturaEspera =
    "3 - Pan - Bs 1\n2 - Fideos - Bs 5\n1 - Bolsa de leche - Bs 6\nTotal - Bs 19";

    // Act
    const facturaActual = tiendaPepito.getFactura();

    //Assert 
    expect(facturaActual).toBe(facturaEspera)
  });
});
