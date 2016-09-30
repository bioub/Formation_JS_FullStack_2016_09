import $ from 'jquery';
import bootstrap from 'bootstrap';
import angular from 'angular';
import angularRoute from 'angular-route';
import contactAdd from './controllers/contact-add';
import contactList from './controllers/contact-list';

import {Horloge} from './horloge';

let navbarBrand = document.querySelector('.navbar-brand');

let horloge = new Horloge(navbarBrand);
horloge.update();

var app = angular.module('app', [
    'app.controllers.contact-add',
    'app.controllers.contact-list',

    'ngRoute'
]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/ajouter', {
            templateUrl: 'js/templates/contact-add.ng.html',
            controller: 'ContactAddCtrl',
        })
        .when('/', {
            templateUrl: 'js/templates/contact-list.ng.html',
            controller: 'ContactListCtrl',
            controllerAs: 'contactList'
        })
        .otherwise({
            templateUrl: 'js/templates/404.ng.html'
        });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});

angular.bootstrap(document.body, ['app']);
