import { createNavbar } from "../components/navbar.js";
import {
  getCart,
  getCartCount,
  getCartTotal,
  updateCartCount,
  increaseQuantity,
  decreaseQuantity,
} from "./cart.js";

const cart = getCart();

const navbarContainer = document.getElementById("navbar-container");
navbarContainer.innerHTML = createNavbar();

updateCartCount();

displayCart(cart);

export function displayCart(cart) {
  const container = document.getElementById("cart-container");
  const totalItems = getCartCount();
  const totalPrice = getCartTotal();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <h3>Your cart is empty</h3>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="row">

      <!-- Cart Items -->
      <div class="col-lg-8">

        <div id="cart-items"></div>

      </div>

      <!-- Cart Summary -->
      <div class="col-lg-4">

        <div class="card p-3">

          <h3>Cart Summary</h3>

          <hr>

          <div class="d-flex justify-content-between">
            <span>SubTotal</span>
            <strong>$${totalPrice.toFixed(2)}</strong>
          </div>

          <div class="d-flex justify-content-between mt-3">
            <span>Total Items</span>
            <strong>${totalItems}</strong>
          </div>

          <div class="d-flex justify-content-between mt-3">
            <span>Total Price</span>
            <strong>$${totalPrice.toFixed(2)}</strong>
          </div>

          <button class="btn btn-primary w-100 mt-4">
            Checkout
          </button>

        </div>

      </div>

    </div>
  `;

  // Display products
  const cartItems = document.getElementById("cart-items");
  cartItems.addEventListener("click", function (event) {
    const increaseBtn = event.target.closest(".increase-btn");
    const decreaseBtn = event.target.closest(".decrease-btn");
    if (increaseBtn) {
      const productId = increaseBtn.dataset.id;

      increaseQuantity(productId);

      displayCart(getCart());
      updateCartCount();

      return;
    }

    if (decreaseBtn) {
      const productId = decreaseBtn.dataset.id;

      decreaseQuantity(productId);

      displayCart(getCart());
      updateCartCount();
    }
  });

  cart.forEach(function (product) {
    cartItems.innerHTML += `
      <div class="card mb-3">

        <div class="row g-0">

          <!-- Product Image -->
          <div class="col-md-3">

            <img
              src="${product.image}"
              class="img-fluid rounded-start p-3"
              style="
                height: 180px;
                width: 100%;
                object-fit: contain;
              "
            >

          </div>

          <!-- Product Details -->
          <div class="col-md-9">

            <div class="card-body">

              <h5 class="card-title">
                ${product.title}
              </h5>

              <p class="fw-bold">
                $${totalPrice.toFixed(2)}
              </p>

              <div class="d-flex align-items-center gap-2">
                <span>Quantity:</span>

                <div class="btn-group" role="group">

                  <button
                    class="btn btn-outline-secondary decrease-btn"
                    data-id="${product.id}"
                  >
                    ${
                      product.quantity === 1
                        ? '<ion-icon name="trash-outline"></ion-icon>'
                        : "-"
                    }
                  </button>

                  <span class="btn btn-outline-secondary disabled">
                    ${product.quantity}
                  </span>

                  <button
                    class="btn btn-outline-secondary increase-btn"
                    data-id="${product.id}"
                  >
                    +
                  </button>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    `;
  });
}
