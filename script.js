
const setTimer = document.getElementById("displaytime")
const start = document.getElementById("startBtn")
const pause = document.getElementById("pauseBtn")
const reSet = document.getElementById("resetBtn");

// const spanid1 = document.getElementById("span1")
// const spanid2 = document.getElementById("span2")


start.addEventListener("click", starts);
pause.addEventListener("click",paused);
reSet.addEventListener("click",reset)



let count =0;
let timer= 0;

function starts(){
    if(timer === 0){
         timer = setInterval(()=>{
        count++;
        setTimer.innerHTML = count + " sec";
        console.log(count)
    },1000);

    }

}


// function starts(){
//     if(timer === 0){
//          timer = setInterval(()=>{
//         count++;
//         spanid2.innerHTML = count
//         console.log(count)
//     },1000);

//     }

// }

function paused(){
    clearInterval(timer)
    timer=0;
    console.log("pause");
}

function reset(){
    clearInterval(timer)
    timer = 0;
    count =0;
    setTimer.innerHTML = count+ " sec";
    console.log("reset");
}



