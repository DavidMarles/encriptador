const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");

/*e = enter
i = imes
a = ai
o = ober
u = ufat*/

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    const reglaString = /^[a-zA-Z ñÑ.,;:]+$/;
    const textoCorrecto = reglaString.test(textArea.value);

    if(textoCorrecto){
        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptado.includes(matrizCodigo[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
        }
        return stringEncriptado;
    }else{
        alert("Por Favor, solo letras minúsculas de la a-z, no use acentos ni caracteres especiales.")
        mensaje.style.backgroundImage = url('./imagenes/Muñeco.png');
    }

    
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    const reglaString = /^[a-zA-Z ñÑ.,;:]+$/;
    const textoCorrecto = reglaString.test(textArea.value);

    if(textoCorrecto){
        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptado.includes(matrizCodigo[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
        }
        return stringDesencriptado;
    }
    else{
        alert("Por Favor, solo letras minúsculas de la a-z, no use acentos ni caracteres especiales.")
        mensaje.style.backgroundImage = url('./imagenes/Muñeco.png');
        //mensaje.textContent = "Ningún Mensaje fue encontrado"
    }
}



function copiarTexto(){
    mensaje.select();
    document.execCommand("copy");       

}