
export class Horloge {
    constructor(container) {
        this.container = container;
        this.update();
        setInterval(this.update.bind(this), 1000);
    }
    update() {
        let now = new Date();
        this.container.innerHTML = `${now.getHours()}h${now.getMinutes()}m${now.getSeconds()}`;
    }
}

export class Contact {
    constructor(prenom) {
        this.prenom = prenom;
    }
    hello() {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}