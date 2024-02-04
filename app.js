document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');

    // Example product data
    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        // Add more products as needed
    ];

    // Display products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="button" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });

    // Example add to cart function
    window.addToCart = (productId) => {
        alert(`Product ${productId} added to cart`);
        // Implement actual cart functionality here
    };
});
