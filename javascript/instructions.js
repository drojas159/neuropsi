let segundos =10    ;

function loadSeconds(){
    if (segundos >0){
        segundos --;  
        if(segundos==0){
            window.location.href='./neuropsi.html';
        }
    } 
    let txtSeconds;
    
    if(segundos <0 ){
        segundos=59;
    }

    if(segundos < 10){
        txtSeconds = `${segundos}`;
    }else{
        txtSeconds = segundos;
    }
    document.getElementById("second").innerHTML=txtSeconds;
    
    
}

interval=setInterval(loadSeconds, 1000)