app.factory('cardDetailService', ['$http',  function($http){
    const trello = [{code : 'u8yzaNUC',
key : '7e905c16c547dc4b2b3c08cafc47e3c7',
apiKey : 'be01ed7434db82cb66e8b1610a43aa7854aa9cff1c5a1b62f85ce76942357e1f'}];
return{
createCheckList: function(name, cardId){
    let list= $http({
         method: 'POST',
         url: `https://api.trello.com/1/checklists?idCard=${cardId}&name=${name}&key=${trello[0].key}&token=${trello[0].apiKey}`
       }).then(function successCallback(response) {
          return response.data;
         }, function errorCallback(response) {
           // called asynchronously if an error occurs
           // or server returns response with an error status.
           return list;
         });
         return list;
 },
 createCheckitem: function(name, checklistsId){
    let list= $http({
         method: 'POST',
         url: `https://api.trello.com/1/checklists/${checklistsId}/checkItems?name=${name}&pos=bottom&checked=false&key=${trello[0].key}&token=${trello[0].apiKey}`
       }).then(function successCallback(response) {
          return response.data;
         }, function errorCallback(response) {
           // called asynchronously if an error occurs
           // or server returns response with an error status.
           return list;
         });
         return list;
 },
 deleteCheckitem: function(checkItemId){
    let list= $http({
         method: 'DELETE',
         url: `https://api.trello.com/1/checklists/${checkItemId}?key=${trello[0].key}&token=${trello[0].apiKey}`
       }).then(function successCallback(response) {
          return response.data;
         }, function errorCallback(response) {
           // called asynchronously if an error occurs
           // or server returns response with an error status.
           return list;
         });
         return list;
 },
 updateCheckitem: function(cardId, id, state){
  let list= $http({
       method: 'PUT',
       url: `https://api.trello.com/1/cards/${cardId}/checkItem/${id}?state=${state}&key=${trello[0].key}&token=${trello[0].apiKey}`
     }).then(function successCallback(response) {
        return response.data;
       }, function errorCallback(response) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         return list;
       });
       return list;
},
deleteCard: function(id,idCheckItem){
  let list= $http({
       method: 'DELETE',
       url: `https://api.trello.com/1/checklists/${id}/checkItems/${idCheckItem}?key=${trello[0].key}&token=${trello[0].apiKey}`
     }).then(function successCallback(response) {
        return response.data;
       }, function errorCallback(response) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         return list;
       });
       return list;
}
}
}]);