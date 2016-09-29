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

module.exports = Jeu;