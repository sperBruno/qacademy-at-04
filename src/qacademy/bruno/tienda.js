// const producto = require("./producto")

const tienda = class Tienda {
    constructor(name) {
        this.name = name;
        this.totalCost = 0;
    }

    addProduct(producto) {
     console.log(producto.name)
        this.totalCost += producto.cost
    }

    getTotal() {
        return this.totalCost;
    }
}

module.exports = tienda