let datePicker = document.getElementById("birthday");

let loadingImage = document.getElementById("image");


function ageCalc(){
let birthDay = new Date(datePicker.value).getTime();

let calcYear = new Date().getFullYear() - new Date(datePicker.value).getFullYear();
let calcMonth = new Date().getMonth() - new Date(datePicker.value).getMonth();
let calcDate = new Date().getDate() - new Date(datePicker.value).getDate();
let calcHour = new Date().getHours() - new Date(datePicker.value).getHours();
let calcMinute = new Date().getMinutes() - new Date(datePicker.value).getMinutes();
let calcSecond = new Date().getSeconds() - new Date(datePicker.value).getSeconds();

if(calcDate < 0){
    calcDate +=31;
    calcMonth -=1;
}
if (calcMonth < 0){
        calcMonth += 12;
        calcYear -= 1;
    }

document.querySelector(".age__calculator--years h2").innerText = `${calcYear}`.padStart(2,"0")
document.querySelector(".age__calculator--months h2").innerText = `${calcMonth}`.padStart(2,"0")
document.querySelector(".age__calculator--days h2").innerText = `${calcDate}`.padStart(2,"0")
document.querySelector(".age__calculator--hours h2").innerText = `${calcHour}`.padStart(2,"0")
document.querySelector(".age__calculator--minutes h2").innerText = `${calcMinute}`.padStart(2,"0")
document.querySelector(".age__calculator--seconds h2").innerText = `${calcSecond}`.padStart(2,"0")



}
// console.log(ageCalc());
datePicker.addEventListener("change", () =>{
    if(new Date(datePicker.value).getFullYear() > new Date().getFullYear()){
        alert("Bugünün tarihinden büyük bir tarih seçtiniz...")
    }
    else{
    setInterval(ageCalc,1000)
    loadingImage.style.opacity = 0}
});
