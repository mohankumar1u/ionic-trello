app.controller('boardCtrl', function ($scope, boardsService, $http) {
   boardsService.getBoards(0).then(function (data) {
      $scope.boards = data
      console.log(data);
   })
   $scope.addBoard = function (val) {
      console.log(val);
      boardsService.createBoards(val);
      boardsService.getBoards(0).then(function (data) {
         $scope.boards = data
      })
   };
   $scope.goToBoard = function (board) {
      console.log(board.id);

   };

});
app.controller('listsCtrl', function ($scope, listsService, $stateParams, boardsService, cardsService) {
   boardsService.getBoards(1).then(function (data) {
      $scope.selectedDoard = data[parseInt($stateParams.boardId)];
      console.log($scope.selectedDoard)
      listsService.getlists($scope.selectedDoard.id).then(function (data) {
         $scope.lists = data
         angular.forEach($scope.lists, function (value, key) {
            cardsService.getcards(value.id).then(function (data) {
               $scope.lists[key]["cards"] = data;
               console.log($scope.lists[key]);
            });
         });
      });
   });
   $scope.addlist = function (val) {
      console.log(val, $scope.selectedDoard.id);
      listsService.createlist(val, $scope.selectedDoard.id).then(function (data) {
        let size = Object.keys($scope.lists).length

         $scope.lists[size] = data;
         console.log($scope.lists);
      });
   };
   $scope.addcard= function(val, index){
      cardsService.createCard(val,  $scope.lists[index].id).then(function (data) {
        let size = Object.keys($scope.lists[index]["cards"]).length
 
         $scope.lists[index]["cards"][size] = data;
          console.log($scope.lists[index]);
       });
      console.log(val,  $scope.lists[index]["cards"]);
   }
});
// app.controller('cardsCtrl', function($scope) {
//    console.log( $scope);
//    listsService.getlists( $stateParams.boardId).then(function(data){
//       $scope.lists = data
//       console.log($scope);
//    })

// });
// function cardsCtrl($scope) {
//    console.log($scope)
// }