
var module = angular.module('githubViewer');

var RepoController = module.controller('RepoController',
    function($scope, $routeParams, github){

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = resaon;
        };

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);

    });
