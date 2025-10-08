let hourSpan=document.getElementById('hour')
let minuteSpan=document.getElementById('minute')
let secondSpan=document.getElementById('second')
let amorpmSpan=document.getElementById('amorpm')


function changeTime(){
    let date=new Date()
    let hour=date.getHours()
    hourSpan.innerHTML=hour

    let min=date.getMinutes()
    minuteSpan.innerHTML=min

    let sec=date.getSeconds()
    secondSpan.innerHTML=sec

    if(hour>=0 && hour<=11){
        amorpm="AM"
    }else{
        amorpm="PM"
    }
      amorpmSpan.innerHTML=amorpm
}

setInterval(changeTime,1000)
