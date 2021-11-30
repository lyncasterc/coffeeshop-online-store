
const setCookie = (name, value, days) => {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`; 
};

const getCookie = (name) => {
        const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};


const deleteCookie = (name) => {
    setCookie(name, '', -1);
};

const deleteAllCookies = () => {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        deleteCookie(cookie.trim().slice(0, cookie.indexOf('=')));
    });
};