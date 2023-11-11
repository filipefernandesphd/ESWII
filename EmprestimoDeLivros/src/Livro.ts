export class Livro {
    private titulo: string;

    constructor(titulo: string){
        this.titulo = titulo;
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(titulo: string){
        this.titulo = titulo;
    }
}