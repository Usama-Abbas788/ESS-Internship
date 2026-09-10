const CART_KEY = "cart";

export function getCart() {
  const cartData = localStorage.getItem(CART_KEY);
  if (!cartData) {
    return [];
  }
  return JSON.parse(cartData);
}

export function addToCart(product) {
  const cart = getCart();
  const existingProduct = cart.find((item) => item.id == product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (!cartCount) return;
  cartCount.innerHTML = getCartCount();
}

export function increaseQuantity(productId) {
  const cart = getCart();
  const product = cart.find((product) => product.id == productId);
  if (!product) {
    return;
  }
  product.quantity += 1;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function decreaseQuantity(productId) {
  const cart = getCart();

  const product = cart.find((item) => item.id === Number(productId));

  if (!product) return;

  if (product.quantity > 1) {
    product.quantity -= 1;
  } else {
    const index = cart.findIndex((product) => product.id == productId);

    cart.splice(index, 1);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
