app.factory('boardsService', ['$http', function ($http) {
  const trello = {
    code: 'u8yzaNUC',
    key: '7e905c16c547dc4b2b3c08cafc47e3c7',
    apiKey: 'be01ed7434db82cb66e8b1610a43aa7854aa9cff1c5a1b62f85ce76942357e1f'
  };
  let boardsResponse = {};

  return {
    getBoards: function (val) {
      console.log(val);
      if (val) {
        return boardsResponse;
      } else {
        boardsResponse = $http({
          method: 'GET',
          url: `https://api.trello.com/1/members/me/boards?key=${trello.key}&token=${trello.apiKey}`
        }).then(function successCallback(response) {
          console.log("called boards");
          return response.data;
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.

          return boardsResponse;
        });
      }

      return boardsResponse;
    },
    createBoards: function (name) {
      let createBoardsResponse = $http({
        method: 'POST',
        url: `https://api.trello.com/1/boards/?name=${name}&key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return createBoardsResponse;
      });
      return createBoardsResponse;
    },
    deleteBoards: function (id, $location) {
      let response = $http({
        method: 'DELETE',
        url: `https://api.trello.com/1/boards/${id}?key=${trello.key}&token=${trello.apiKey}`
      }).then(function successCallback(response) {

        $location.path('/boards')
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return boards;
      });
    }

  }
}])