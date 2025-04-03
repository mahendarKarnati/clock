// sec hand
let sec=document.querySelector("#sec");
// min hand 
let min=document.querySelector("#min");
// hour hand 
let hr=document.querySelector("#hr");
// digital clock 
// seconds 
let s=document.querySelector("#s");
// minutes 
let m=document.querySelector("#m");
// hours 
let h=document.querySelector("#h");
// interval function 
setInterval(myfunction,1000);
function myfunction(){
    let date=new Date();
    let sdeg=date.getSeconds();
    let mdeg=date.getMinutes();
    let hdeg=date.getHours();

    s.textContent=sdeg;
    m.textContent=mdeg;
    h.textContent=hdeg%12;
    sec.style.transform = "rotate(" + (sdeg*6) + "deg)";
    min.style.transform = "rotate(" + (mdeg*6+sdeg*0.06) + "deg)";
    hr.style.transform = "rotate(" + (hdeg*30+mdeg*0.6) + "deg)";
}