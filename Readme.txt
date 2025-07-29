# JS Flex - Segunda Entrega

## Descripción

Este proyecto es una tienda online simple desarrollada como segunda entrega para el curso de JavaScript de CoderHouse. El usuario puede ver una lista de productos, agregarlos a un carrito, eliminar productos, vaciar el carrito o finalizar la compra. El total de la compra se actualiza automáticamente.

## Estructura de archivos

- `index.html`: estructura principal del sitio.
- `styles.css`: estilos personalizados.
- `index.js`: lógica y manejo del DOM y carrito.

## Funcionalidades principales

- **Visualización dinámica de productos:** Los productos se generan automáticamente a partir de un array de objetos usando JavaScript y el DOM.
- **Carrito persistente:** Los productos agregados al carrito se almacenan en localStorage para que persistan entre recargas de página.
- **Interacciones sin prompts ni código inline:** Todas las acciones (agregar, eliminar, vaciar, finalizar compra) se manejan mediante botones y eventos en JS.
- **Cálculo automático del total:** El carrito muestra el total actualizado de la compra.
- **Botón "Finalizar compra":** Informa al usuario el total gastado y luego vacía el carrito.

## Para probar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en el navegador.
3. Interactuar con los productos y el carrito.

## Comentarios personales

La mayor dificultad fue lograr que los eventos se asignen correctamente después de cada actualización del carrito, pero lo resolví usando `addEventListener` cada vez que se renderiza el carrito. Aprendí la importancia de separar el código y no dejar nada en el HTML, usando solo JS para la lógica.

Muchas gracias!!


