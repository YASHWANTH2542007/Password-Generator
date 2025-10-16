let keylist='abcdefghijklmnopqrstuwyz1234567890!@#$%^&';
let password='';

let genpass=(plen)=>{
    password='';

    for(i=0;i<plen;i++){
        password +=keylist.charAt(Math.floor(Math.random()*keylist.length));
    }
    return password;
}

let passwordGen=(passl)=>{
    document.output.password.value=genpass(passl);
}