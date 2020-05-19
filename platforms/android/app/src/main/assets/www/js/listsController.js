app.controller('listsCtrl', function ($scope, listsService, $stateParams, boardsService, cardsService, $ionicPopup, $location) {

    boardsService.getBoards(1).then(function (data) {
    $scope.selectedDoard = data[parseInt($stateParams.boardId)];
    $scope.title =$scope.selectedDoard.name;
    if($scope.selectedDoard.prefs.backgroundImage){
      $scope.backgroundImg={
         "background-image" : `url(${$scope.selectedDoard.prefs.backgroundImage})`
      }
    }else{
      $scope.backgroundImg={
         "background-image" : `url("../img/download.jpg")`
      }
    }
   
    console.log($scope.selectedDoard.prefs.backgroundImage)
    listsService.getlists($scope.selectedDoard.id).then(function (data) {
       $scope.lists = data
       angular.forEach($scope.lists, function (value, key) {
          cardsService.getcards(value.id).then(function (data) {
             $scope.lists[key]["cards"] = data;
          });
       });
    });
 });
 $scope.addlist = function (val) {
    console.log(val, $scope.selectedDoard.prefs.backgroundImage);
    listsService.createlist(val, $scope.selectedDoard.id).then(function (data) {
      let size = Object.keys($scope.lists).length

       $scope.lists[size] = data;
    });
 };
 $scope.addcard= function(val, index){
    cardsService.createCard(val,  $scope.lists[index].id).then(function (data) {
      let size = Object.keys($scope.lists[index]["cards"]).length

       $scope.lists[index]["cards"][size] = data;
     });
 }

 $scope.boardPopup=function(){
    var popup =  $ionicPopup.alert(
       {
          template: '',
          title: 'settings',
          scope: $scope,
          buttons: [
             { text: 'Cancel' },
             {text: 'archive board',
             onTap: function(e) {boardsService.deleteBoards($scope.selectedDoard.id,$location), console.log($scope.selectedDoard.id)}}
          ]
       }
    )
 }
 $scope.listPopup=function(list){
    $scope.currentlist=list;
    var popup =  $ionicPopup.alert(
       {
          template: '<button ng-click="archiveList()">archive list</button> <button>archive all cards</button>',
          title: 'settings',
          scope: $scope,
          buttons: [
                           { text: 'Cancel' }

          ]
       }
    )
 },
 $scope.displayNewCard=function(list){
   list.toggled = !list.toggled;
    console.log(list.toggled);
 }
 $scope.archiveList=function(){
    console.log($scope.currentlist,"working");
    listsService.archiveList($scope.currentlist.id).then(function (data) {
       $location.path(`/boards/${parseInt($stateParams.boardId)}`)
    });
 }
 
});