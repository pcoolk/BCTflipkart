
function updateTotalPrice() {
    var quantity = document.getElementById("quantity").value;
    var pricePerUnit = 10.00;
    var totalPrice = quantity * pricePerUnit;
    document.getElementById("totalPrice").innerText = "$" + totalPrice.toFixed(2);
  }
  
  function addToCart() {
    var quantity = document.getElementById("quantity").value;
    var totalPrice = quantity * 10.00; 
    var feedbackDiv = document.getElementById("cart-feedback");
    feedbackDiv.innerText = "Added " + quantity + " to cart. Total Price: $" + totalPrice.toFixed(2);
  }
  