const daysEl=document.getElementById('days')
 const hourEl=document.getElementById('hour')
 const minutesEl=document.getElementById('minutes')
 const secondEl=document.getElementById('second')

const newYears= '1 Jan 2022'
function countdown(){
    
    const newYearsdate= new Date(newYears)
    const currentYearsdate= new Date()
    const totalseconds = ((newYearsdate- currentYearsdate)/1000)
    const Mint= Math.floor(totalseconds/60)%60
    const hour= Math.floor(totalseconds/3600)%24
    const days= Math.floor(totalseconds/3600/24)
    const seconds= Math.floor(totalseconds)%60
    daysEl.innerHTML=days
    hourEl.innerHTML=formatTime(hour)
    minutesEl.innerHTML=formatTime(Mint)
    secondEl.innerHTML=formatTime(seconds)
  
}
function formatTime(time){
    return time < 10 ? (`0${time}`): time
}
countdown()
setInterval(countdown, 1000 )
