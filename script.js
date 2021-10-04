console.log("hello i m stopwatch");
let[millisec,sec,min,hrs] = [0,0,0,0];
let timeRef = document.querySelector('.timerDis');
//start function
let int = null;
document.getElementById('startTimer').addEventListener('click', ()=>{
 int = setInterval(displayTimer ,10);
});

//pause function

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

// reset function
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [millisec,sec,min,hrs] = [0,0,0,0];
    timeRef.innerHTML = '00 : 00 : 00 : 000 ';
});




function displayTimer(){
    millisec+=10;
    if(millisec == 1000){
        millisec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min == 60){
                min = 0;
                hrs++;
            }
        }
    }
    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec;

    timeRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
