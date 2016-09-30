import angular from 'angular';

var app = angular.module('app.controllers.contact-add', []);

app.controller('ContactAddCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.ajouter = function() {


        $http.post('/api/v1.0/contacts', $scope.contact)
            .then(() => {
                $scope.message = 'Le contact a été ajouté'
            });
    };
}]);