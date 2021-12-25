let userName = prompt("İsminizi giriniz :")
let myName = document.querySelector('#myName')
myName.innerHTML = userName

let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let day = date.getDay()
let myClock = document.querySelector('#myClock')

if(day == 0){
    day = "Pazartesi"
}else if(day == 1){
    day = "Salı"
}else if(day == 2){
    day = "Çarşamba"
}
else if(day == 3){
    day = "Perşembe"
}
else if(day == 4){
    day = "Cuma"
}
else if(day == 5){
    day = "Cumartesi"
}
else if(day == 6){
    day = "Pazar"
}

myClock.innerHTML = `${hours}:${minutes}:${seconds} ${day}`