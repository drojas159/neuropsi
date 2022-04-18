var neuropsiGrid = [
    ['triangle','five-pointed-star','xmark','petal','six-pointed-star','four-pointed-star','five-pointed-star',
     'petal','rounded-cross','cross','six-pointed-star','diamond','hourglass','rounded-cross'],
    ['eight-pointed-star','diamond','four-pointed-star','cross','triangle','eight-pointed-star','rounded-cross',
     'xmark','five-pointed-star','triangle','five-pointed-star','petal','four-pointed-star','cross'],
    ['rounded-cross','cross','petal','hourglass','five-pointed-star','diamond','four-pointed-star',
     'triangle','hourglass','petal','eight-pointed-star','rounded-cross','xmark','five-pointed-star'],
    ['petal','hourglass','diamond','eight-pointed-star','xmark','triangle','six-pointed-star',
     'four-pointed-star','six-pointed-star','cross','triangle','hourglass','six-pointed-star','eight-pointed-star'],
    ['diamond','six-pointed-star','petal','hourglass','cross','six-pointed-star','xmark',
     'xmark','diamond','five-pointed-star','four-pointed-star','cross','diamond','triangle'],
    ['xmark','triangle','five-pointed-star','rounded-cross','diamond','hourglass','eight-pointed-star',
     'triangle','hourglass','rounded-cross','six-pointed-star','petal','five-pointed-star','four-pointed-star'],
    ['five-pointed-star','rounded-cross','eight-pointed-star','cross','four-pointed-star','cross','six-pointed-star',
     'eight-pointed-star','xmark','diamond','xmark','six-pointed-star','eight-pointed-star','hourglass'],
    ['hourglass','four-pointed-star','xmark','five-pointed-star','petal','triangle','rounded-cross',
     'petal','four-pointed-star','cross','five-pointed-star','rounded-cross','diamond','eight-pointed-star'],
    ['xmark','rounded-cross','four-pointed-star','triangle','cross','eight-pointed-star','petal',
     'xmark','six-pointed-star','five-pointed-star','petal','xmark','five-pointed-star','hourglass'],
    ['five-pointed-star','cross','eight-pointed-star','xmark','five-pointed-star','diamond','four-pointed-star',
     'triangle','four-pointed-star','rounded-cross','diamond','hourglass','triangle','six-pointed-star'],
    ['six-pointed-star','petal','triangle','rounded-cross','six-pointed-star','hourglass','xmark',
     'cross','diamond','xmark','five-pointed-star','eight-pointed-star','cross','diamond'],
    ['diamond','five-pointed-star','cross','eight-pointed-star','four-pointed-star','five-pointed-star','petal',
     'eight-pointed-star','petal','hourglass','four-pointed-star','rounded-cross','hourglass','six-pointed-star'],
    ['four-pointed-star','hourglass','rounded-cross','hourglass','six-pointed-star','cross','triangle',
     'four-pointed-star','six-pointed-star','cross','triangle','eight-pointed-star','xmark','petal'],
    ['five-pointed-star','triangle','petal','diamond','xmark','rounded-cross','eight-pointed-star',
     'five-pointed-star','rounded-cross','petal','diamond','petal','rounded-cross','five-pointed-star'],
    ['rounded-cross','eight-pointed-star','hourglass','cross','petal','six-pointed-star','five-pointed-star',
     'cross','hourglass','xmark','five-pointed-star','triangle','four-pointed-star','cross'],
    ['hourglass','six-pointed-star','xmark','diamond','four-pointed-star','triangle','diamond',
     'eight-pointed-star','rounded-cross','four-pointed-star','diamond','triangle','six-pointed-star','eight-pointed-star']
]

var correctPlaces =[
    "item_0_1",
    "item_0_6"	,
    "item_1_8"	,
    "item_1_10"	,
    "item_2_4"	,
    "item_2_13"	,
    "item_4_9"	,
    "item_5_2"	,
    "item_5_12"	,
    "item_6_0"	,
    "item_7_3"	,
    "item_7_10"	,
    "item_8_9"	,
    "item_8_12"	,
    "item_9_0"	,
    "item_9_4"	,
    "item_10_10"	,
    "item_11_1"	,
    "item_11_5"	,
    "item_13_0"	,
    "item_13_7"	,
    "item_13_13"	,
    "item_14_6"	,
    "item_14_10"	
]

function buildNeuropsiGrid (){
    var neuropsiGridHtml;
    neuropsiGridHtml = '<table id="neuropsi-grid" class="neuropsi-grid">';
    for (var i=0; i< neuropsiGrid.length; i++){
        neuropsiGridHtml = neuropsiGridHtml + '<tr>';
        for(var j=0; j< neuropsiGrid[i].length;j++){
            neuropsiGridHtml = neuropsiGridHtml + '<th><button id="item_'+i+'_'+j+'" class="neuropsi-button" value="'+neuropsiGrid[i][j]+'" onclick="identifyElement(this.id,this.value)" disabled><img class="'+neuropsiGrid[i][j]+' icon"></button></th>'
        }
        neuropsiGridHtml = neuropsiGridHtml +'</tr>';
    }
    neuropsiGridHtml = neuropsiGridHtml +'</table>';
    return neuropsiGridHtml;
}

var correct = 0;
var incorrect = 0;

function identifyElement(id, figure){
    var imageClass = document.getElementById(id).firstChild.className;
    if (figure == "five-pointed-star" && imageClass.indexOf("-clicked") == -1  ){
        correct++;
        document.getElementById(id).firstChild.className = figure + "-clicked icon";
    }else if (figure != "five-pointed-star" && imageClass.indexOf("-clicked") == -1  ){
        incorrect++;
        document.getElementById(id).firstChild.className = figure + "-clicked icon";
    }
    /* console.log(correct);
    console.log(incorrect); */
}
var start;
window.onload = function() {
    
    if (document.getElementById("neuropsi-div") != null){
        
        console.log("neuropsi");        
        document.getElementById("neuropsi-div").innerHTML = buildNeuropsiGrid ();
        start = performance.now();
    }

    if (document.getElementById("resultados")!= null){
        console.log("results");
        showResults();
    }
}

let horas = 0;
let minutos = 1;
let segundos =0;
var duration;

function loadSeconds(){
    /* console.log(minutos);
    console.log(segundos); */
    let txtSeconds;

    if(segundos <0 ){
        segundos=59;
    }
    
    if(segundos < 10){
        txtSeconds = `0${segundos}`;
    }else{
        txtSeconds = segundos;
    }
    //document.getElementById("second").innerHTML=txtSeconds;
    if (minutos == 0 && segundos >0){
        segundos --;
        if(lockedButtons == true)unlockButtons();
    }else if (minutos>0){
        segundos--;
        if(lockedButtons == true)unlockButtons();
    }else if (minutos == 0 && segundos ==0){
        duration = 60000;
        blockButtons();
        if (document.getElementById("neuropsi-div") != null){
            redirectResults('No',0);
        }
    }
    loadMinutes(segundos)
}

function loadMinutes(segundos){
    let txtMinutes;

    if(segundos == -1 && minutos !==0){
        setTimeout(() => {
            minutos --;
        }, 500)
    }

    if(minutos < 10){
        txtMinutes = `0${minutos}`;
    }else{
        txtMinutes = minutos;
    }
    // document.getElementById("minute").innerHTML=txtMinutes+":";
}


var interval;
interval=setInterval(loadSeconds, 1000)


var lockedButtons=true;
function blockButtons(){
    buttons=document.querySelectorAll('.neuropsi-button');
        buttons.forEach((button, index) => {
            button.disabled = true;
        });
    lockedButtons=true;
}

function unlockButtons(){
    buttons=document.querySelectorAll('.neuropsi-button');
        buttons.forEach((button, index) => {
            button.disabled = false;
        });
    lockedButtons=false;
}

function restart(){
    minutos=1;
    segundos=0;
    correct = 0;
    incorrect = 0;
    clearInterval(interval);
    blockButtons();
}
function redirectResults(finalyzed,tiempo){
    if (tiempo == 1){
        duration = performance.now() - start;
    }
    window.location.href='./results.html?good='+correct+'&bad='+incorrect+'&duration='+duration+'&finalyzed='+finalyzed;

   
}

function showResults(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var correctAmount = url.searchParams.get("good");
    var incorrectAmount = url.searchParams.get("bad");
    var durationAmount = url.searchParams.get("duration");
    var finalyzedAmount = url.searchParams.get("finalyzed");
    durationAmount = formatDuration(durationAmount);
    document.getElementById("finalyzed").innerHTML=finalyzedAmount;
    document.getElementById("correct-amount").innerHTML=correctAmount;
    document.getElementById("incorrect-amount").innerHTML=incorrectAmount;
    document.getElementById("total-time").innerHTML=durationAmount;
}

function formatDuration(durationAmount){
    var tiempo = (durationAmount/1000).toFixed(1);

    return tiempo.toString()+" segundos";
}