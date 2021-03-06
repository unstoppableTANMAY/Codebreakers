const cir1l = document.getElementById("circle_1").style.left;
const cir1t = document.getElementById("circle_1").style.top;
const cir2l = document.getElementById("circle_2").style.left;
const cir2t = document.getElementById("circle_2").style.top;
const cir3l = document.getElementById("circle_3").style.left;
const cir3t = document.getElementById("circle_3").style.top;

$(document).on("click mousemove","body",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var tenx = cir1l+(x/100);
    var teny = cir1t+(y/100);
    document.getElementById("circle_1").style.left = tenx+"px";
    document.getElementById("circle_1").style.top = teny+"px";
    document.getElementById("r_circle_1").style.left = tenx+"px";
    document.getElementById("r_circle_1").style.top = teny+"px";
    document.getElementById("c_circle_1").style.left = tenx+"px";
    document.getElementById("c_circle_1").style.top = teny+"px";
    var tenx = cir2l-(x/40);
    var teny = cir2t-(y/40);
    document.getElementById("circle_2").style.left = tenx+"px";
    document.getElementById("circle_2").style.top = teny+"px";
    document.getElementById("r_circle_2").style.left = tenx+"px";
    document.getElementById("r_circle_2").style.top = teny+"px";
    document.getElementById("c_circle_2").style.left = tenx+"px";
    document.getElementById("c_circle_2").style.top = teny+"px";
    var tenx = cir3l+(x/90);
    var teny = cir3t+(y/90);
    document.getElementById("circle_3").style.left = tenx+"px";
    document.getElementById("circle_3").style.top = teny+"px";
    document.getElementById("r_circle_3").style.left = tenx+"px";
    document.getElementById("r_circle_3").style.top = teny+"px";
    document.getElementById("c_circle_3").style.left = tenx+"px";
    document.getElementById("c_circle_3").style.top = teny+"px";
    var tenx = (x/200);
    var teny = (y/100);
    tenx = tenx+teny;
    document.getElementById("d_logo").style.transform = "rotate("+tenx+"deg)";
    document.getElementById("r_d_logo").style.transform = "translateY("+tenx+"px)";
    document.getElementById("c_d_logo").style.transform = "translateX("+tenx+"px)";
});

// for animation only
