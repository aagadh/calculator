function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val
}
function clearscreen(){
    document.getElementById("screen").value=""
}
function buttonresult(){
    var text=document.getElementById("screen").value
    result=eval(text)
    document.getElementById("screen").value=result

}