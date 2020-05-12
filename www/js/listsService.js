app.factory('listsService', ['$http', function($http){
    const trello = [{code : 'u8yzaNUC',
key : '7e905c16c547dc4b2b3c08cafc47e3c7',
apiKey : 'be01ed7434db82cb66e8b1610a43aa7854aa9cff1c5a1b62f85ce76942357e1f'}];

   return{
        getlists: function( boardsId){
          let lists= $http({
               method: 'GET',
               url:`https://api.trello.com/1/boards/${boardsId}/lists/?key=${trello[0].key}&token=${trello[0].apiKey}`
             }).then(function successCallback(response) {
                return response.data;
               }, function errorCallback(response) {
                 // called asynchronously if an error occurs
                 // or server returns response with an error status.
                 return lists;
               });
               return lists;
       },
       createlist: function(name, listId){
           let list= $http({
                method: 'POST',
                url: `https://api.trello.com/1/lists?name=${name}&pos=bottom&idBoard=${listId}&key=${trello[0].key}&token=${trello[0].apiKey}`
              }).then(function successCallback(response) {
                 return response.data;
                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  return list;
                });
                return list;
        },
        archiveList: function( listId){
          let list= $http({
               method: 'PUT',
               url: `https://api.trello.com/1/lists/${listId}/closed?key=${trello[0].key}&token=${trello[0].apiKey}`
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
}])