function calculaTabuada(numero) {
    for (let index = 1; index <= 10; index++) {

        const resultado = index*numero;
        console.log ('${index} x ${numero} =', resultado);
    }

}

calculaTabuada(10)