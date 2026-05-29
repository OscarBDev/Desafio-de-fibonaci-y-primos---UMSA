function filtrador(x){
    let k = 0;
    for(let i = 1; i <= x; i++){
        if(x % i == 0){
            k = k + 1
        }
    }
    if (k == 2){
        return x;
    }else{
        // lo convertimos a algun caracter de la tabla del acssi
        return String.fromCharCode(x)
    }
}

function GenerarFibo(a, b, n){
    let ver = "";
    while(n !=0 ){
        
        ver += filtrador(a);
        let c = a + b;
        a = b;
        b = c;

        n = n - 1;
    }
    return ver;
}

function generador(){
    let a = Number(document.getElementById("inicial").value);
    let b = Number(document.getElementById("secundario").value);
    let n = Number(document.getElementById("iteraciones").value);
    
    // generamos los numeros fibos
    let fibo = GenerarFibo(a, b, n);

    // mostramos los resultados
    document.getElementById("password").innerText = fibo;
}