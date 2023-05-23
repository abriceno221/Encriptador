function focusOnInput(){
    document.getElementById("texto").focus();
}

function cambioNombre1(){
    document.getElementById("boton").value="Copiado! :)";
}

function cambioNombre2(){
    document.getElementById("boton").value="Copiar";
}

function mostrarTexto(){
    document.getElementById('boton').style.display="block";
    var texto=document.getElementById("texto").value;
    document.getElementById("texto").value="";
    focusOnInput();
    encriptacion(texto);
    cambioNombre2();
}

function mostrarTexto1(){
    document.getElementById('boton').style.display="block";
    var texto=document.getElementById("texto").value;
    document.getElementById("texto").value="";
    focusOnInput();
    desencriptacion(texto);
    cambioNombre2();
}

function encriptacion(texto){
    var textoModificado="K";
    for(var i=0; i<texto.length; i++){
        if(texto[i]=="a"){
            textoModificado=textoModificado+"ai";
        }else{
            if(texto[i]=="e"){
                textoModificado=textoModificado+"enter";
            }else{
                if(texto[i]=="i"){
                    textoModificado=textoModificado+"imes";
                }else{
                    if(texto[i]=="o"){
                        textoModificado=textoModificado+"ober";
                    }else{
                        if(texto[i]=="u"){
                            textoModificado=textoModificado+"ufat";
                        }else{
                            textoModificado=textoModificado+texto[i];
                        }
                    }
                }
            }
        }
    }

    textoModificado=textoModificado.substring(1,textoModificado.length);
    escribir(textoModificado);
}

function copiado(){
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById('textoMostrado').innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    focusOnInput();
    cambioNombre1();
}

function desencriptacion(texto){
    var textoDesen="K";
    for(var i=0; i<texto.length; i++){
        if((texto[i]=="e")&&
           (texto[i+1]=="n")&&
           (texto[i+2]=="t")&&
           (texto[i+3]=="e")&&
           (texto[i+4]=="r")){
            textoDesen=textoDesen+"e";
            i=i+4;
        }else{
            if((texto[i]=="i")&&
              (texto[i+1]=="m")&&
              (texto[i+2]=="e")&&
              (texto[i+3]=="s")){
                textoDesen=textoDesen+"i";
                i=i+3;
            }else{
                if((texto[i]=="a")&&
                   (texto[i+1]=="i")){
                    textoDesen=textoDesen+"a";
                    i++;
                }else{
                    if((texto[i]=="o")&&
                       (texto[i+1]=="b")&&
                       (texto[i+2]=="e")&&
                       (texto[i+3]=="r")){
                        textoDesen=textoDesen+"o";
                        i=i+3;
                    }else{
                        if((texto[i]=="u")&&
                           (texto[i+1]=="f")&&
                           (texto[i+2]=="a")&&
                           (texto[i+3]=="t")){
                            textoDesen=textoDesen+"u";
                            i=i+3;
                        }else{
                            textoDesen=textoDesen+texto[i];
                        }
                    }
                }
            }
        }
    }
    textoDesen=textoDesen.substring(1,textoDesen.length);
    escribir(textoDesen);
}

function escribir(textoMostrar){
    document.getElementById('textoMostrado').innerHTML=textoMostrar;
    document.getElementById('muneco').style.display="none";
    document.getElementById('parrafo1').style.display="none";
    document.getElementById('parrafo2').style.display="none";
}
      
