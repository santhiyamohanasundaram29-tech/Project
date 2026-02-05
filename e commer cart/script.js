let cart = new Map();
let products = [];
// Load cart from localStorage
 const savedCart=localStorage.getItem("cart");
if (savedCart) {
  JSON.parse(savedCart).forEach(item => cart.set(item.id, item));
}
// Fetch API-style JSON
async function fetchProducts() {
  const res = await fetch("products-api.json");
  const json = await res.json();
  return json.data;
}
// Save cart
function saveCart() {
  localStorage.setItem("cart", JSON.stringify([...cart.values()]));
}
// Render products
function renderProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products
    .filter(p => p.stock > 0)
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
        <p>Stock: ${p.stock}</p>
        <button onclick="addToCart(${p.id})">Add</button>`;
      productList.appendChild(div);
    });
}
// Add to cart
function addToCart(id) {
  if (cart.has(id)) {
    cart.get(id).qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.set(id, { ...product, qty: 1 });
  }
  saveCart();
  renderCart();
}
// Remove from cart
function removeFromCart(id) {
  cart.delete(id);
  saveCart();
  renderCart();
}
// Render cart + total
function renderCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  const items = [...cart.values()];
  items.forEach(item => {
    const discountedPrice =
      item.price - (item.price * item.discount / 100);
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Qty: ${item.qty}</p>
      <p>Price: ₹${discountedPrice}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button> `;
    cartList.appendChild(div);
  });
  const total = items.reduce((sum, item) => {
    const discounted =
      item.price - (item.price * item.discount / 100);
    return sum + discounted * item.qty;
  }, 0);
  document.getElementById("summary").innerHTML = `
    <h3>Total Amount: ₹${total}</h3>
    <p>Items: ${items.length}</p>`;
}
// Init
(async function init() {
  products = await fetchProducts();
  renderProducts(products);
  renderCart();
})();
