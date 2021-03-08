 

function clicked(val){
    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val;

}

function Clear(){
    document.getElementById("screen").value="";
}

function equalclicked(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value=result
}
function back(){
    var text=document.getElementById("screen").value;
    document.getElementById("screen").value=text.substring(0,text.length-1)
}
