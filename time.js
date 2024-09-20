
function time(){

let date = new Date();
const h1time = document.getElementById("h1time");
h1time.textContent = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
if(date.getHours() <10){
    h1time.textContent="0"+date.getHours()+":"+date.getMinutes();
}
else{
    h1time.textContent=date.getHours()+":"+date.getMinutes();
}
}
setInterval(time,1000)