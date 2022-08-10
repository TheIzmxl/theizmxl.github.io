const codigoEncriptado = {
    encriptado: '',
    desencriptado: ''
}
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    mostrarMensaje();
    //Encriptar el Mensaje
    encriptar();
    //desencriptar el mensaje
    desencriptar();
    //Botones
    btnencriptar();
    btndesencriptar();


}
function encriptar() {
    const appEncriptador = document.querySelector('.app-encriptador')
    const noTexto = document.querySelector('.no-texto')
    const mensaje = document.querySelector('#mensaje');
    mensaje.addEventListener('input', e => {
        e.preventDefault();
        if (mensaje != '') {
            const mayuscula = e.target.value;
            if(/[A-Z]/.test(mayuscula)) {
                mostrarAlerta('No se admiten mayusculas || Conviritendo a Minisculas', 'error');
            } else {
                const alerta = document.querySelector('.alerta');
                    if (alerta) {
                        alerta.remove();
                    }    
            }
            
            const encriptar = e.target.value.toLowerCase();
            
            const lte = encriptar.replace(/e/gi, 'enter');
            const lti = lte.replace(/i/gi, 'imes');
            const lta = lti.replace(/a/gi, 'ai');
            const lto = lta.replace(/o/gi, 'ober');
            const ltu = lto.replace(/u/gi, 'ufat');

            codigoEncriptado.encriptado = ltu;
            
            // btnencriptar()
            
        
        } 

    })
}
function desencriptar() {
    const mensaje = document.querySelector('#mensaje');
    mensaje.addEventListener('input', e => {
        const desencriptar = e.target.value.toLowerCase();
        const lte = desencriptar.replace(/enter/gi, 'e');
        const lti = lte.replace(/imes/gi, 'i');
        const lta = lti.replace(/ai/gi, 'a');
        const lto = lta.replace(/ober/gi, 'o');
        const ltu = lto.replace(/ufat/gi, 'u');

        codigoEncriptado.desencriptado = ltu;
        
    })

}
function mostrarMensaje(tipo) {
    const {encriptado, desencriptado} = codigoEncriptado;
    const appEncriptado = document.querySelector('.app-encriptado')
    while(appEncriptado.firstChild){
        appEncriptado.removeChild(appEncriptado.firstChild)
    }
    if(Object.values(codigoEncriptado).includes('')) {
        const noTexto = document.createElement('DIV');
        noTexto.classList.add('no-texto');
        const icon = document.createElement('IMG');
        icon.src = 'img/robot.png'
        icon.classList.add('icon')
        
        

        const noMensaje = document.createElement('H2');
        noMensaje.textContent = 'Ningún Mensaje Fue Encontrado';
        const mensajePa = document.createElement('P');
        mensajePa.textContent = 'Ingresá el texto que deseas Encriptar o Desencriptar'
        noTexto.appendChild(icon)
        noTexto.appendChild(noMensaje);
        noTexto.appendChild(mensajePa);
        appEncriptado.appendChild(noTexto)
        return
    }
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('divMensaje');
        const texto = document.createElement('P');
        texto.classList.add('resultado');
        
    if(tipo === 'encriptar') {
        
        texto.textContent = encriptado;
        console.log(texto)
    }
    if(tipo === 'desencriptar') {
        
        texto.textContent = desencriptado;
        console.log(texto)
    }
    divMensaje.appendChild(texto);
    appEncriptado.appendChild(divMensaje); 
}
function btnencriptar() {
     
     const btnencriptar = document.querySelector('#btnencriptar');
     btnencriptar.addEventListener('click', function() {
        encriptar();
        mostrarMensaje('encriptar');
        btncopiar();
        
        // console.log('encriptando')

     })
}
function btndesencriptar() {
     
     const btndesencriptar = document.querySelector('#btndesencriptar');
     btndesencriptar.addEventListener('click', function() {
        desencriptar();
        mostrarMensaje('desencriptar');
        btncopiar();
        

     })
}
function mostrarAlerta(mensaje, tipo) {
    const alertaPrevia = document.querySelector('.alerta');
    if (alertaPrevia) {
        return
    }
    
    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');
    if (tipo === 'error') {
        alerta.classList.add('error');
    }
    const textarea = document.querySelector('.ubiAlerta');
    textarea.appendChild(alerta)
    setTimeout(() => {
        alerta.remove()
    }, 3000);
}

function btncopiar() {
    const appEncriptado = document.querySelector('.app-encriptado')
    const noTexto = document.querySelector('.no-texto')
    if(noTexto) {
        return
    }
    const boton = document.createElement('P')
    boton.classList.add('btn');
    boton.classList.add('btn-copiar');
    boton.textContent = '¡Copiar!';

    appEncriptado.appendChild(boton)

    boton.onclick = function(){
        const portapapeles = document.querySelector('.resultado').textContent;
         navigator.clipboard.writeText(portapapeles).then(() => {
        }, () => {
        });
        // console.log(portapapeles)
    }
}
