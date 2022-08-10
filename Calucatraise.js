function calc(){
    let a=document.getElementById('idnomber').value
    let b= eval(a);
    document.getElementById('idnomber').value=b
}
function afiche(val){
document.getElementById('idnomber').value+=val;
}
function ac(){
    document.getElementById('idnomber').value='';
}
function squer(){
    document.getElementById('idnomber').value=Math.sqrt(document.getElementById('idnomber').value)
}
function doubl(){
     document.getElementById('idnomber').value=Math.pow(document.getElementById('idnomber').value,2);
}
function dark(){
    document.querySelector('table').style='background-color:black;box-shadow: 0 0 15px white;';
    document.querySelector('#idnomber').style='background-color:black;color:white';
  
}
function ligt(){
    document.querySelector('table').style='background-color:white';
    document.querySelector('#idnomber').style='background-color:white;color:#005C97;'
}
var dr=document.querySelector('.drk');

