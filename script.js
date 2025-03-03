
function temperature(){
var celcius=document.getElementById('c');
var farenheit=document.getElementById('f');
var temp=celcius.value;
temp=(temp*(9/5))+32;
farenheit.value=temp;
}

function weight(){
    var kilo=document.getElementById('kg');
    var pound=document.getElementById('pounds');
    var temp=kilo.value;
    temp*=2.2;
    pound.value=temp;
    }

    function distance(){
        var km=document.getElementById('km');
        var mile=document.getElementById('mile');
        var temp=km.value;
        temp*=0.62137;
        mile.value=temp;
        }