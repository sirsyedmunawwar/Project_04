function clock(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("am");
    
    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;

}
setInterval(clock,1000);

function settime(){
    var i=document.getElementById("wakeUpTimeSelector").value;
    var hourr=new Date().getHours();
    

    if(i==hourr){
        document.getElementById("right-bottom-container").style.backgroundImage="url(./assets/wakeup_image.svg)";
        document.getElementById("text-container").innerHTML="WAKE UP!!";
    }
Makediv();
}


function Makediv(){
    var container=document.createElement("div");
    container.className="grid-item";
    container.id="dynamic-block";
    document.getElementById("grid-container1").appendChild(container);
    var invalue=document.getElementById("wakeUpTimeSelector");
    var value=invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="Wake up time" + value;
} 