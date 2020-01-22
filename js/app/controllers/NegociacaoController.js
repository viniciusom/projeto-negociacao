class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();
        
        let data = new Date(...
            this._inputData.value.split('-')
            .map((item, indice) => item - indice % 2)
            );
        
            /*
              O objeto Date retorna uma string com números separados por "-"(ífen),
              no formato ("ano-mês-dia"), exemplo ("2020-01-22"), só que ele espera
              receber no parâmetro o formato (ano/mes/dia), que pode ser uma string,
              pode ser number separados por ","(vírgula), ou pode ser um Array de 
              string ou number. Porém, dessa forma o Date guarda internamente o mês
              de 0 a 11 e não de 1 a 12, então deve-se tratar isso antes de passar.
              O Spread("...") dá a possibilidade de passar no parâmetro desse objeto, 
              um Array de string ou number. Pra isso temos que quebrar a string do input
              onde houver "-"(ífen), para que cada parte seja uma posição desse Array 
              e temos que decrementar 1 do valor da posição que refere ao mês, por isso
              foi subtraído o resto da divisão da posição dele que seria 1(já que o Date 
              retorna [ano-mes-dia]) por 2, do valor do item que poderia ser 12, a posição 
              0 e 2 que referem-se ao ano e dia não seriam subtraídas pois o resto da 
              divisão seria 0.  
            */

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

}