
var cart = {}; // Initialize an empty object to store cart items

    function addToCart(productName, price) {
      if (cart[productName]) {
        cart[productName].quantity++; // Increment the quantity if the item is already in the cart
      } else {
        cart[productName] = {
          quantity: 1,
          price: price
        }; // Add the item to the cart with quantity and price
      }

      updateCartDisplay();
    }

    function cancelItem(productName) {
      if (cart[productName]) {
        cart[productName].quantity--; // Decrement the quantity of the item

        if (cart[productName].quantity <= 0) {
          delete cart[productName]; // Remove the item from the cart if the quantity reaches zero
        }
      }

      updateCartDisplay();
    }

    function updateCartDisplay() {
      var cartItems = document.getElementById("cart-list");
      var totalPrice = 0;
      cartItems.innerHTML = ""; // Clear the cart items list

      for (var item in cart) {
        var listItem = document.createElement("li");
        listItem.textContent = item + " - " + cart[item].quantity;
        cartItems.appendChild(listItem);

        totalPrice += cart[item].price * cart[item].quantity;
      }

      var totalPriceDisplay = "RM" + totalPrice.toFixed(2); // Add "RM" at the front
      document.getElementById("total-price").textContent = totalPriceDisplay;
    }

    // script.js
// Example cart data
var cartItemsData = [
  {
      id: 1,
      name: 'Tomato Cherry',
      price: 2.50,
      quantity: 1
  },
  {
      id: 2,
      name: 'Asparagus',
      price: 3.00,
      quantity: 1
  }
  // Add more cart items as needed
];

function displayCartItems() {
  var cartItemsContainer = document.getElementById('cart-items');

  // Clear any existing content
  cartItemsContainer.innerHTML = '';

  // Loop through each cart item and create HTML elements
  for (var i = 0; i < cartItemsData.length; i++) {
      var item = cartItemsData[i];
      var cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          <p>${item.name}</p>
          <p>Price: $${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
      `;
      cartItemsContainer.appendChild(cartItem);
  }
}
 
localStorage.setItem("cartItems", JSON.stringify(cartItems));

// Call the function to display cart items when the page loads
displayCartItems();

function checkout() {
  // Process the checkout logic (e.g., calculate the total price, submit the order)
  alert('Checkout completed!');
}
