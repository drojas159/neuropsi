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
    neuropsiGridHtml = '<table id="neuropsi-grid">';
    for (var i=0; i< neuropsiGrid.length; i++){
        neuropsiGridHtml = neuropsiGridHtml + '<tr>';
        for(var j=0; j< neuropsiGrid[i].length;j++){
            neuropsiGridHtml = neuropsiGridHtml + '<th><button id="item_'+i+'_'+j+'" value="'+neuropsiGrid[i][j]+'" onclick="identifyElement(this.id,this.value)"><img class="'+neuropsiGrid[i][j]+' icon"></button></th>'
        }
        neuropsiGridHtml = neuropsiGridHtml +'</tr>';
    }
    neuropsiGridHtml = neuropsiGridHtml +'</table>';
    return neuropsiGridHtml;
}

var counter = 0;

function identifyElement(id, figure){
    var imageClass = document.getElementById(id).firstChild.className;
    if (figure == "five-pointed-star" && imageClass.indexOf("-clicked") == -1  ){
        counter++;
        document.getElementById(id).firstChild.className = figure + "-clicked icon";
    }
    document.getElementById("score-div").innerHTML="<h1>Puntaje: "+counter+"</h1>";
}

window.onload = function() {
    document.getElementById("neuropsi-div").innerHTML = buildNeuropsiGrid ();
}
