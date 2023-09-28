const descuentoSinDescuento = {
    calcularDescuento: (precio) => 0,
  };
  
  const descuentoDiezPorCiento = {
    calcularDescuento: (precio) => precio * 0.1,
  };
  
  const descuentoVeintePorCiento = {
    calcularDescuento: (precio) => precio * 0.2,
  };
  
  class CarritoDeCompras {
    constructor(descuentoStrategy) {
      this.items = [];
      this.descuentoStrategy = descuentoStrategy;
    }
  
    agregarItem(nombre, precio) {
      this.items.push({ nombre, precio });
    }
  
    calcularTotal() {
      const precioTotal = this.items.reduce((total, item) => total + item.precio, 0);
      const descuento = this.descuentoStrategy.calcularDescuento(precioTotal);
      return precioTotal - descuento;
    }
  }
  

  const carritoSinDescuento = new CarritoDeCompras(descuentoSinDescuento);
  carritoSinDescuento.agregarItem("Producto 1", 100);
  carritoSinDescuento.agregarItem("Producto 2", 50);
  
  const carritoConDescuentoDiezPorCiento = new CarritoDeCompras(descuentoDiezPorCiento);
  carritoConDescuentoDiezPorCiento.agregarItem("Producto 1", 100);
  carritoConDescuentoDiezPorCiento.agregarItem("Producto 2", 50);
  
  console.log("Total en el carrito sin descuento:", carritoSinDescuento.calcularTotal());
  console.log("Total en el carrito con descuento del 10%:", carritoConDescuentoDiezPorCiento.calcularTotal()); 
  