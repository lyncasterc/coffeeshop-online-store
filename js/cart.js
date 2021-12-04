let itemsList = document.querySelector('#bag-slideout-items');
let subtotal = document.querySelector('#subtotal-count');
const cartBtn = document.querySelector('#cart');
const logoutBtns = document.querySelectorAll('.logout-btn');
const addToCartBtn = document.querySelector('.add-btn');
const cartCount = document.querySelectorAll('.cart-count');
const catalog = {
    'v60': {'name': 'Hario V60', 'price': 30},
    'chemex': {'name': 'Classic 6-cup Chemex', 'price': 60},
    'cupping': {'name': 'Cupping Session', 'price': 80}
};
let session_cart = JSON.parse(localStorage.getItem('session_cart')) || {};


const saveItem = () => {
    localStorage.setItem('session_cart', JSON.stringify(session_cart));
};

const renderItems = () => {
    itemsList.innerHTML = '';
    for (const key in session_cart) {
        itemsList.innerHTML += createItem(key);
    }
};

const createItem = (itemID) => {
    return `<div class="bag-slideout-item">
        <div class="bag-item-info">
            <img src="./images/${itemID}.jpg" alt="" width="100" height="100" style="object-fit: cover;">
            <div class="bag-item-title">
                <p class="item-title"> ${catalog[itemID]['name']} </p>
                <i data-id="${itemID}" class="delete-item-btn las la-trash-alt"></i>
            </div>
        </div>
        
        <div class="price-quantity-container">
            <div class="bag-item-price">
                <span class="cart-title">PRICE</span> <br>
                <span class="item-price">$${catalog[itemID]['price']}</span>
            </div>

            <div class="item-quantity">
                <span class="cart-title">QUANTITY</span>
                <div data-id="${itemID}" class="quantity-incrementer">
                    <i class="increment-btn minus-btn las la-minus la"></i>
                    <span class="quantity-count">${session_cart[itemID]}</span>
                    <i class="increment-btn plus-btn las la-plus la"></i>
                </div>
            </div>

        </div>
    </div>`
};

const addItem = () => {
    if(addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            const itemID = e.target.id;
            session_cart[itemID] = (session_cart[itemID] + 1) || 1;
            updateCart();
            cartBtn.click();
        });
    }
};

const deleteItem = () => {
    itemsList.addEventListener('click', (e) => {
        if(e.target.classList.contains('delete-item-btn')){
            delete session_cart[e.target.getAttribute('data-id')];
            updateCart();
        }
    });
};

const getCartCount = () => {
    let count = 0;
    for(const key in session_cart) {
        count += session_cart[key];
    }

    return count;
};

const updateCartCount = () => {
    cartCount.forEach(count => {
        count.innerHTML = getCartCount();
    })
}

const getSubtotal = () => {
    let subtotalCount = 0;
    for (const key in session_cart) {
        subtotalCount += catalog[key]['price'] * session_cart[key];
    }
    return subtotalCount;
};

const updateSubtotal = (subtotal) => {
    subtotal.innerHTML = `$${getSubtotal()}`;
};

const updateQuantity = () => {
    itemsList.addEventListener('click', (e) => {
        if(e.target.classList.contains('increment-btn')){
            const itemID = e.target.parentElement.getAttribute('data-id');

            if(e.target.classList.contains('plus-btn')){
                session_cart[itemID]++;
            } else {
                session_cart[itemID]--;
            }

            if(session_cart[itemID] === 0){
                
                delete session_cart[itemID];
            }   

            updateCart();

        }
    });
};

const updateCart = () => {
    saveItem(session_cart);
    updateCartCount();
    updateSubtotal(subtotal);
    renderItems();
}

const logout = () => {
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            deleteCookie('session_user');
            localStorage.removeItem('session_cart');
            location.href = 'login.html';
            alert('You have logged out');
        });
    });
};


if (url !== 'checkout.html') {
    deleteItem();
    addItem();
    updateQuantity();
    updateCart();
}

logout();

