export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`${res.status}`);
    }
    return res.json()
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(res => checkResponse(res))
}


export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(checkResponse) 
    .then((data) => {
        if(data.token) {
            localStorage.setItem('jwt', data.token)
            return data.token;
        }
    })
}

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(checkResponse)
    .then((data) => data)
}


