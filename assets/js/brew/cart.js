
const cartItems = [
    { id: 1, name: 'Coffee Beans', price: 10.99, quantity: 2 },
    { id: 2, name: 'Tea Leaves', price: 7.99, quantity: 1 },
];

document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    displayCartItems();

    
    updateTotalPrice();

    function displayCartItems() {
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>${item.name} - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}</p>
                <button onclick="removeItem(${item.id})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    function updateTotalPrice() {
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});

function removeItem(itemId) {
    console.log(`Item with ID ${itemId} removed from the cart.`);
}
