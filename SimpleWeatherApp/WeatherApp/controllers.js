
//controllers
weatherApp.controller('homeCtrl', ['$scope', 'cityName', '$location',
function( $scope, cityName, $location){
    
 $scope.city = cityName.city;

 $scope.$watch('city', function(){
     cityName.city = $scope.city;
 })    

 $scope.submit = function() {
   $location.path("/forecast");
     
 };
 
}]);


weatherApp.controller('forecastCtrl', ['$scope', 'cityName', 'weatherService', '$routeParams', function($scope, cityName, weatherService, $routeParams){
    
    $scope.city = cityName.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    $scope.convertToFahrenheit = function(degK) {

            return Math.round((1.8 * (degK - 273)) + 32);

        }
    
    $scope.convertToDate = function(dt) { 

            return new Date(dt * 1000);

        };
    
    
}]);

