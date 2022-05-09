const input = document.querySelector(".textoInput");
const mensaje = document.querySelector(".textoInputArea");

function btnEncriptar(){
    const textoEncriptado = encriptar(input.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringEncriptar){
    let matrizCódigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
    stringEncriptar = stringEncriptar.toLowerCase();
    for (let i=0; i<matrizCódigo.length; i++){
        if(stringEncriptar.includes(matrizCódigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCódigo[i][0],matrizCódigo[i][1])
        }
    }
    return stringEncriptar;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(input.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringDesencriptar){
    let matrizCódigo2 = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]]
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for (let i=0; i<matrizCódigo2.length; i++){
        if(stringDesencriptar.includes(matrizCódigo2[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCódigo2[i][0],matrizCódigo2[i][1])
        }
    }
    return stringDesencriptar;
}

