const registerBtn = document.querySelector('#register-btn');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');
const usernameErrorMsg = document.querySelector('#username-error-msg');
const loginErrorMsg = document.querySelector('#login-error-msg');
const url = location.href.split('/').at(-1);

const register = () => {
    registerForm.addEventListener('submit', (e) => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        e.preventDefault();
        if(getCookie(username)){
            usernameErrorMsg.classList.add('error-msg');
            usernameInput.classList.add('input-error');

        } else {
            setCookie(username, password, 1);
            setCookie('session_user', username, 1);
            location.href = 'index.html';
        }
        
    });

};

const login = () => {
    loginForm.addEventListener('submit', (e) => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const savedPassword = getCookie(username);
        e.preventDefault();
        if(savedPassword && password === savedPassword){
            setCookie('session_user', username, 1);
            location.href = 'index.html';
        } else {
            
            loginErrorMsg.classList.add('error-msg');
            usernameInput.classList.add('input-error');
            passwordInput.classList.add('input-error');
        }
    });
};

const loggedIn = () => {
    return getCookie('session_user') ? true : false;
}

if(url === 'login.html'){
    login();
} else if (url === 'register.html'){
    register();
} else if(!loggedIn()){
    location.href = 'login.html';
    alert('Sign in or create an account to access that page!')
}

