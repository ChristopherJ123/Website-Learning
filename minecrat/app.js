let quantity = document.querySelector('.quantity');
let shopping_cart_image = document.querySelector('.login-item-image');
let close_cart = document.querySelector('.close-cart');
let body = document.querySelector('body');
let shop_container = document.querySelector('.shop-container');
let cart_list = document.querySelector('.cart-list');

let products = [
    {
        id: 1,
        name: "Dirt Block",
        price: 0.99,
        image: "Dirt.webp"
    },
    {
        id: 2,
        name: "Stone Block",
        price: 9.99,
        image: "Stone.webp"
    },
    {
        id: 3,
        name: "Gold Block",
        price: 14.99,
        image: "Gold.webp"
    },
    {
        id: 4,
        name: "Diamond Block",
        price: 24.99,
        image: "Diamond.webp"
    },
    {
        id: 5,
        name: "Netherite Block",
        price: 49.99,
        image: "Netherite.webp"
    }
];

let count = 0;
let items_quantity = [];

function initApp() {
    products.forEach((value, id) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('shop-items')
        newDiv.innerHTML = 
        `
        <div class="shop-item" onclick="updateCart(${id}, 1)">
        <div class="shop-item-image">
          <img src="assets/${value.image}" alt="Dirt" class="shop-image" />
        </div>
        <p class="shop-item-name">${value.name}</p>
        <p class="shop-item-price">$${value.price}</p>
        </div>
        `;
        shop_container.appendChild(newDiv);
    })
}
initApp();

function updateCart(item_id, value) {
    //If null create cart item element
    if (items_quantity[item_id] == null) {
        // Set initial value to 0
        items_quantity[item_id] = 0;

        // Create cart item DIV element
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', "cart-items-" + item_id)
        newDiv.innerHTML = 
        `
        <div class="cart-item"">
        <div class="cart-item-image">
          <img src="assets/${products[item_id].image}" alt="Dirt" class="cart-image" />
        </div>
        <p class="cart-item-name">${products[item_id].name}</p>
        <p class="cart-item-price" id="cart-item-price-${item_id}">$${products[item_id].price}</p>
        <div class='cart-item-buttons'>
        <button onclick='updateCart(${item_id}, -1)'>-</button>
          <div id='cart-item-${item_id}'>${items_quantity[item_id]}</div>
        <button onclick='updateCart(${item_id}, 1)'>+</button>
        </div>
        </div>
        `;
        cart_list.appendChild(newDiv);
    }
    // Change value of item quantity
    items_quantity[item_id] = items_quantity[item_id] + value;
    // console.log(products[item_id].name + " quantity in cart is: " + items_quantity[item_id])

    // Update HTML
    document.getElementById('cart-item-' + item_id).innerHTML = `${items_quantity[item_id]}`;
    document.getElementById('cart-item-price-' + item_id).innerHTML = `$${Math.round(items_quantity[item_id] * products[item_id].price * 100) / 100}`;
        // Update Total price
    tempInt = 0;
    items_quantity.forEach((value, id) => {
        // console.log(value + " and price is: " + products[id].price);
        tempInt = tempInt + (value * products[id].price);
    })
    tempInt = Math.round(tempInt * 100) / 100;
    document.querySelector('.cart-total').innerHTML = `$${tempInt}`;
        // Update Total items
    tempInt = 0;
    items_quantity.forEach((value) => {
        tempInt = tempInt + value
    })
    document.getElementById('total-items').innerHTML = `${tempInt}`

    // Delete DIV element if quantity is 0
    if (items_quantity[item_id] == 0) {
        items_quantity[item_id] = null;
        let delDiv = document.getElementById('cart-items-' + item_id);
        delDiv.remove();
    }
}

shopping_cart_image.addEventListener('click', ()=>{
    body.classList.add('open-cart')
})
close_cart.addEventListener('click', ()=>{
    body.classList.remove('open-cart')
})