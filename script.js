const searchInput = document.getElementById('searchInput');
const productsContainer = document.getElementById('productsContainer');
const products = Array.from(productsContainer.getElementsByClassName('product'));

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  products.forEach(product => {
    const productName = product.textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
