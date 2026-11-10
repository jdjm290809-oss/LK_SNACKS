let cart = 0;
  function addToCart(product){
    cart++;
    document.getElementById('cartCount').textContent = cart;
    alert(product + ' se agregó a tu carrito. Productos seleccionados: ' + cart);
  }
  function showCart(){
    alert(cart === 0 ? 'Tu carrito está vacío.' : 'Tienes ' + cart + ' producto(s) agregado(s).');
  }
  document.getElementById('opinionForm').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('nombre').value.trim();
    document.getElementById('formMessage').textContent = '¡Gracias, ' + name + '! Tu opinión quedó registrada en esta demostración.';
    this.reset();
  });
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  }));
