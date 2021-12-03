const checkoutItemsContainer = document.querySelector('#checkout-items');

const renderCheckoutItems = () => {
    
    for (const key in session_cart) {
        checkoutItemsContainer.innerHTML += createCheckoutItem(key);
    }
};

const createCheckoutItem = (itemID) => {
    return `<div class="bag-slideout-item">
        <div class="bag-item-info">
            <img src="./images/${itemID}.jpg" alt="" width="100" height="100" style="object-fit: cover;">
            <div class="bag-item-title">
                <p class="item-title"> ${catalog[itemID]['name']} </p>
            </div>
        </div>
        
        <div class="price-quantity-container">
            <div class="bag-item-price">
                <span class="cart-title">PRICE</span> <br>
                <span class="item-price">$${catalog[itemID]['price']}</span>
            </div>
        </div>
    </div>`
};

// renderCheckoutItems();