app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});
app.controller('cardDetailsCtrl', function($scope, $stateParams, cardsService, cardDetailService, $ionicPopup, $location) {
    console.log("cardDetails", $scope, $stateParams);
    $scope.status= "ture";
    // $scope.checklistHide= {"display":'none'}
    // $scope.checklistdisplay={"display":'block'}
    $scope.changeStatus = function(checkItem, cardlist) {
        if(checkItem.state='incomplete'){
            cardDetailService.updateCheckitem(cardlist.idCard, checkItem.id, 'complete').then(function(data){

            })
        }else{
            cardDetailService.updateCheckitem(cardlist.idCard, checkItem.id, 'incomplete').then(function(data){

            })
        }
        console.log(checkItem)
    };
    $scope.addcheckList =function(val){
        console.log(val, $scope.cardDetails)
        cardDetailService.createCheckList(val,$stateParams.cardId).then(function(data){
            let size = Object.keys($scope.cardDetails).length
            $scope.cardDetails[size] = data;
            console.log(data,$scope.cardDetails[size]);
        }

        )
    };
    $scope.cardPopup=function(){
        var popup =  $ionicPopup.alert(
           {
              template: '<button class="archive-button button-light" ng-click="archiveCard()">archive list</button>',
              title: 'settings',
              scope: $scope,
              buttons: [
                               { text: 'Cancel' }
    
              ]
           }
        );
        $scope.archiveCard=function(){
            cardDetailService.deleteCard($stateParams.cardId).then(function(){
                popup.close()
                window.history.back(); 
               
            });
            console.log($stateParams)
         }
     };
     
     $scope.addcheckItem=function(name, index){
         
        console.log(name, $scope.cardDetails[index])
        cardDetailService.createCheckitem(name,$scope.cardDetails[index].id).then(function(data){
            let size = Object.keys($scope.cardDetails[index].checkItems).length
            $scope.cardDetails[index].checkItems[size] = data;
            console.log(data,$scope.cardDetails[index][size]);
            name=""
        });
     }
     $scope.deleteCheckItem=function(checkItem,cardlist, index){
        console.log(checkItem, cardlist, index)
        var checkItems =cardlist.checkItems
        var newCheckItems =[];
        angular.forEach(checkItems, function(checkItem){
            if(cardlist.checkItems[index]!=checkItem){
                newCheckItems.push(checkItem)
                console.log(checkItem)
            }
            //console.log(checkItem)
        })
        cardlist.checkItems=newCheckItems
        // delete cardlists[index];
        // cardlist.checkItems=cardlists;
        // console.log(checkItem, cardlist, index)
        cardDetailService.deleteCheckitem(checkItem.idChecklist, checkItem.id).then(function(){
           
        })
     }
    $scope.dispalyChecklist = function(cardlist){
        console.log(cardlist.toggled);
        cardlist.toggled = !cardlist.toggled;
        // if($scope.checklistHide.display=='none'){
        //     $scope.checklistHide={"display":'block'}
        //     console.log("working");
        // }else{
        //     $scope.checklistHide={"display":'none'}
        // }
    }
    cardsService.getCardDetails( $stateParams.cardId).then(function(data){
       $scope.cardDetails = data

       console.log($scope.cardDetails);
    })
 });