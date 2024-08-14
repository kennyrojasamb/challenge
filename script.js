
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage ="none"
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.tolowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.incluides(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceA11(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.tolowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.incluides(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceA11(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
