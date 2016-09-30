import angular from 'angular';

class ContactListCtrl {
    constructor($http) {
        this.$http = $http;
        $http.get('/api/v1.0/contacts')
            .then((res) => {
                this.contacts = res.data;
            });
    }
    supprimer(contact) {
        let id = contact._id;
        let url = `/api/v1.0/contacts/${id}`;

        this.$http.delete(url)
            .then((res) => {
                let i = this.contacts.indexOf(contact);

                if (i) {
                    this.contacts.splice(i, 1);
                }
            });
    }
}

var app = angular.module('app.controllers.contact-list', []);
app.controller('ContactListCtrl', ContactListCtrl);