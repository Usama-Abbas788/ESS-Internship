export const getAllProducts = async function () {
    const response = await fetch(
        "https://fakestoreapi.com/products"
    );

    if (!response.ok) {
        throw new Error(
            `Failed to fetch products. Server returned ${response.status} ${response.statusText}`
        );
    }

    return await response.json();
};
export const getProductById = async function (productId) {
    const products = await getAllProducts();

    const product = products.find(
        product => product.id == productId
    );

    if (!product) {
        throw new Error("Product not found");
    }
    console.log(product);
    return product;
};
