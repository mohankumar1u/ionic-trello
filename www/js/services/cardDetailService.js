app.factory('cardDetailService', ['$http', function ($http) {
  const trello = {
    code: 'u8yzaNUC',
    key: '7e905c16c547dc4b2b3c08cafc47e3c7',
    apiKey: 'be01ed7434db82cb66e8b1610a43aa7854aa9cff1c5a1b62f85ce76942357e1f'
  };
  return {
    createCheckList: function (name, cardId) {
      let createCheckListResponse = $http({
        method: 'POST',
        url: `https://api.trello.com/1/checklists?idCard=${cardId}&name=${name}&key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return createCheckListResponse;
      });
      return createCheckListResponse;
    },
    createCheckitem: function (name, checklistsId) {
      console.log(name, checklistsId)
      let createCheckitemResponse = $http({
        method: 'POST',
        url: `https://api.trello.com/1/checklists/${checklistsId}/checkItems?name=${name}&pos=bottom&checked=false&key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        console.log(response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return createCheckitemResponse;
      });
      return createCheckitemResponse;
    },
    deleteCard: function (id) {
      let deleteCardResponse = $http({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}?key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return deleteCardResponse;
      });
      return deleteCardResponse;
    },
    updateCheckitem: function (cardId, id, state) {
      console.log(state);
      let updateCheckitemResponse = $http({
        method: 'PUT',
        url: `https://api.trello.com/1/cards/${cardId}/checkItem/${id}?state=${state}&key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return updateCheckitemResponse;
      });
      return updateCheckitemResponse;
    },
    deleteCheckItem: function (id, idCheckItem) {
      console.log(id, "id", idCheckItem, "checkid")
      let deleteCheckItemResponse = $http({
        method: 'DELETE',
        url: `https://api.trello.com/1/checklists/${id}/checkItems/${idCheckItem}?key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        console.log(response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return deleteCheckItemResponse;
      });
      return deleteCheckItemResponse;
    }
  }
}]);