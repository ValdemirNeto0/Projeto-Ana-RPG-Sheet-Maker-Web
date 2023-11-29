var valorF = document.querySelector("#valorForca");
var valorC = document.querySelector("#valorConstituicao");
var valorD = document.querySelector("#valorDestreza");
var valorI = document.querySelector("#valorInteligencia");
var valorS = document.querySelector("#valorSabedoria");
var valorCa = document.querySelector("#valorCarisma");
var modificadorF = document.querySelector("#modificadorForca");
var modificadorC = document.querySelector("#modificadorConstituicao");
var modificadorD = document.querySelector("#modificadorDestreza");
var modificadorI = document.querySelector("#modificadorInteligencia");
var modificadorS = document.querySelector("#modificadorSabedoria");
var modificadorCa = document.querySelector("#modificadorCarisma");
var salvaguardaF = document.querySelector("#valorSalvaguardaForca");
var salvaguardaC = document.querySelector("#valorSalvaguardaConstituicao");
var salvaguardaD = document.querySelector("#valorSalvaguardaDestreza");
var salvaguardaI = document.querySelector("#valorSalvaguardaInteligencia");
var salvaguardaS = document.querySelector("#valorSalvaguardaSabedoria");
var salvaguardaCa = document.querySelector("#valorSalvaguardaCarisma");
var Acrobacia = document.querySelector("#vAcrobacia");/*Des FEITO*/
var Arcanismo = document.querySelector("#vArcanismo"); /*Int FEITO*/
var Atletismo = document.querySelector("#vAtletismo"); /*For FEITO*/
var Atuacao = document.querySelector("#vAtuacao"); /*Car FEITO*/
var Blefar = document.querySelector("#vBlefar"); /*Car FEITO*/
var Furtividade = document.querySelector("#vFurtividade"); /*Des FEITO*/
var Historia = document.querySelector("#vHistoria"); /*Int FEITO*/
var Intimidacao = document.querySelector("#vIntimidacao"); /*Car FEITO*/
var Intuicao = document.querySelector("#vIntuicao"); /*Sab FEITO*/
var Investigacao = document.querySelector("#vInvestigacao"); /*Int FEITO*/
var LidarAnimais = document.querySelector("#vLidarAnimais"); /*Sab FEITO*/
var Medicina = document.querySelector("#vMedicina"); /*Sab FEITO*/
var Natureza = document.querySelector("#vNatureza"); /*Int FEITO*/
var Percepcao = document.querySelector("#vPercepcao"); /*Sab FEITO*/
var Persuasao = document.querySelector("#vPersuasao"); /*Car FEITO*/
var Prestidigitacao = document.querySelector("#vPrestidigitacao"); /*Des FEITO*/
var Religiao = document.querySelector("#vReligiao"); /*Int FEITO*/
var Sobrevivencia = document.querySelector("#vSobrevivencia"); /*Sab FEITO*/
var resultado;

function botaoRolarDados(){
    Mudar_valores()
    console.log("deveria estar mudando os valores")
}

function RolarDado(){
    return Math.floor(Math.random() * (7 - 1) + 1)
}

function RolarDados(){
    res1 = RolarDado();
    res2 = RolarDado();
    res3 = RolarDado();
    res4 = RolarDado();
    if(res1 < res2 && res1 < res3 && res3 < res4){
        return (res2+res3+res4)
    }else if(res2 < res1 && res2< res3 && res2 < res4){
        return (res1+res3+res4)
    }else if(res3 < res1 && res3 < res2 && res3 < res4){
        return (res1+res2+res4)
    }else{
        return (res1+res2+res3)
    }
}

function Mudar_valores(){
    resultado = RolarDados();
    valorF.innerHTML = resultado;
    modificadorForca(resultado)

    resultado = RolarDados();
    valorD.innerHTML = resultado;
    modificadorDestreza(resultado)

    resultado = RolarDados();
    valorC.innerHTML = resultado;
    modificadorConstituicao(resultado)

    resultado = RolarDados();
    valorI.innerHTML = resultado;
    modificadorInteligencia(resultado)

    resultado = RolarDados();
    valorS.innerHTML = resultado;
    modificadorSabedoria(resultado)

    resultado = RolarDados();
    valorCa.innerHTML = resultado;
    modificadorCarisma(resultado)
    
}

function modificadorForca(ResultadoRolagem){
    switch(ResultadoRolagem){
        case 2:
        case 3: modificadorF.innerHTML = "-4";salvaguardaF.innerHTML = "-4";Atletismo.innerHTML = "-4";break;
        case 4:
        case 5: modificadorF.innerHTML = "-3";salvaguardaF.innerHTML = "-3";Atletismo.innerHTML = "-3";break;
        case 6:
        case 7: modificadorF.innerHTML = "-2";salvaguardaF.innerHTML = "-2";Atletismo.innerHTML = "-2";break;
        case 8:
        case 9: modificadorF.innerHTML = "-1";salvaguardaF.innerHTML = "-1";Atletismo.innerHTML = "-1";break;
        case 10:
        case 11: modificadorF.innerHTML = "0";salvaguardaF.innerHTML = "0";Atletismo.innerHTML = "0";break;
        case 12:
        case 13: modificadorF.innerHTML = "+1";salvaguardaF.innerHTML = "+1";Atletismo.innerHTML = "+1";break;
        case 14:
        case 15: modificadorF.innerHTML = "+2";salvaguardaF.innerHTML = "+2";Atletismo.innerHTML = "+2";break;
        case 16:
        case 17: modificadorF.innerHTML = "+3";salvaguardaF.innerHTML = "+3";Atletismo.innerHTML = "+3";break;
        case 18:
        case 19: modificadorF.innerHTML = "+4";salvaguardaF.innerHTML = "+4";Atletismo.innerHTML = "+4";break;
        default: modificadorF.innerHTML = "+5";salvaguardaF.innerHTML = "+5";Atletismo.innerHTML = "+5";break;
    }
}
function modificadorConstituicao(ResultadoRolagem){
    switch(ResultadoRolagem){
        case 2:
        case 3: modificadorC.innerHTML = "-4";salvaguardaC.innerHTML = "-4";break;
        case 4:
        case 5: modificadorC.innerHTML = "-3";salvaguardaC.innerHTML = "-3";break;
        case 6:
        case 7: modificadorC.innerHTML = "-2";salvaguardaC.innerHTML = "-2";break;
        case 8:
        case 9: modificadorC.innerHTML = "-1";salvaguardaC.innerHTML = "-1";break;
        case 10:
        case 11: modificadorC.innerHTML = "0";salvaguardaC.innerHTML = "0";break;
        case 12:
        case 13: modificadorC.innerHTML = "+1";salvaguardaC.innerHTML = "+1";break;
        case 14:
        case 15: modificadorC.innerHTML = "+2";salvaguardaC.innerHTML = "+2";break;
        case 16:
        case 17: modificadorC.innerHTML = "+3";salvaguardaC.innerHTML = "+3";break;
        case 18:
        case 19: modificadorC.innerHTML = "+4";salvaguardaC.innerHTML = "+4";break;
        default: modificadorC.innerHTML = "+5";salvaguardaC.innerHTML = "+5";break;
    }
}
function modificadorDestreza(ResultadoRolagem){
    switch(ResultadoRolagem){
        case 2:
        case 3: modificadorD.innerHTML = "-4";salvaguardaD.innerHTML = "-4";Acrobacia.innerHTML = "-4";Furtividade.innerHTML= "-4";
        Prestidigitacao.innerHTML = "-4";break;
        case 4:
        case 5: modificadorD.innerHTML = "-3";salvaguardaD.innerHTML = "-3";Acrobacia.innerHTML = "-3";Furtividade.innerHTML= "-3";
        Prestidigitacao.innerHTML = "-3";break;
        case 6:
        case 7: modificadorD.innerHTML = "-2";salvaguardaD.innerHTML = "-2";Acrobacia.innerHTML = "-2";Furtividade.innerHTML= "-2";
        Prestidigitacao.innerHTML = "-2";break;
        case 8:
        case 9: modificadorD.innerHTML = "-1";salvaguardaD.innerHTML = "-1";Acrobacia.innerHTML = "-1";Furtividade.innerHTML= "-1";
        Prestidigitacao.innerHTML = "-1";break;
        case 10:
        case 11: modificadorD.innerHTML = "0";salvaguardaD.innerHTML = "0";Acrobacia.innerHTML = "0";Furtividade.innerHTML= "0";
        Prestidigitacao.innerHTML = "0";break;
        case 12:
        case 13: modificadorD.innerHTML = "+1";salvaguardaD.innerHTML = "+1";Acrobacia.innerHTML = "+1";Furtividade.innerHTML= "+1";
        Prestidigitacao.innerHTML = "+1";break;
        case 14:
        case 15: modificadorD.innerHTML = "+2";salvaguardaD.innerHTML = "+2";Acrobacia.innerHTML = "+2";Furtividade.innerHTML= "+2";
        Prestidigitacao.innerHTML = "+2";break;
        case 16:
        case 17: modificadorD.innerHTML = "+3";salvaguardaD.innerHTML = "+3";Acrobacia.innerHTML = "+3";Furtividade.innerHTML= "+3";
        Prestidigitacao.innerHTML = "+3";break;
        case 18:
        case 19: modificadorD.innerHTML = "+4";salvaguardaD.innerHTML = "+4";Acrobacia.innerHTML = "+4";Furtividade.innerHTML= "+4";
        Prestidigitacao.innerHTML = "+4";break;
        default: modificadorD.innerHTML = "+5";salvaguardaD.innerHTML = "+5";Acrobacia.innerHTML = "+5";Furtividade.innerHTML= "+5";
        Prestidigitacao.innerHTML = "+5";break;
    }
}
function modificadorInteligencia(ResultadoRolagem){
    switch(ResultadoRolagem){
        case 2:
        case 3: modificadorI.innerHTML = "-4";salvaguardaI.innerHTML = "-4";Arcanismo.innerHTML = "-4";Historia.innerHTML = "-4";
        Investigacao.innerHTML = "-4";Natureza.innerHTML = "-4";Religiao.innerHTML = "-4";break;
        case 4:
        case 5: modificadorI.innerHTML = "-3";salvaguardaI.innerHTML = "-3";Arcanismo.innerHTML = "-3";Historia.innerHTML = "-3";
        Investigacao.innerHTML = "-3";Natureza.innerHTML = "-3";Religiao.innerHTML = "-3";break;
        case 6:
        case 7: modificadorI.innerHTML = "-2";salvaguardaI.innerHTML = "-2";Arcanismo.innerHTML = "-2";Historia.innerHTML = "-2";
        Investigacao.innerHTML = "-2";Natureza.innerHTML = "-2";Religiao.innerHTML = "-2";break;
        case 8:
        case 9: modificadorI.innerHTML = "-1";salvaguardaI.innerHTML = "-1";Arcanismo.innerHTML = "-1";Historia.innerHTML = "-1";
        Investigacao.innerHTML = "-1";Natureza.innerHTML = "-1";Religiao.innerHTML = "-1";break;
        case 10:
        case 11: modificadorI.innerHTML = "0";salvaguardaI.innerHTML = "0";Arcanismo.innerHTML = "0";Historia.innerHTML = "0";
        Investigacao.innerHTML = "0";Natureza.innerHTML = "0";Religiao.innerHTML = "0";break;
        case 12:
        case 13: modificadorI.innerHTML = "+1";salvaguardaI.innerHTML = "+1";Arcanismo.innerHTML = "+1";Historia.innerHTML = "+1";
        Investigacao.innerHTML = "+1";Natureza.innerHTML = "+1";Religiao.innerHTML = "+1";break;
        case 14:
        case 15: modificadorI.innerHTML = "+2";salvaguardaI.innerHTML = "+2";Arcanismo.innerHTML = "+2";Historia.innerHTML = "+2";
        Investigacao.innerHTML = "+2";Natureza.innerHTML = "+2";Religiao.innerHTML = "+2";break;
        case 16:
        case 17: modificadorI.innerHTML = "+3";salvaguardaI.innerHTML = "+3";Arcanismo.innerHTML = "+3";Historia.innerHTML = "+3";
        Investigacao.innerHTML = "+3";Natureza.innerHTML = "+3";Religiao.innerHTML = "+3";break;
        case 18:
        case 19: modificadorI.innerHTML = "+4";salvaguardaI.innerHTML = "+4";Arcanismo.innerHTML = "+4";Historia.innerHTML = "+4";
        Investigacao.innerHTML = "+4";Natureza.innerHTML = "+4";Religiao.innerHTML = "+4";break;
        default: modificadorI.innerHTML = "+5";salvaguardaI.innerHTML = "+5";Arcanismo.innerHTML = "+5";Historia.innerHTML = "+5";
        Investigacao.innerHTML = "+5";Natureza.innerHTML = "+5";Religiao.innerHTML = "+5";break;
    }
}
function modificadorSabedoria(ResultadoRolagem){
    switch(ResultadoRolagem){
        case 2:
        case 3: modificadorS.innerHTML = "-4";salvaguardaS.innerHTML = "-4";Intuicao.innerHTML = "-4";LidarAnimais.innerHTML = "-4";
        Medicina.innerHTML = "-4";Percepcao.innerHTML = "-4";Sobrevivencia.innerHTML = "-4";break;
        case 4:
        case 5: modificadorS.innerHTML = "-3";salvaguardaS.innerHTML = "-3";Intuicao.innerHTML = "-3";LidarAnimais.innerHTML = "-3";
        Medicina.innerHTML = "-3";Percepcao.innerHTML = "-3";Sobrevivencia.innerHTML = "-3";break;
        case 6:
        case 7: modificadorS.innerHTML = "-2";salvaguardaS.innerHTML = "-2";Intuicao.innerHTML = "-2";LidarAnimais.innerHTML = "-2";
        Medicina.innerHTML = "-2";Percepcao.innerHTML = "-2";Sobrevivencia.innerHTML = "-2";break;
        case 8:
        case 9: modificadorS.innerHTML = "-1";salvaguardaS.innerHTML = "-1";Intuicao.innerHTML = "-1";LidarAnimais.innerHTML = "-1";
        Medicina.innerHTML = "-1";Percepcao.innerHTML = "-1";Sobrevivencia.innerHTML = "-1";break;
        case 10:
        case 11: modificadorS.innerHTML = "0";salvaguardaS.innerHTML = "0";Intuicao.innerHTML = "0";LidarAnimais.innerHTML = "0";
        Medicina.innerHTML = "0";Percepcao.innerHTML = "0";Sobrevivencia.innerHTML = "0";break;
        case 12:
        case 13: modificadorS.innerHTML = "+1";salvaguardaS.innerHTML = "+1";Intuicao.innerHTML = "+1";LidarAnimais.innerHTML = "+1";
        Medicina.innerHTML = "+1";Percepcao.innerHTML = "+1";Sobrevivencia.innerHTML = "+1";break;
        case 14:
        case 15: modificadorS.innerHTML = "+2";salvaguardaS.innerHTML = "+2";Intuicao.innerHTML = "+2";LidarAnimais.innerHTML = "+2";
        Medicina.innerHTML = "+2";Percepcao.innerHTML = "+2";Sobrevivencia.innerHTML = "+2";break;
        case 16:
        case 17: modificadorS.innerHTML = "+3";salvaguardaS.innerHTML = "+3";Intuicao.innerHTML = "+3";LidarAnimais.innerHTML = "+3";
        Medicina.innerHTML = "+3";Percepcao.innerHTML = "+3";Sobrevivencia.innerHTML = "+3";break;
        case 18:
        case 19: modificadorS.innerHTML = "+4";salvaguardaS.innerHTML = "+4";Intuicao.innerHTML = "+4";LidarAnimais.innerHTML = "+4";
        Medicina.innerHTML = "+4";Percepcao.innerHTML = "+4";Sobrevivencia.innerHTML = "+4";break;
        default: modificadorS.innerHTML = "+5";salvaguardaS.innerHTML = "+5";Intuicao.innerHTML = "+5";LidarAnimais.innerHTML = "+5";
        Medicina.innerHTML = "+5";Percepcao.innerHTML = "+5";Sobrevivencia.innerHTML = "+5";break;
    }
}
function modificadorCarisma(ResultadoRolagem){
    switch(ResultadoRolagem){
        case 2:
        case 3: modificadorCa.innerHTML = "-4";salvaguardaCa.innerHTML = "-4";Atuacao.innerHTML = "-4";Blefar.innerHTML = "-4";
        Intimidacao.innerHTML = "-4";Persuasao.innerHTML = "-4";break;
        case 4:
        case 5: modificadorCa.innerHTML = "-3";salvaguardaCa.innerHTML = "-3";Atuacao.innerHTML = "-3";Blefar.innerHTML = "-3";
        Intimidacao.innerHTML = "-3";Persuasao.innerHTML = "-3";break;
        case 6:
        case 7: modificadorCa.innerHTML = "-2";salvaguardaCa.innerHTML = "-2";Atuacao.innerHTML = "-2";Blefar.innerHTML = "-2";
        Intimidacao.innerHTML = "-2";Persuasao.innerHTML = "-2";break;
        case 8:
        case 9: modificadorCa.innerHTML = "-1";salvaguardaCa.innerHTML = "-1";Atuacao.innerHTML = "-1";Blefar.innerHTML = "-1";
        Intimidacao.innerHTML = "-1";Persuasao.innerHTML = "-1";break;
        case 10:
        case 11: modificadorCa.innerHTML = "0";salvaguardaCa.innerHTML = "0";Atuacao.innerHTML = "0";Blefar.innerHTML = "0";
        Intimidacao.innerHTML = "0";Persuasao.innerHTML = "0";break;
        case 12:
        case 13: modificadorCa.innerHTML = "+1";salvaguardaCa.innerHTML = "+1";Atuacao.innerHTML = "+1";Blefar.innerHTML = "+1";
        Intimidacao.innerHTML = "+1";Persuasao.innerHTML = "+1";break;
        case 14:
        case 15: modificadorCa.innerHTML = "+2";salvaguardaCa.innerHTML = "+2";Atuacao.innerHTML = "+2";Blefar.innerHTML = "+2";
        Intimidacao.innerHTML = "+2";Persuasao.innerHTML = "+2";break;
        case 16:
        case 17: modificadorCa.innerHTML = "+3";salvaguardaCa.innerHTML = "+3";Atuacao.innerHTML = "+3";Blefar.innerHTML = "+3";
        Intimidacao.innerHTML = "+3";Persuasao.innerHTML = "+3";break;
        case 18:
        case 19: modificadorCa.innerHTML = "+4";salvaguardaCa.innerHTML = "+4";Atuacao.innerHTML = "+4";Blefar.innerHTML = "+4";
        Intimidacao.innerHTML = "+4";Persuasao.innerHTML = "+4";break;
        default: modificadorCa.innerHTML = "+5";salvaguardaCa.innerHTML = "+5";Atuacao.innerHTML = "+5";Blefar.innerHTML = "+5";
        Intimidacao.innerHTML = "+5";Persuasao.innerHTML = "+5";break;
    }
}