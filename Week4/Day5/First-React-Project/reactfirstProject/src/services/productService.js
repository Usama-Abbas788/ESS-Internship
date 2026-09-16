export async function getAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function getProductById(productId){
    const products= await getAllProducts();
    const product = products.find(product => productId == product.id)
    if(!product){
        throw new Error("Failed to fetch product")
    }
    return product;
}
