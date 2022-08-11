


function calcular(){

    const dolar = document.getElementById("dolar");
    const euro = document.getElementById("euro");
    const valor = document.getElementById("valor");

    var select = document.getElementById('moeda');
    var option = select.options[select.selectedIndex].value;

    if(option == "dolar"){

        var soma = valor.value*5.15
        resultado.textContent = soma

    }else{
        var soma = valor.value*5.32
        resultado.textContent = soma
    }

    

};