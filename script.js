
let cart = 0;

function addToCart(product) {
  cart++;
  document.getElementById('cartCount').textContent = cart;
  alert(product + ' se agregó a tu carrito. Productos seleccionados: ' + cart);
}

function showCart() {
  alert(cart === 0
    ? 'Tu carrito está vacío.'
    : 'Tienes ' + cart + ' producto(s) agregado(s).');
}

// FORMULARIO DE OPINIONES
// Dejamos que Netlify reciba los datos.
// No utilizar event.preventDefault().

const opinionForm = document.getElementById('opinionForm');

if (opinionForm) {
  opinionForm.addEventListener('submit', function() {
    const name = document.getElementById('nombre').value.trim();
    console.log('Enviando opinión de: ' + name);
  });
}

// MENÚ DE NAVEGACIÓN
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});
