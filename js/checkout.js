const checkoutItemsContainer = document.querySelector('#checkout-products');
const checkoutSubtotal = document.querySelector('#subtotal');
const taxNum = getSubtotal() * .10;
const tax = document.querySelector('#tax');
const total = document.querySelector('#total');
const shipping = document.querySelector('#shipping');
const orderBtn = document.querySelector('.order-btn');

const renderCheckoutItems = () => {
    
    for (const key in session_cart) {
        checkoutItemsContainer.innerHTML += createCheckoutItem(key);
    }
};

const createCheckoutItem = (itemID) => {
    return `<div class="checkout-product checkout-row">
                <p>${catalog[itemID]['name'].toUpperCase()} <strong class="product-quantity">x${session_cart[itemID]}</strong> </p>
                <p class="product-price">$${catalog[itemID]['price'] * session_cart[itemID]}</p>
            </div>`
};

const updateTotal = (shipping) =>{
    total.innerHTML = `$${getSubtotal() + taxNum + parseFloat(shipping)}`;
}

renderCheckoutItems();
updateTotal(shipping.value);
checkoutSubtotal.innerHTML = `$${getSubtotal()}`;
tax.innerHTML = `$${taxNum}`;

shipping.addEventListener('change', (e) => {
    updateTotal(e.target.value)
});

orderBtn.addEventListener('click', () =>{
    localStorage.removeItem('session_cart');
    location.href = 'thankyou.html';
});


