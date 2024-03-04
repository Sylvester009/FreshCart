const product = [
  {
    id: 0,
    image:"images/product-1.jpg",
    title:"Nude Sneaks by Doir",
    price: 75,
    quantity: 1,
  },
  {
    id: 1,
    image:"images/product-2.jpg",
    title:"Green Coverse All-star",
    price: 45,
    quantity: 1,
  },
  {
    id: 2,
    image:"images/product-3.jpg",
    title:"Rope Sandal heels by Aidoo",
    price: 68,
    quantity: 1,
  },
  {
    id: 3,
    image:"images/product-5.jpg",
    title:"Brown Suede For Men",
    price: 105,
    quantity: 1,
  },
  {
    id: 4,
    image:"images/product-6.jpg",
    title:"Brown Steve Madder Cork Heels",
    price: 35,
    quantity: 1,
  },
  {
    id: 5,
    image:"images/product-7.jpg",
    title:"Monk Strap by Louis Vittin",
    price: 95,
    quantity: 1,
  },
  {
    id: 6,
    image:"images/product-8.jpg",
    title:"Court heels by Grogeous Feet",
    price: 85,
    quantity: 1,
  },
  {
    id:7,
    image:"images/product-9.jpg",
    title:"Chug boot",
    price: 130,
    quantity: 1,
  },
  {
    id: 8,
    image:"images/product-4.jpg",
    title:"Blue Fall Coverse",
    price: 77,
    quantity: 1,
  },
  {
    id: 9,
    image:"images/product-11.jpg",
    title:"Tiger Print Fall Ankle Boot",
    price: 55,
    quantity: 1,
  },
  {
    id: 10,
    image:"images/product-14.jpg",
    title:"Rainwater Espadrilles Sandals",
    price: 15,
    quantity: 1,
  },
  {
    id: 11,
    image:"images/product-10.jpg",
    title:"Lug Sole Lace-up Boots",
    price: 38,
    quantity: 1,
  },
  {
    id: 12,
    image:"images/product-16.jpg",
    title:" Blue Fall Espadrilles by Chanels",
    price: 77,
    quantity: 1,
  },
  {
    id: 13,
    image:"images/product-12.jpg",
    title:"Black Leather Boots",
    price: 95,
    quantity: 1,
  },
  {
    id: 14,
    image:"images/product-15.jpg",
    title:"White Lace up Espadrilles",
    price: 23,
    quantity: 1,
  },
  {
    id: 15,
    image:"images/product-13.jpg",
    title:"Lug Sole Ankle boots by Clerks",
    price: 61,
    quantity: 1,
  }
];

const categories = [...(product.map((item)=> {return item}))]
let i=0;
document.getElementById('products').innerHTML = categories.map((item)=> 
{
  let {image, title, price,} = item;
  return(
   `<div class='product_box'>
      <div class='product_img'>
        <img class='images' src= "${image}"/>
      </div>
      <div class='product_footer'>
        <p>${title}</p>
        <h3> $${price}.00</h3>`+
        "<button onclick='addToCart("+ (i++) +")'>Add to Cart</button>" +
      `</div>
    </div>`
  )
}) .join('');

let cart=[];
let totalCount=0;

function addToCart(a) {
  const selectedProduct = categories[a];
  const cartProduct = cart.findIndex((product)=> product.id=== selectedProduct.id);
  if (cartProduct === -1) {
    cart.push({...selectedProduct, count: 1});
  } else {
    cart[cartProduct].count++;
  }
    totalCount++;
    displayCart();  
}
function deleteCartItem(id){
  const deleteProduct = cart.findIndex((product)=> product.id===id);
  if(deleteProduct !== -1) {
    if(cart[deleteProduct].count > 1){
      cart[deleteProduct].count--;
    } else {
      cart.splice(deleteProduct, 1);
    }
  }
  totalCount--;
  displayCart();
}


function displayCart (){
  let j = 0; total=0;
  document.getElementById('count').innerHTML = totalCount;
  if(cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty" ;
    document.getElementById('total').innerHTML="$ "+0+".00"
  }
  else {
    document.getElementById ("cartItem").innerHTML = cart.map((items)=>
    {
      var {image, title, price, count, id} =items;

      total+=price * count;
      document.getElementById('total').innerHTML = "$"+total+".00";
      return  `<div class='cart-item'>
          <div class="cart-img">
            <img class="cartimg" src='${image}'>
          </div>
          <p style= 'font-size: 12px;' >${title}</p>
          <p style= 'font-size: 12px;' > x ${count}</p>
          <h2 style= 'font-size: 15px;' > $${price * count}.00</h2> 
          <i class='fa-solid fa-trash' onclick='deleteCartItem(${id})'></i>
          </div>`;
      
    }).join("");
  }
}
