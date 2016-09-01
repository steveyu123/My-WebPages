//services
weatherApp.service('cityName', function() {
    
    this.city = "San Jose, CA";            
                   
});


weatherApp.service('weatherService', ['$resource',function($resource){
    
    this.GetWeather = function(city, days){
    
    var weatherAPI = 
        $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=608ba792fe0c0b126852e4326a38707c", { callback: 'JSON_CALLBACK'}, { get: { method: "JSONP"}});    
    
     return weatherAPI.get({ q: city, cnt: days});
    
    };
    
}]);