class Ninja{
    /**
     * 
     * @param {String} nombre 
     */
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log("********* Nombre **********");
        console.log(this.nombre);
    }
    showStats(){
        console.log("********** Stats *********");
        console.log("Nombre: ",this.nombre);
        console.log("Fuerza: ",this.fuerza);
        console.log("velocidad: ",this.velocidad);
        console.log("salud: ",this.salud);
    }
    drinkSake(){
        console.log("********** Drinking Sake ********");
        this.salud =+ 10;
        console.log("Salud: ",this.salud);
    }
    
}
const ninja1 = new Ninja('henry');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();