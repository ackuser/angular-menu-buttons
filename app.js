app = angular.module('BrandsApp', []);

app.controller("BrandsCtrl", function($scope) {


  $scope.brand_titles = [
    'Square','Stripe','Paypal','Apple Pay','Google Wallet'
  ];

  $scope.itemFullList = '';

  $scope.brand1 = 'Paypal';

  $scope.brand2 = ' ';
  $scope.enable2 = false;
  $scope.brand3 = '  ';
  $scope.enable3 = false;
  $scope.num_visible_brands = 1;




  $scope.updateBrand = function ($event, num_brand ,name)
  {
    switch(num_brand) {
      case 1:
        $scope.brand1 = name;
        console.log("update brand 1");
        break;
        case 2:
          $scope.brand2 = name;
          console.log("update brand 2");
          $scope.enable2 = true;
          $scope.num_visible_brands++;
          break;
          case 3:
            $scope.brand3 = name;
            console.log("update brand 3");
            $scope.enable3 = true;
            $scope.num_visible_brands++;
            break;
          }
        }


        $scope.updateCancel = function ($event, num_brand ,name)
        {
          switch(num_brand) {
              case 2:
                $scope.brand2 = name;
                $scope.enable2 = false;
                $scope.num_visible_brands--;
                break;
                case 3:
                  $scope.brand3 = name;
                  $scope.enable3 = false;
                  $scope.num_visible_brands--;
                  break;
                }
              }

              $scope.notCurrentBrand = function(brand) {
                   return brand !== $scope.brand1 && brand !== $scope.brand2  && brand !== $scope.brand3;
                 };




            });
