
var p1 = 'Romain';
var p2 = p1; // passage par copie
p2 = 'Eric';
console.log(p1); // Romain

function modifieString(p3) {
    // p3 = p1;
    p3 = 'Jean';
}

modifieString(p1); // passage par copie
console.log(p1); // Romain

var o1 = {
    p: 'Romain'
};
var o2 = o1; // passage par référence
o2.p = 'Eric';
console.log(o1.p); // Eric

function modifieObjet(o3) {
    // o3 = o1;
    o3.p = 'Jean';
}

modifieObjet(o1); // passage par référence
console.log(o1.p); // Jean