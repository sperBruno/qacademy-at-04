const tienda = class Tienda {
  constructor(name) {
    this.name = name;
    this.totalCost = 0;
    this.listItems = new Array();
  }

  addProduct(producto) {
    console.log(producto.name);
    this.listItems.push(producto);
  }

  getTotal() {
    let total = 0;
    for (var i = 0; i < this.listItems.length; i++) {
      total += this.listItems[i].number * this.listItems[i].cost;
    }
    this.totalCost = total;
    return this.totalCost;
  }

  getFactura() {
    let factura = "";
    for (var i = 0; i < this.listItems.length; i++) {
      factura =
        factura +
        `${this.listItems[i].number} - ${this.listItems[i].name} - Bs ${this.listItems[i].cost}\n`;
    }
    factura = factura + `Total - Bs ${this.getTotal()}`;
    return factura;
  }
};

module.exports = tienda;
