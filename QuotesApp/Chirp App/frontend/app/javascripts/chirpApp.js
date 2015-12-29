//chirpApp.js
var app = angular.module('chirpApp', []);

app.controller('mainController', function($scope){
	$scope.quotes = [];
	$scope.newQuote = {created_by: 'VIshu', text: '', 
	created_at:''};

	$scope.quote = function(){
    $scope.newQuote.created_at = Date.now();
    $scope.quotes.push($scope.newQuote);
    $scope.newQuote = {created_by: 'VIshu', text: '', created_at: ''};
  };

});