const hour = document.querySelector("#hr");
const minute = document.querySelector("#min");
const second = document.querySelector("#sec");
const counter = document.querySelector("#count");

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

let zero = "0";



function start(){

    timer = true;

    stopwatch();
    
}

function stop() {
    
    timer = false;


}

function reset() {

    timer = false

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    counter.innerHTML = "00";
}


function stopwatch() {


    if (timer == true) {

        count = count + 1;

        if (count < 10) {

            counter.innerHTML = zero + count;

        } else {
            
            counter.innerHTML = count;

        }

        if (count == 100) {

            count = 0;

            sec = sec + 1;

            if (sec < 10) {
            
                second.innerHTML = zero + sec;

            } else {

                second.innerHTML = sec;
            }
            
           
        }

        if (sec == 60) {

            sec = 0;
            
            min = min + 1;

            if (sec < 10) {
                
                minute.innerHTML = zero + min;

            } else {
                
                minute.innerHTML = min;
            }

            
        }

        if (min == 60) {
            
            min = 0;

            hr = hr + 1;

            if (min < 10) {
                
                hour.innerHTML = zero +  hr;

            } else {
                
                hour.innerHTML = hr;
            }

        }


        setTimeout("stopwatch()", 10);
    } 
}

