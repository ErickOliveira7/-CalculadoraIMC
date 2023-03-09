function calcular(){

    let altura = document.querySelector('#altura').value;
    let peso = parseFloat(document.querySelector('#peso').value);
    let IMC = parseFloat(peso/(altura*altura));

    if (IMC <= 16) {
        document.querySelector("#retorno").innerHTML= "Seu IMC é igual a: " + IMC.toFixed(2) + " / Você tem Magreza grave.";
    } else if (IMC >=16 &&  IMC<=17) {
        document.querySelector("#retorno").innerHTML= "Seu IMC é igual a: " + IMC.toFixed(2) + " / Você tem Magreza Moderada.";
    } else if (IMC >=17 &&  IMC<=18.5) {
        document.querySelector("#retorno").innerHTML= "Seu IMC é igual a: " + IMC.toFixed(2) + " / Você tem Magreza Leve.";
    } else if (IMC >=18.5 &&  IMC<=25) {
        document.querySelector("#retorno").innerHTML= "Seu IMC é igual a: " + IMC.toFixed(2) + " / Saudável.";   
    } else if (IMC >=25 &&  IMC<=30) {
        document.querySelector("#retorno").innerHTML= "Seu IMC é igual a: " + IMC.toFixed(2) + " / Sobrepeso.";
    } else if (IMC >=30 &&  IMC<=35) {
        document.querySelector("#retorno").innerHTML= "Seu IMC é igual a: " + IMC.toFixed(2) + " / Obesidade Grau I.";
    } else if (IMC >=35 &&  IMC<=40) {
        document.querySelector("#retorno").innerHTML= "Seu IMC é igual a: " + IMC.toFixed(2) + " / Obesidade Grau II.";
    } else if (IMC > 40) {
        document.querySelector("#retorno").innerHTML= "Seu IMC é igual a: " + IMC.toFixed(2) + " / Obesidade Grau III.";
    } 
}