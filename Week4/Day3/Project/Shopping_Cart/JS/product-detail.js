import { createNavbar } from "../components/navbar.js";
import { addToCart, updateCartCount } from "./cart.js";

const navbarContainer = document.getElementById("navbar-container");
navbarContainer.innerHTML = createNavbar();
updateCartCount();

const productData = localStorage.getItem("selectedProduct");
if (!productData) {
    alert("Unable to load product or product is not selected");
} else {
    const product = JSON.parse(productData);
    displayProduct(product);
}
function displayProduct(product) {
  const container = document.getElementById("product-detail");
  container.innerHTML = `
            <div class="row">

            <div class="col-md-6 text-center">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="img-fluid"
                    style="height: 450px; object-fit: contain;"
                >

            </div>


            <div class="col-md-6">

                <h1>
                    ${product.title}
                </h1>

                <h3 class="text-primary">
                    $${product.price}
                </h3>

                <p>
                    ${product.description}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${product.category}
                </p>

                <button
                    id="add-to-cart"
                    class="btn btn-primary"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    `;
    console.log(product);
    document.getElementById("add-to-cart").addEventListener("click", function(){
        addToCart(product);
        updateCartCount();
        window.location.href = "cart.html";
    })
}
