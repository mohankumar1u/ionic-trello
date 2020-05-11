
app.controller('boardCtrl', function ($scope, boardsService, $http) {
   $scope.title ="Trello"
   boardsService.getBoards(0).then(function (data) {
      $scope.boards = data
      console.log(data);
   })
   $scope.addBoard = function (val) {
      console.log(val);
      boardsService.createBoards(val);
      boardsService.getBoards(0).then(function (data) {
         $scope.boards = data
         console.log("he");
      })
   };
   $scope.goToBoard = function (board) {
      console.log(board.id);

   };

});
