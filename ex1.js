//exercicio 1

let numeros = []

function inserir() {
    numeros.push(parseInt(document.getElementById(`n`).value))
    document.getElementById(`n`).value = ""
}

function soma() {
    let somar = 0
    for (let i = 0; i < numeros.length; i++) {
        somar += numeros[i]
    }
    res.innerHTML = somar
}

function media() {
    let somar = 0
    for (let i = 0; i < numeros.length; i++) {
        somar += numeros[i]
    }
    med.innerHTML = somar / numeros.length
}

function num() {
    let imp = numeros.filter((x) => x % 2 != 0)
    let pr = numeros.filter((p) => p % 2 === 0)
    im.innerHTML = imp
    par.innerHTML = pr

}

//exercicio 2

function calctemp() {
    let temperatura = document.getElementById('temperatura').value;
    let valor = parseFloat(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    if (temperatura === 'celsius') {
        let fahrenheit = (valor * 9 / 5) + 32;
        res2.innerHTML = `${valor}°C é igual a ${fahrenheit.toFixed(2)}°F`;
    }
    else if (temperatura === 'fahrenheit') {
        let celsius = (valor - 32) * 5 / 9;
        res2.innerHTML = `${valor}°F é igual a ${celsius.toFixed(2)}°C`;
    } else {
        res2.innerHTML = "Por favor selecione uma escala";
    }
}

//exercicio 3

let number = []

function maior_media() {
    let number = [parseFloat(document.getElementById("nn1").value), parseFloat(document.getElementById("nn2").value), parseFloat(document.getElementById("nn3").value), parseFloat(document.getElementById("nn4").value), parseFloat(document.getElementById("nn5").value), parseFloat(document.getElementById("nn6").value), parseFloat(document.getElementById("nn7").value), parseFloat(document.getElementById("nn8").value), parseFloat(document.getElementById("nn9").value), parseFloat(document.getElementById("nn10").value)]
    let somador = 0
    for (let r = 0; r < number.length; r++) {
        somador += number[r]
    }

    let media_a = somador / number.length
    let media_m = number.filter(m => m > media_a)

    res3.innerHTML = number
}

function menor_zero() {
    let number = [parseFloat(document.getElementById("nn1").value), parseFloat(document.getElementById("nn2").value), parseFloat(document.getElementById("nn3").value), parseFloat(document.getElementById("nn4").value), parseFloat(document.getElementById("nn5").value), parseFloat(document.getElementById("nn6").value), parseFloat(document.getElementById("nn7").value), parseFloat(document.getElementById("nn8").value), parseFloat(document.getElementById("nn9").value), parseFloat(document.getElementById("nn10").value)]
    let zero = number.filter(s => s < 0)
    res3a.innerHTML = zero
}

//exercicio 4

function calcular4() {
    let kil = parseFloat(document.getElementById("km").value)
    let val = parseFloat(document.getElementById("combustivel").value)
    let calc = (kil / 8) * val
    res4.innerHTML = `${calc.toFixed(2)} R$`
}

//exercicio 5

function calcular5() {
    let comp = parseFloat(document.getElementById("comp").value)
    let larg = parseFloat(document.getElementById("larg").value)
    let cust = (comp * larg) * 36
    res5.innerHTML = `${cust.toFixed(2)} R$`
}

//exercicio 6

function calcular6() {
    let massa = parseFloat(document.getElementById("massa").value);
    let forca = parseFloat(document.getElementById("a1").value);
    let forca_contraria = parseFloat(document.getElementById("a2").value);
    let forca_resultante = massa * (forca - forca_contraria);
    res6.innerHTML = `${forca_resultante}N`;
}

function calcular6a() {
    let massa1 = parseFloat(document.getElementById("massa1").value);
    let massa2 = parseFloat(document.getElementById("massa2").value);
    let aceleracao1 = parseFloat(document.getElementById("ace1").value);
    let aceleracao2 = parseFloat(document.getElementById("ace2").value);
    let fr = (massa2 * aceleracao2) * 2
    let acao = massa1 * aceleracao1
    res6a.innerHTML = `${fr}N`
    res6b.innerHTML = `${acao}N`
}

//exercicio 7

function calcular7() {
    let met = parseInt(document.getElementById("metal").value)
    let amet = parseFloat(document.getElementById("ametal").value)
    if (met + amet === 100 && met > amet) {
        res7.innerHTML = "Metal"
    }
    else if (met + amet === 100 && met === amet) {
        res7.innerHTML = "Ambas"
    }
    else if (met + amet === 100 && met < amet) {
        res7.innerHTML = "Ametal"
    }

    else {
        res7.innerHTML = "A % digitada é invalida"
    }

}

//exercicio 8

function mmc(x, y) {
    let mmmc = []
    let m = 2
    while (x > 1 || y > 1) {
        while (x % m == 0 || y % m == 0) {
            mmmc.push(m)
            if (x % m == 0) {
                x /= m
            }
            if (y % m == 0) {
                y /= m
            }
        }
        m++
    }
    let mult = 1
    for (let n = 0; n < mmmc.length; n++) {
        mult *= mmmc[n]
    }
    return mult
}


function ionica() {
    let number1 = parseInt(document.getElementById("metal8").value)
    let number2 = parseInt(document.getElementById("ametal8").value)
    let minmc = mmc(number1, number2)
    let f_metal = minmc / number1
    let f_ametal = minmc / number2
    let simbol1 = document.getElementById("element1").value
    let simbol2 = document.getElementById("element2").value

    res8a.innerHTML = `${simbol1}${simbol2} (${f_metal}:${f_ametal})`
}

function molecular() {
    let nu1 = parseInt(document.getElementById("atomo1a").value)
    let nu2 = parseInt(document.getElementById("atomo2a").value)
    let multmin = mmc(nu1, nu2)
    let f_atomo1 = multmin / nu1
    let f_atomo2 = multmin / nu2
    let atom1 = document.getElementById("atomo1").value
    let atom2 = document.getElementById("atomo2").value

    if (f_atomo1 != 1 && f_atomo2 != 1) {
        if (f_atomo1 >= f_atomo2) {
            res8b.innerHTML = `${atom1}${f_atomo1}${atom2}${f_atomo2}`
        }
        else {
            res8b.innerHTML = `${atom2}${f_atomo2}${atom1}${f_atomo1}`
        }
    }

    else if (f_atomo1 <= 1 && f_atomo2 > 1) {
        res8b.innerHTML = `${atom2}${f_atomo2}${atom1}`
    }
    else if (f_atomo2 <= 1 && f_atomo1 > 1) {
        res8b.innerHTML = `${atom1}${f_atomo1}${atom2}`
    }

    else if (f_atomo1 == 1 && f_atomo2 == 1) {
        res8b.innerHTML = `${atom1} ${atom2}`
    }
}

//exercicio 9

let array = []

function inserir9() {
    array.push(parseFloat(document.getElementById("n9").value))
    document.getElementById(`n9`).value = ""

}

function mostrar() {
    res9.innerHTML = array
}

function maior() {
    res9a.innerHTML = Math.max(...array)
}

function menor() {
    res9b.innerHTML = Math.min(...array)
}

//exercicio 10 

function funcao() {
    a = document.getElementById("a").value
    x = document.getElementById("x").value
    res10.innerHTML = a ** x
}

//exercicio 11

function calcular11() {
    let met1 = parseInt(document.getElementById("metal1").value)
    let amet1 = parseFloat(document.getElementById("ametal1").value)
    if (met1 + amet1 === 100 && met1 > amet1) {
        res11.innerHTML = "Metal"
    }
    else if (met1 + amet1 === 100 && met1 === amet1) {
        res11.innerHTML = "Ambas"
    }
    else if (met1 + amet1 === 100 && met1 < amet1) {
        res11.innerHTML = "Ametal"
    }

    else {
        res11.innerHTML = "A % digitada é invalida"
    }

}