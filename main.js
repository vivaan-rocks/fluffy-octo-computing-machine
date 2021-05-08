function pushArrayElementsInInput(){
    var names=[];
var n1="";
for(i=0;i<4;i++){
    names.push(document.getElementById('input'+i).value);
}

document.getElementById("greenlabel").innerHTML+="<b>"+names.join(" ")+"</b>"
}