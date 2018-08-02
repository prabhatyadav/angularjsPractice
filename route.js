myapp.config('$routeProvider',function($routeProvider){
$routeProvider.when('/login.html',{
templateUrl:"/",
Controller:"loginController" })
.when('/profile',{
templateUrl:"/profile.html",
Controller:"profileController" 
})
.when('/search',{
templateUrl:"/search.html",
Controller:"searchController" 
})
.when('/register',{
templateUrl:"/registration.html",
Controller:"RegisterationController" 
})
.otherwise ({
redirectTo:"/login"
});


});