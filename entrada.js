function getNumber () {
    let old = parseInt(prompt("How old are you?"));
if (old >=18){
    alert (" You can have access to this content");
}
else if (old>0 && old<18){
    alert("You cannot have access to this content");
            close();
}
else {
    alert("Please select a valid number");
    getNumber();
}
}    
getNumber();