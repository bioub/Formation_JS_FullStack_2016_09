// Jeu du plus ou moins
// 1/ Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2/ Demander et récupérer la saisie (API readline de Node.js)
// et indiquer si le nombre est plus petit ou plus grand
// 3/ Pouvoir trouver en plusieurs essais
// 4/ Stocker chaque essais dans un tableau et les réafficher
// entre chaque tour (API Array sur MDN, push et join)
// 5/ Rejouer si la saisie n'est pas un nombre (isNaN)
'use strict';

const readline = require('readline');

class Jeu {
    constructor(options) {
        options = options || {};
        this.$$min = options.min || 0;
        this.$$max = options.max || 100;
        this.$$rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.$$entierAlea = Math.floor(Math.random() * (this.$$max - this.$$min + 1)) + this.$$min;
        this.$$essais = [];
    }
    jouer() {

        if (this.$$essais.length) {
            console.log('Tu as déjà joué : ' + this.$$essais.join(' - '));
        }

        let msg = `Trouvez un entier compris entre ${this.$$min} et ${this.$$max} : `;
        this.$$rl.question(msg, (answer) => {

            let entierSaisi = parseInt(answer);

            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : il faut saisir un entier');
                return this.jouer();
            }

            this.$$essais.push(entierSaisi);

            if (entierSaisi < this.$$entierAlea) {
                console.log('Trop petit');
                return this.jouer();
            }

            if (entierSaisi > this.$$entierAlea) {
                console.log('Trop grand');
                return this.jouer();
            }

            console.log('Bravo !!!');
            this.$$rl.close();
        });
    }
}

// let jeu = new Jeu();

// let jeu = new Jeu({
//     max: 200
// });

let jeu = new Jeu({
    min: 100,
    max: 200
});

jeu.jouer();