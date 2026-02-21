export class Pokemon {

    constructor(nom, url, hp, atk1, atk2, atk3, atk4) {

        this.nom = nom;
        this.url = url;
        this.hp = hp;
        this.atk = [atk1, atk2, atk3, atk4];

    }

    get randAttack() {

        let rand = Math.floor(Math.random() * 4);

        return this.atk[rand];

    }

    atkBonus(atk) {

        let rand = Math.floor(Math.random() * 11);

        return atk.puissance += rand;

    }

    successAtk(atk) {

        let rand = Math.random();

        if (atk.precision > rand) {

            return true

        }

        return false;

    }

    checkType(atk) {

        if (atk.type == "eau" && this.type == "feu") {

            return true;

        } else if (atk.type == "feu" && this.type == "plante") {

            return true;

        } else if (atk.type == "plante" && this.type == "eau") {

            return true;

        }

        return false;

    }



}