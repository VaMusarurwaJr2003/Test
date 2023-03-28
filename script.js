let display = document.getElementById("screen");
function allclear(){
    display.value = "";
}
function show(n){
    display.value+=n;
}
function ans(){
    display.value = eval(display.value);
}
