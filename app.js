let button = document.getElementById("getTimeZone");
if(button!==null){
    button.addEventListener("click",timezone);
}

function timezone(){
    document.getElementById("showTimeZone").innerHTML = Date();
}