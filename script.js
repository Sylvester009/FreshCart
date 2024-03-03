const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "Haldiram's Sev Bhujia",
    productImage: "images/product-img-1.jpg",
    category: "Snacks & Munchies",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 18
  },
  {
    id: 2,
    name: "NutriChoice Digestive",
    productImage: "images/product-img-2.jpg",
    category: "Bakery & Biscuits",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 24
  },
  {
    id: 3,
    name: "Cadbury Chocolate",
    productImage: "images/product-img-3.jpg",
    category: "Bakery & Biscuits",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 18
  },
  {
    id: 4,
    name: "Onion Flavour Potato",
    productImage: "images/product-img-4.jpg",
    category: "Snacks & Munchies",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 24
  },
  {
    id: 5,
    name: "Salted Instant Popcorn",
    productImage: "images/product-img-5.jpg",
    category: "Instant Food",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 18
  },
  {
    id: 6,
    name: "Blueberry Greek Yogurt",
    productImage: "images/product-img-6.jpg",
    category: "Dairy, Bread & Eggs",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 18
  },
  {
    id: 7,
    name: "Britannia Cheese Slices",
    productImage: "images/product-img-7.jpg",
    category: "Dairy, Bread & Eggs<",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 30
  },
  {
    id: 8,
    name: "Kellogg's Cereals",
    productImage: "images/product-img-8.jpg",
    category: "Instant Food",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 48
  },
  {
    id: 9,
    name: "Slurrp Millet Chocolate",
    productImage: "images/product-img-9.jpg",
    category: "Snacks & Munchies",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 25
  },
  {
    id: 10,
    name: "Amul Butter - 500 g",
    productImage: "images/product-img-10.jpg",
    category: "Dairy, Bread & Eggs",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 36
  },
  {
    id: 11,
    name: "Roast Ground Coffee",
    productImage: "images/product-img-11.jpg",
    category: "Tea, Coffee & Drinks",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 24
  },
  {
    id: 12,
    name: "Crushed Tomatoes",
    productImage: "images/product-img-12.jpg",
    category: "Fruits & Vegetables",
    starImage: "images/star_full_icon.png",
    halfStarImage: "images/star_half_icon.png",
    starFigure: "4.5(149)",
    price: 13
  },
];

products.forEach(
  ({
    name,
    id,
    price,
    category,
    productImage,
    starImage,
    halfStarImage,
    starFigure,
  }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
                    <img src="${productImage}" alt="product1" class="product-img">
                    <span class="snack-span">${category}</span>
                    <p class="pro-2p">${name}</p>
                    <div class="stars">
                        <img src="${starImage}" alt="star_full" class="star">
                        <img src="${starImage}" alt="star_full" class="star">
                        <img src="${starImage}" alt="star_full" class="star">
                        <img src="${starImage}" alt="star_full" class="star">
                        <img src="${halfStarImage}" alt="star_half" class="star">
                        <span>${starFigure}</span>
                    </div>
                    <div class="pro_price">
                        <span>$${price}</span>
                        <button 
          id="${id}" type ="button"
          class="btn add-to-cart-btn">+ Add
        </button>
                    </div>
      </div>
    `;
  }
);

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] =
        (totalCountPerProduct[dessert.id] || 0) + 1;
    });

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(
      `product-count-for-id${id}`
    );

    currentProductCount > 1
      ? (currentProductCountSpan.textContent = `${currentProductCount}x`)
      : (productsContainer.innerHTML += `
      <div id=dessert${id} class="product">
        <p>
          <span class="product-count" id=product-count-for-id${id}></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `);
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }
}

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), products);
    totalNumberOfItems.textContent = cart.getCounts();
    cart.calculateTotal();
  });
});

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});

clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
