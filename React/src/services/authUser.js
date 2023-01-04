export function getToken() {
    let base64 = localStorage.getItem('usuario-login').split('.')[1];
    return JSON.parse(window.atob(base64));
}

export function setToken(token) {
    localStorage.setItem('usuario-login', token)
}