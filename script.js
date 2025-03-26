
const setTimer = document.getElementById("displaytime")
const start = document.getElementById("startBtn")
const pause = document.getElementById("pauseBtn")
const reSet = document.getElementById("resetBtn");
const getStopedTime = document.getElementById("getTime")
const datalists = document.getElementById("laplist");

const clearList = document.getElementById("clearlist");



// const spanid1 = document.getElementById("span1")
// const spanid2 = document.getElementById("span2")


start.addEventListener("click", starts);
pause.addEventListener("click",paused);
reSet.addEventListener("click",reset);
getStopedTime.addEventListener("click",showstoptime);
clearList.addEventListener("click", clearLists)


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



function showstoptime(){
    const para = document.createElement("p");
    para.innerText = `the stop time is ${count} sec`;
    datalists.append(para)
    console.log(para)
}

function clearLists(){
    datalists.innerHTML = null;
    console.log("clear")
}