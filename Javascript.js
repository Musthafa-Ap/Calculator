function clicked(val){
    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val;

}

function Clear(){
    document.getElementById("screen").value="";
}