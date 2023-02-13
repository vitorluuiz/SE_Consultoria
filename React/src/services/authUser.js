export function getToken() {
    let token = localStorage.getItem('usuario-login')
    if (token != undefined) {
        let base64 = token.split('.')[1];
        return JSON.parse(window.atob(base64));
    }
    else {
        return undefined
    }
}

export function getUserId() {
    if (getToken() != undefined) {
        return getToken().jti
    }
}

export function setToken(token) {
    localStorage.setItem('usuario-login', token)
}

export function deleteToken() { 
    localStorage.clear('usuario-login')
}