app = angular.module('BrandsApp', []);

app.controller("BrandsCtrl", function($scope) {


  $scope.brand_titles = [
    'Square','Stripe','Paypal','Apple Pay','Google Wallet'
  ];



  $scope.brand1 = 'Paypal';

  $scope.brand2 = '';
  $scope.enable2 = false;
  $scope.brand3 = '';
  $scope.enable3 = false;
  $scope.num_visible_brands = 1;

  $scope.variable1 = 'Volume of speech';
  $scope.variable2 = '';
  $scope.enable_var2 = false;
  $scope.variable3 = '';
  $scope.enable_var3 = false;
  $scope.num_visible_vars = 1;


  $scope.variable_titles = [
    '','Volume of speech','Average influence','Proportion of top influencers','Proportion positive sentiment','Total interactions last 5 days','Awareness','Consideration','Sentiment','Usage','Volume of searches','Volume of searches for downloads'
  ];

  $scope.variable_speech = [
    'Volume of speech','Average influence','Proportion of top influencers','Proportion positive sentiment'
  ];

  $scope.variable_stated = [
    'Awareness','Consideration','Proportion of top influencers','Usage'
  ];

  $scope.variable_search = [
    'Volume of searches','Volume of searches for downloads'
  ];

  $scope.variable_stated = [
    'Total interactions last 5 days'
  ];


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






                 $scope.updateVariable = function ($event, num_var ,name)
                 {
                   switch(num_var) {
                       case 1:
                           $scope.variable1 = name;
                           break;
                       case 2:
                           $scope.variable2 = name;
                           break;
                       case 3:
                           $scope.variable3 = name;
                           break;
                   }
                   //$event.stopPropagation();
                 }

                 $scope.notCurrentVariable = function(variable) {
                      return variable !== $scope.variable1 && variable !== $scope.variable2  && variable !== $scope.variable3;
                    };


            });
