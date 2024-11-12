export const getTotalQuantity = (array) => {
  let amount = 0;
  array.forEach((item) => {
    amount += item.quantity;
  });
  return amount;
};

export const getTotalPrice = (array) => {
  let totalPrice = 0;
  array.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });
  return totalPrice;
};
