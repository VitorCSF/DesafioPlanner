// Função para mostrar a hora(s) e minuto(s) na tela 

function mostraHora() {

    var data = new Date(); // Obtém a hora atual

    // Guarda cada pedaço em uma variável

    var hora = data.getHours(); // 00-23
    var min = data.getMinutes(); // 00-59

    // Adiciona um '0' à esquerda para minutos de 0 a 10

    if (min < 10) {

        min = '0' + min;  

    }

    // Formata a hora

    var str_hora = hora + ':' + min;

    // Mostra o resultado de str_hora

    document.getElementById("hora__cabecalho").value=str_hora;

}

// Intervalo para a função mostraHora     

    var timer=setInterval(mostraHora,1000);

//Função para mostra o dia, mês e ano

    function mostraDia(){

    var data = new Date();  // Obtém a data

    // Guarda cada pedaço em uma variável

    var dia = data.getDate(); // Guarda o dia 

    var mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto','Setembro','Outubro','Novembro','Dezembro'); // Converte o valor do mês em String

    var ano = data.getFullYear(); // Guarda o ano

    // Formata o dia, mês e ano 

    var str_data = dia + ' de ' + mes[data.getMonth()] + ' de ' + ano;

    // Mostra o resultado de str_data

    document.write(str_data);

}