let resposta = document.getElementById("resposta")

function calcula_volume(){
    let altura = Number (document.getElementById("altura").value )
    let larg = Number (document.getElementById("larg").value )
    let comp = Number (document.getElementById("comp").value)

    console.log("altur=" + altura + "larg =" + larg + "comp =" + comp)

    let vol = altura + larg + comp

    console.log("o volume do paralelepipedo e "+vol)

    resposta.innerHTML = "o volume do paralelepipedo é " +vol + " m3"

    resposta.style.fontSize = "1.25rem"
    resposta.style.fontWeight = "bold"
}
