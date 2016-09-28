'use strict';

var addition = function(a, b) {
    return Number(a) + Number(b);
};

/*
const addition = function(a, b) {
    return Number(a) + Number(b);
};
*/

console.log(addition(1, 2)); // 3
console.log(addition('1', '2')); // 3

var addition = function(a, b) {
    var somme = Number(a) + Number(b);

    for (var i=2; i<arguments.length; i++) {
        somme += Number(arguments[i]);
    }

    return somme;
};

console.log(addition(1, 2, 3, 4)); // 10

/*
REST Parameter
var addition = function(a, b, ...nbs) {
    var somme = Number(a) + Number(b);

    for (var i=0; i<nbs.length; i++) {
        somme += Number(nbs[i]);
    }

    return somme;
};

console.log(addition(1, 2, 3, 4)); // 10
*/

var addition = function(a, b) {
    if (typeof a !== 'number') {
        throw new Error('a must be a number');
    }

    // Valeur par défaut
    if (typeof b === 'undefined') {
        b = 0;
    }

    // Ou
    if (!b) {
        b = 0;
    }

    // Ou
    b = (!b) ? 0 : b;

    // Ou
    b = b || 0;

    return Number(a) + Number(b);
};

console.log(addition(1)); // 1
try {
    console.log(addition('1')); // NaN
}
catch (e) {
    console.log(`Une erreur s'est produite : ${e.message}`);
}

var prenom = 'Romain';

function externe(a) {
    console.log(prenom);
    function interne(b, c) {
        var msg = 'Hello';
        console.log(msg);
        console.log(addition(1, 2));
        console.log(prenom);
    }
}

externe();
console.log(typeof interne); // undefined

// Sans closure
for (var i=0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}

// Dans 10ms : 3 3 3

// Closure (portée sauvegardée)
// 1/ 2 fonctions imbriquées
// 2/ fonction interne soit appelée en dehors

function fctExterne(iClosure) {
    // portée de closure (sauvegardée au moment du passage
    // dans la fonction externe)
    return function() {
        console.log(iClosure);
    };

}

var laFctInterne = fctExterne(3);
laFctInterne(); // 3

var laFctInterne = fctExterne(10);
laFctInterne(); // 10

for (var i=0; i<3; i++) {
    setTimeout(fctExterne(i), 100);
}

// 0 1 2

