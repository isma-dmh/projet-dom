import {Pokemon} from "./Pokemon.js";

export class Arcanin extends Pokemon{


    constructor(){

        super("Arcanin","./assets/img/arcanin.png",390);
       
        this.attack = [

            {nom:"lance-Flamme",type:"feu",puissance:110,precision:0.90},

            {nom:"vitesse Extrême",type:"normal",puissance:70,precision:1.00},

            {nom:"Boutefeu",type:"feu",puissance:90,precision:0.90},

            {nom:"Crocs Éclair",type:"electrik",puissance:120,precision:0.80},

        ];

    }

}