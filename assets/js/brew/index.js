// Initialize the cartItems array by retrieving it from localStorage
var cartItems = JSON.parse(localStorage.getItem('cartItems')) ||  [
    { id: 1, name: 'Coffee Beans', price: 10.99, quantity: 2 },
    { id: 2, name: 'Tea Leaves', price: 7.99, quantity: 1 },
];

// Function to save the cart items to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to update the cart section on the webpage
function updateCartSection() {
    // Update the cart section only if it exists on the current page
    var cartSection = document.getElementById("cartSection");
    if (cartSection) {
        var cartContent = "<h3>Shopping Cart</h3><ul>";

        // Iterate through the items in the cart and display them
        for (var i = 0; i < cartItems.length; i++) {
            cartContent += "<li>" + cartItems[i].name + " - ₹" + cartItems[i].price.toFixed(2) + "</li>";
        }

        cartContent += "</ul>";
        cartSection.innerHTML = cartContent;
    }
}

// JavaScript function to handle the button click event
function addItemToCart(itemName, itemPrice) {
    // Perform any cart update logic here (e.g., add item to cart array, update total, etc.)
    var newItem = { name: itemName, price: itemPrice };
    cartItems.push(newItem);

    // Save the updated cart to localStorage
    saveCartToLocalStorage();

    // Update the cart section on the current page
    updateCartSection();

    // Redirect to the cart page
    window.location.href = "/cart"; // Update with your actual cart page URL

    // You can also show a message indicating that the item has been added to the cart
    alert(itemName + " has been added to the cart!");
}

// Load the cart items from localStorage when the page loads
updateCartSection();
