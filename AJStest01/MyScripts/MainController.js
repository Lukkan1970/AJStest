

var app = angular.module('githubViewer');

//angular.module('githubViewer', []).controller('MainController',
var MainController = app.controller('MainController',
    function ($scope, $interval, $location) {

        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;

        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (username) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                countdown = null;
            }
            $location.path("/user/" + username);
        };

        $scope.username = "angular";
        $scope.countdown = 10;
        startCountdown();
    });





//(function(){
//    var MainController = function ($scope) {
//        $scope.message = "Hello ng";
//    };

//}());



////var program = function () {
//(function(){
//    var createWorker = function () {

//        var workCount = 0;
//        var task1 = function () {
//            workCount++;
//            console.log("Task1");
//            console.log(workCount);
//        };

//        var job2 = function () {
//            workCount++;
//            console.log("JOB2");
//            console.log(workCount);
//        };

//        return {
//            job1: task1,
//            job2: job2
//        };

//    };


//    var worker = createWorker();

//    worker.job1();
//    worker.job2();
//} ());
//    //};
////program();






//var work = function () {

//    console.log("Do work");
//};

//var doWork = function(f) {

//    console.log("starting");

//    try {
//        f();
//    } catch (ex) {
//        console.log(ex)
//    }

//    console.log("ENIDNG");
    
//};

//doWork(work);