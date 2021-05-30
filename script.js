var i = 0;
var txt = 'when some lit people met ...';
var speed = 50;
window.onscroll = function() {scroll()};
function typeWriter() {
    if (i < txt.length) {
    document.getElementById("hii").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  }
document.getElementById("myFrame").addEventListener("load", typeWriter());

function show1(n){
    if(n==1){
        document.querySelector("#first").style.display = "flex";
        document.querySelector("#fi").style.display = "none";
    }
    else if(n==2){
        document.querySelector("#first").style.display = "none";
        document.querySelector("#fi").style.display = "block";
    }
}
function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scroll(){
    if (document.body.scrollTop>20  || document.documentElement.scrollTop > 20){
        document.getElementById("last").style.display = "flex";
    }
    else{
        document.getElementById("last").style.display = "none";
    }
}
function change(f){
    if(f==1){
        document.querySelector("#nav2").classList.remove("active"); 
        document.querySelector("#nav3").classList.remove("active"); 
        document.querySelector("#nav4").classList.remove("active");
    }
    else if(f==2){
        document.querySelector("#nav1").classList.remove("active"); 
        document.querySelector("#nav2").classList.add("active"); 
        document.querySelector("#nav3").classList.remove("active"); 
        document.querySelector("#nav4").classList.remove("active");
    }
    else if(f==3){
        document.querySelector("#nav1").classList.remove("active"); 
        document.querySelector("#nav2").classList.remove("active"); 
        document.querySelector("#nav3").classList.add("active"); 
        document.querySelector("#nav4").classList.remove("active");
    }
    else if(f==3){
        document.querySelector("#nav1").classList.remove("active"); 
        document.querySelector("#nav2").classList.remove("active"); 
        document.querySelector("#nav3").classList.remove("active"); 
        document.querySelector("#nav4").classList.add("active");
    }
}
function image(c){
    if (c==1){
        document.querySelector("#web1").style.display = "block";
        document.querySelector("#i1").style.display = "none";
    }
    else if (c==2){
        document.querySelector("#web1").style.display = "none";
        document.querySelector("#i1").style.display = "block";
    }
    else if (c==3){
        document.querySelector("#web2").style.display = "block";
        document.querySelector("#i3").style.display = "none";
    }
    else if (c==4){
        document.querySelector("#web2").style.display = "none";
        document.querySelector("#i3").style.display = "block";
    }
}
