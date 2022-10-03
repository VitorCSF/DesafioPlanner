// Função para mostrar a hora(s) e minuto(s) na tela 

function mostraHora() {

    var data = new Date(); // Obtém a hora atual

    // Guarda cada pedaço em uma variável

    var hora = data.getHours(); // 0-23
    var min = data.getMinutes(); // 0-59

    if (min < 10) {

        min = '0' + min;

    }


    // Formata a hora

    var str_hora = hora + ':' + min;

    // Mostra o resultado

    document.getElementById("hora__cabecalho").value=str_hora;

}

// Intervalo para a função mostraHora     

    var timer=setInterval(mostraHora,1000);


//Função para mostra o dia, mês e ano

    function mostraDia(){

    var data = new Date();  // Obtém a data

    // Guarda cada pedaço em uma variável

    var dia = data.getDate(); // Guarda o dia 

    var mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto','Setembro','Outubro','Novembro','Dezembro');

    var ano = data.getFullYear(); // Guarda o ano

    // Formata a data e a hora (note o mês + 1)

    var str_data = dia + ' de ' + mes[data.getMonth()] + ' de ' + ano;

    // Mostra o resultado
    document.write(str_data);

}