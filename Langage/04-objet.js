'use strict';

// On trouve des objets existants dans le langage
console.log(typeof Math); // object

// On trouve des objets existants dans l'environnement JS
console.log(typeof console); // object

// On peut étendre n'importe quel objet
Math.scientifique = 'Evariste Galois';
console.log(Math.scientifique); // Evariste Galois

// On peut supprimer des propriétés
delete Math.scientifique;
console.log(Math.scientifique); // undefined

// Plutôt que le ., on peut utiliser les [] pour
// accéder au contenu
console.log('Hello');
console['log']('Hello');

console.log(Math.PI);
console.log(Math['PI']);

// Permet ce genre de code dynamique
var methode = 'error';
console[methode]('Hello');

// Le objets ont des types
var prenoms = ['Romain'];
console.log(typeof prenoms); // object
console.log(prenoms instanceof Array); // true
console.log(prenoms instanceof Object); // true
console.log(prenoms instanceof String); // false

// Besoin d'un objet ponctuel ? (Mauvaise pratique)
var coords = new Object();
coords.x = 10;
coords.y = 20;

// Syntaxe Literal (Bonne pratique, optimisée)
var prenom = new String('Romain'); // Mauvaise pratique
var prenom = 'Romain'; // Bonne pratique
var prenoms = new Array(); // Mauvaise pratique
var prenoms = []; // Bonne pratique
var regexp = new RegExp('[a-z][A-Z]*'); // Mauvaise pratique
var regexp = /[a-z][A-Z]*/; // Bonne pratique

// Object literal (Bonne Pratique)
var coords = {
    x: 10,
    y: 20
};

for (var prop in coords) {
    console.log(prop); // x y
    console.log(coords[prop]); // 10 20
}

// JSON (surensemble de Object Literal)
// Sérialisation d'un objet javascript
// Ne peut contenir que :
// - boolean
// - number
// - string literal (en double quote "")
// - regexp (literal)
// - array (literal)
// - objet (literal)

// On perd les méthodes et les types

var json = JSON.stringify(coords);
console.log(typeof json); // string
console.log(json); // '{"x":10,"y":20}'

// ... réseau ...

var obj = JSON.parse(json);
console.log(obj.x); // 10

// Nouveautés de ES5.1

var coords = {
    x: 10
};

Object.preventExtensions(coords);
Object.isExtensible(coords);
// coords.y = 20; // erreur

var coords = {
    x: 10
};

Object.defineProperty(coords, 'y', {
   value: 20, writable: false
});

console.log(coords.y);
// coords.y = 20; // erreur

Object.defineProperty(coords, 'y', {
    value: 20, writable: false, configurable: false, enumerable: false
});

console.log(coords.y);

// Si enumerable à false, pas de y dans JSON ou for .. in
// Si configurable à false, pas de possible de rappeler defineProperty
console.log(JSON.stringify(coords)); // {"x":10}

for (var prop in coords) {
    console.log(prop); // x y
    console.log(coords[prop]); // 10 20
}

Object.seal(coords); // preventExtensions + configurable false sur chaque
// propriétés

Object.freeze(coords); // seal + writable false à chaque

var contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz'
};

Object.defineProperty(contact, 'nomComplet', {
    get: function() {
        return `${this.prenom} ${this.nom}`;
    }
});

console.log(contact.nomComplet);

// Utiliser une fonction pour créer un objet : Fonction Constructeur

var now = new Date();
console.log(typeof now); // object
console.log(typeof Date); // function

var Contact = function(prenom, nom) {
    this.prenom = prenom;
    // autant de getNom que d'objet Contact
    this.getNom = function() {
        // nom est dans la portée de Closure
        return nom.toUpperCase();
    };
};

var romain = new Contact('Romain', 'Bohdanowicz');
console.log(romain.prenom); // Romain
console.log(romain.getNom()); // Bohdanowicz
console.log(typeof romain); // object
console.log(typeof Contact); // function
console.log(romain instanceof Contact); // true

var Contact = function(prenom) {
    this.prenom = prenom;
};

// une seule fois hello
Contact.prototype.hello = function() {
    return `Bonjour je suis ${this.prenom}`;
};

var romain = new Contact('Romain', 'Bohdanowicz');
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Bonjour je suis Romain
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(romain.nom); // undefined


var Client = function(prenom, numClient) {
    Contact.apply(this, arguments);
    this.numClient = numClient;
};

var eric = new Client('Eric', 123);


// Attention à this
var Contact = function(prenom) {
    this.prenom = prenom;
    this.helloDans100ms = function() {
        setTimeout(() => {
            console.log(`Bonjour je suis ${this.prenom}`);
        }, 100);
    }
};

var romain = new Contact('Romain');
romain.helloDans100ms();

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x;
        this.y = y;
    }
}

var carre = new Shape('carre', 10, 20);
console.log(typeof Shape); // function
console.log(typeof Shape.prototype.move); // function

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y);
        this.width  = width;
        this.height = height;
    }
}