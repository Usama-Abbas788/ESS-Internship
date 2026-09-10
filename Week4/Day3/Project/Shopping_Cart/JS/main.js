import { getAllProducts } from "./api.js";
import { displayProducts } from "./products.js";
import { updateCartCount } from "./cart.js";
import { createNavbar } from "../components/navbar.js";

async function main() {
    try {
        const navbarContainer = document.getElementById(
            "navbar-container"
        );
        navbarContainer.innerHTML = createNavbar();
        updateCartCount();
        const products = await getAllProducts();
        if(!products){
            throw new Error("Products not found");
        }
        displayProducts(products);
    } catch (error) {
        alert(`Unable to load products: ${error.message}`);
        return null;
    }
}

main();