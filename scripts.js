function filtrarZapatos() {
    const checkboxes = document.querySelectorAll('.left-aside input[type="checkbox"]');
    const zapatos = document.querySelectorAll('#content .product');
  
    // Obtenemos las marcas seleccionadas
    const seleccionados = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    // Mostramos solo las marcas seleccionadas
    if (seleccionados.length === 0) {
      zapatos.forEach(zapato => {
        zapato.style.display = 'flex'; // Mostramos todos los zapatos
      });
    } else {
      // Mostramos solo los seleccionados
      zapatos.forEach(zapato => {
        if (seleccionados.includes(zapato.id)) {
          zapato.style.display = 'flex';
        } else {
          zapato.style.display = 'none';
        }
      });
    }
  
  }