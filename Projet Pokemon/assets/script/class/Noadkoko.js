import { Pokemon } from "./Pokemon.js";

export class Noadkoko extends Pokemon {

    constructor() {

        super(
            "Noadkoko", "./assets/img/Noadkoko.png",
            330,
            { nom: "Lance-Soleil", type: "plante", puissance: 90, precision: 0.90 },
            { nom: "Pouvoir Antique", type: "roche", puissance: 70, precision: 1.00 },
            { nom: "Ball'Graine", type: "plante", puissance: 90, precision: 0.90 },
            { nom: "Psyko", type: "psy", puissance: 110, precision: 0.80 },
        );

        this.type = "plante";

    }

}