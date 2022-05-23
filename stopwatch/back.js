const timeDisplay = document.querySelector("#time");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
//let time=document.getElementById("time");

var hrs=0,secs=0,mins=0;
var str="00:00:00";
var t;
function start(){//works for the  start button
    t=setInterval(()=>{
        secs++;
        if(secs==60)mins++;
        secs=secs%60;
       if(mins==60)hrs++;
       mins=mins%60;
       str=doubleDigit(hrs.toString())+":"+ doubleDigit(mins.toString())+":"+ doubleDigit(secs.toString()); 
        timeDisplay.innerHTML=str;
    },1000)
}
function stop(){
    clearInterval(t);
    timeDisplay.innerHTML=str;
}
function reset(){
    clearInterval(t);
    str="00:00:00";
    hrs=0;mins=0;secs=0;
    timeDisplay.innerHTML=str;
}
var running=false;
startBtn.addEventListener("click", ()=>{
    if(!running){
    start();
    running=true;
  }
});
pauseBtn.addEventListener("click",()=>{
    if(running){
   stop();
    running=false;
    stopped=true;
   }
});
resetBtn.addEventListener("click",()=>{
    
    reset();
    running=false;
});

function doubleDigit(str){//converts single zero to double
if(str.length==1)
str="0".concat(str);
return str;
}
