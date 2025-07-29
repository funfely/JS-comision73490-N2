const productos = [
  { id: 1, nombre: "Camiseta", precio: 3200, imagen: "/home/funfely/Documentos/CoderHouse/JS-comision73490/JS-flex-N2/imagenes/camisetas.png" },
  { id: 2, nombre: "Pantalón", precio: 5100, imagen: "/home/funfely/Documentos/CoderHouse/JS-comision73490/JS-flex-N2/imagenes/Pantalones.png" },
  { id: 3, nombre: "Zapatillas", precio: 9000, imagen: "/home/funfely/Documentos/CoderHouse/JS-comision73490/JS-flex-N2/imagenes/zapatillas.png" }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button id="agregar${producto.id}">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);

    document.getElementById(`agregar${producto.id}`)
      .addEventListener("click", () => agregarAlCarrito(producto.id));
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(prod => prod.id === id);
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  const contenedorCarrito = document.getElementById("carrito");
  contenedorCarrito.innerHTML = "<h2>Carrito</h2>";

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML += "<p>El carrito está vacío</p>";
    return;
  }

  let total = 0;

  carrito.forEach((item, index) => {
    contenedorCarrito.innerHTML += `
      <div>
        <span>${item.nombre} - $${item.precio}</span>
        <button class="eliminar" data-index="${index}">Eliminar</button>
      </div>
    `;
    total += item.precio;
  });

  contenedorCarrito.innerHTML += `<p><strong>Total: $${total}</strong></p>`;
  contenedorCarrito.innerHTML += `<button id="vaciarCarrito">Vaciar carrito</button>`;
  contenedorCarrito.innerHTML += `<button id="finalizarCompra">Finalizar compra</button>`;


  // Asignar evento eliminar a cada botón (solo una vez)
  document.querySelectorAll(".eliminar").forEach(btn => {
    btn.addEventListener("click", (e) => {
      eliminarDelCarrito(e.target.dataset.index);
    });
  });

  // Asignar evento al botón Vaciar Carrito (sólo si existe)
  const btnVaciar = document.getElementById("vaciarCarrito");
  if (btnVaciar) {
    btnVaciar.addEventListener("click", vaciarCarrito);
  }
    const btnFinalizar = document.getElementById("finalizarCompra");
  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", finalizarCompra);
  }
}

function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  let total = carrito.reduce((sum, item) => sum + item.precio, 0);
  alert(`El total de su compra es: $${total}`);
  vaciarCarrito();
}

mostrarProductos();
mostrarCarrito();
