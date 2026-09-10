import { getProductById } from "./api.js";

export function displayProducts(products) {
  const container = document.getElementById("products-container");
  container.addEventListener("click", async function (event) {
    const productCard = event.target.closest(".product-card");
    if (!productCard) return;
    const productId = productCard.dataset.id;
    try {
      const product = await getProductById(productId);
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product-detail.html";
    } catch (error) {
      alert(`Unable to load product: ${error.message}`);
    }
  });

  products.forEach(function (product) {
    container.innerHTML += `
            <div class="col-md-4 col-lg-3">
                <div class="card h-100 product-card" data-id="${product.id}">

                    <img
                        src="${product.image}"
                        class="card-img-top p-3"
                        style="height: 250px; object-fit: contain;"
                    >
                    
                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${product.title}
                        </h5>

                        <p class="card-text fw-bold">
                            $${product.price}
                        </p>

                    </div>

                </div>

            </div>
        `;
  });
}
