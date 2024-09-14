// Definição da classe Herói
class heroi{
    constructor (nomeHeroi, idadeHeroi, tipoHeroi){
        this.nome = nomeHeroi;
        this.idade = idadeHeroi;
        this.tipo = tipoHeroi;
    }
    // Método atacar
    atacar (){
        let ataqueHeroi;
        if (this.tipo === "mago") {
            ataqueHeroi = "magia";
        } else if (this.tipo === "guerreiro"){
            ataqueHeroi = "espada";
        } else if (this.tipo === "monge"){
            ataqueHeroi = "artes marciais";
        } else if (this.tipo === "ninja"){
            ataqueHeroi = "shuriken";
        } else {
            ataqueHeroi = "ataque desconhecido";
        }

        console.log (`O ${this.tipo} atacou usando ${ataqueHeroi}`)
    }
}

// Saídas
const mago = new heroi ("Márcio", 29, "mago");
mago.atacar();

const ninja = new heroi ("Weeknd", 20, "ninja");
ninja.atacar();