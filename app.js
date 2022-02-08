let datePicker = document.getElementById("birthday");
// let calcDate = datePicker.value.getDate();
console.log(datePicker);
let loadingImage = document.getElementById("image");


function ageCalc(){
let birthDay = new Date(datePicker.value).getTime();
let diff = (new Date().getTime() - birthDay) / 1000;
let minute = 60
let hour = minute * 60
let day = hour * 24
let month = day * 30
let year = month * 12 + (5*day + 6*hour)

let yearDiff = Math.floor(diff / year);
let monthDiff = Math.floor((diff %year) / month);
let dateDiff = Math.floor((diff % month) / day);
let hourDiff = Math.floor((diff % day) / hour);
let minuteDiff = Math.floor((diff % hour) / minute);
let secondDiff = Math.floor((diff % minute));

document.querySelector(".age__calculator--years h2").innerText = `${yearDiff}`
document.querySelector(".age__calculator--months h2").innerText = `${monthDiff}`
document.querySelector(".age__calculator--days h2").innerText = `${dateDiff}`
document.querySelector(".age__calculator--hours h2").innerText = `${hourDiff}`
document.querySelector(".age__calculator--minutes h2").innerText = `${minuteDiff}`
document.querySelector(".age__calculator--seconds h2").innerText = `${secondDiff}`

}

datePicker.addEventListener("change", () =>{
    if(new Date(datePicker.value).getFullYear() > new Date().getFullYear()){
        alert("Bugünün tarihinden büyük bir tarih seçtiniz...")
    }
    else{
    setInterval(ageCalc,1000)
    loadingImage.style.opacity = 0}
});