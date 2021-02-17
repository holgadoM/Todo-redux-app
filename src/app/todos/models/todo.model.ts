export class Todo {
    public id?:number;
    public nombre?:string;
    public completo?:boolean;

    constructor(nombre:string){
        this.nombre = nombre;
        this.id = Math.random();
        this.completo = false;
    }
}