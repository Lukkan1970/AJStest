


angular.module('githubViewer',[]).controller('MainController',
    function ($scope, github, $interval, $log, $anchorScroll, $location) {

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function (data) {
            $scope.repos = data;
            $location.hash("userDetails");
            $anchorScroll();
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data!";
        };

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
            $log.info("Searshing for " + username);
            github.getUser(username).then(onUserComplete, onError);
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
            }
            countdown = null;
        };

        

        $scope.username = "angular";
        $scope.repoSortOrder = '-stargazers_count';
        $scope.countdown = 5;
        //var person = {
        //    firstName: "Patrik",
        //    lastName: "Luukkonen",
        //    imageSrc: "/images/Patrik.jpg"
        //};
        $scope.message = "Github Viewer";
        startCountdown();
        //$scope.person = person;
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