app.factory('cardsService', ['$http', function ($http) {
  const trello = {
    code: 'u8yzaNUC',
    key: '7e905c16c547dc4b2b3c08cafc47e3c7',
    apiKey: 'be01ed7434db82cb66e8b1610a43aa7854aa9cff1c5a1b62f85ce76942357e1f'
  };

  return {
    getcards: function (id) {
      let cardsResponse = $http({
        method: 'GET',
        url: `https://api.trello.com/1/lists/${id}/cards?key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return cardsResponse;
      });
      return cardsResponse;
    },
   
    getCardDetails: function (cardId) {
      let cardDetailsResponse = $http({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${cardId}/checklists?checkItems=all&checkItem_fields=name%2CnameData%2Cpos%2Cstate&filter=all&fields=all&key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return cardDetailsResponse;
      });
      return cardDetailsResponse;
    },
    createCard: function (name, cardId) {
      let cardsResponse = $http({
        method: 'POST',
        url: `https://api.trello.com/1/cards?name=${name}&pos=top&idList=${cardId}&keepFromSource=all&key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return cardsResponse;
      });
      return cardsResponse;
    }

  }
}])