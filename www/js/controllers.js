app.controller('boardCtrl', function($scope, boardsService, $http){
     boardsService.getBoards($http).then(function(data){
        $scope.boards = data
        console.log(data);
     })
     $scope.addBoard = function(val) {
        console.log(val);
        boardsService.createBoards($http, val);
        boardsService.getBoards($http).then(function(data){
            $scope.boards = data
         })
      };
    
});