// Get The Quantity Field
const getQuentityField = (fieldId) => {
  const quentityStr = document.getElementById(fieldId).innerText;
  const quentity = Number(quentityStr);
  return quentity;
};

// Get Inner Text
const getInnerText = (fieldId) => {
  const innerTxt = document.getElementById(fieldId).innerText;
  return innerTxt;
};

// Se The Quantity
const setQuentity = (fieldId, value) => {
  const quentityField = document.getElementById(fieldId);
  quentityField.innerText = value;
};

// Add The Quantity
const addBtn = (btnId, quentityFieldId) => {
  document.getElementById(btnId).addEventListener("click", () => {
    let quentity = getQuentityField(quentityFieldId);
    quentity++;
    setQuentity(quentityFieldId, quentity);
  });
};

// Remove The Quantity Field
const removeBtn = (btnId, quentityFieldId) => {
  document.getElementById(btnId).addEventListener("click", () => {
    let quentity = getQuentityField(quentityFieldId);
    if (quentity > 0) {
      quentity--;
      setQuentity(quentityFieldId, quentity);
    } else {
      alert("You didn't add any product yet");
    }
  });
};

// Cart Container
const cartWrapper = document.getElementById("cart-products");

// ADD To Cart
const addToCart = (
  cartBtnId,
  quantityFieldId,
  priceFieldId,
  productTitle,
  productImg,
  cartTotlaPrice
) => {
  document.getElementById(cartBtnId).addEventListener("click", () => {
    const quantity = getQuentityField(quantityFieldId);
    const price = getQuentityField(priceFieldId);
    const totalPrice = quantity * price;
    const singleProductDiv = document.createElement("div");
    singleProductDiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "py-2",
      "mb-4"
    );
    const title = getInnerText(productTitle);
    const imgLink = document.getElementById(productImg).getAttribute("src");

    singleProductDiv.innerHTML = `
    <img src="${imgLink}" class="w-10 block rounded-md" alt="">
    <h2 class="txt-xl font-semibold">${title}</h2>
    <h4 class="txt-xl font-semibold">${quantity}</h4>
    <h5 class="txt-xl font-semibold">${totalPrice}</h5>
    <button class="croos-btn"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
    `;
    cartWrapper.appendChild(singleProductDiv);
    const cartCurrent = getQuentityField(cartTotlaPrice);
    const cartTotal = cartCurrent + totalPrice;
    setQuentity(cartTotlaPrice, cartTotal);
  });
};
