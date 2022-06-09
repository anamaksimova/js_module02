const Goods = function(price, title, discount) {
  this.price = price;
  this.title = title;
  this.discount = discount;
};

const FoodGoods = function(price, title, discount, ccal) {
  Goods.call(this, price, title, discount);
  this.ccal = ccal;
};

const СlothingGoods = function(price, title, discount, material) {
  Goods.call(this, price, title, discount);
  this.material = material;
};

const TechnicsGoods = function(price, title, discount, type) {
  Goods.call(this, price, title, discount);
  this.type = type;
};

const bread = new FoodGoods(20, 'Bread', 0, 350);
const dress = new СlothingGoods(3000, 'Dress', 20, 'cotton');
const fridge = new TechnicsGoods(50000, 'LG', 0, 'KitchenTech');

const Cart = function(goods = []) {
  this.goods = goods;
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.calculateGoodsPrice = function() {
  this.totalPrice = 0;

  for (const item of this.goods) {
    const {price, title, quantity} = item;
    this.totalPrice += price * quantity;
  }
};
Cart.prototype.addGoods = function({price, title, quantity = 1}) {
  const newItem = {
    title,
    price,
    quantity,
  };
  console.log(newItem);
  this.goods.push(newItem);
  this.increaseCount(quantity);
  this.calculateGoodsPrice();
};
Cart.prototype.getTotalPrice = function() {
  return this.totalPrice;
};
Cart.prototype.increaseCount = function(plusQuantity) {
  this.count += plusQuantity;
};

Cart.prototype.clear = function() {
  this.goods = [];
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function() {
  const itemsStr = JSON.stringify(this.goods);
  console.log(itemsStr);
  console.log('total price: ' + this.totalPrice);
};

const cart = new Cart();

cart.addGoods(bread);
cart.addGoods(dress);
cart.addGoods(fridge);
cart.print();
console.dir('cart: ', cart);
