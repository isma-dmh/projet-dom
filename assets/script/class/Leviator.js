import { Pokemon } from "./Pokemon.js";

export class Leviator extends Pokemon {

    constructor() {

        super(
            "Leviator", "./assets/img/leviator.png",
            360,
            { nom: "Mâchouille", type: "tenebres", puissance: 70, precision: 1.00 },
            { nom: "Cascade", type: "eau", puissance: 110, precision: 0.80 },
            { nom: "Séisme", type: "sol", puissance: 90, precision: 0.90 },
            { nom: "Danse Draco", type: "dragon", puissance: 90, precision: 0.90 },
        );

        this.type = "eau";

    }

}