let val=document.getElementById('val');

function afichage(e){
    val.value+=e;
}

function calcule(){
    try{
        val.value=eval(val.value).toString();
    }catch(err){
        val.value="Error!";
    }
}

function clearAll(){
     val.value='';
}

function clerr(){
   val.value=val.value.slice(0,val.value.length-1)
}

function squar(){
   val.value=Math.pow(val.value,2).toString()
}
