'use strict';

console.log('Hello');

let id = setInterval(function() {
    console.log('Bonjour');
}, 1000);

setTimeout(function() {
    console.log('Bye');
    clearInterval(id);
}, 3000);
