// Add Quentity
addBtn("rose-q-add", "rose-quantity");
addBtn("taddy-q-add", "teddy-quantity");
addBtn("kit-q-add", "kit-quantity");
addBtn("hour-add", "hour-quantity");
// Remove Quentity
removeBtn("rose-q-remove", "rose-quantity");
removeBtn("teddy-q-remove", "teddy-quantity");
removeBtn("kit-q-remove", "kit-quantity");
removeBtn("hour-remove", "hour-quantity");
// ADD To Cart
addToCart(
  "rose-btn",
  "rose-quantity",
  "rose-price",
  "rose",
  "rose-img",
  "cart-total"
);
addToCart(
  "teddy-btn",
  "teddy-quantity",
  "teddy-price",
  "teddy",
  "teddy-img",
  "cart-total"
);
addToCart(
  "kit-btn",
  "kit-quantity",
  "kit-price",
  "kit-kat",
  "kit-img",
  "cart-total"
);
addToCart(
  "room-btn",
  "hour-quantity",
  "hour-price",
  "room",
  "room-img",
  "cart-total"
);

document.getElementById("apply-btn").addEventListener("click", () => {
  const promoCode = document.getElementById("promo-field").value;
  if (promoCode == "DISCO30") {
    const cartTotalPrice = getQuentityField("cart-total");
    const discPrice = cartTotalPrice - cartTotalPrice * 0.3;
    setQuentity("disc-price", discPrice);
    document.getElementById("promo-field").value = "";
  } else {
    alert("Wrong Promo");
  }
});
