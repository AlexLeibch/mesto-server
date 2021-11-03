   class Api {
     constructor({address, headers}) {
        this._address = address
        this._headers = headers
     }


     getInitialCards() {
        return fetch(`${this._address}/cards`, {
          headers: this._headers
        }).then(this._checkStatus)
      }
    
      getUserInfo() {
        return fetch(`${this._address}/users/me`, {
          headers: this._headers
        }).then(this._checkStatus)
      }
    
      editUserInfo(name, about) {
        return fetch(`${this._address}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: name,
            about: about
          })
        }).then(this._checkStatus)
      }
    
      addCard(name, link) {
        return fetch(`${this._address}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            name: name,
            link: link
          })
        }).then(this._checkStatus)
      }
    
      editUserAvatar(url) {
        return fetch(`${this._address}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: url
          })
        }).then(this._checkStatus)
      }
    
      likeCard(cardId) {
        return fetch(`${this._address}/cards/likes/${cardId}`, {
          method: 'PUT',
          headers: this._headers
        }).then(this._checkStatus)
      }

      changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
          return this.likeCard(cardId) 
        } else {
          return this.dislikeCard(cardId)
        }
      }
    
      dislikeCard(cardId) {
        return fetch(`${this._address}/cards/likes/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        }).then(this._checkStatus)
      }
    
      removeCard(cardId) {
        return fetch(`${this._address}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        }).then(this._checkStatus)
      }
      _checkStatus(res) {
        if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`);
        }
        return res.json();
      }
    }


    const api = new Api({
      address: 'https://mesto.nomoreparties.co/v1/cohort-26',
      headers: {
        authorization: '6a8d306b-88c2-4559-b9fb-ed6535e42e98',
        'Content-type': 'application/json'
      }
    })

    export default api