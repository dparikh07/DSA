var r1=Math.floor(Math.random()*6+1);
var r2=Math.floor(Math.random()*6+1);
var img1="/Dicee Challenge - Starting Files/images/dice"+r1+".png";
var img2="/Dicee Challenge - Starting Files/images/dice"+r2+".png";
var arr=document.querySelectorAll("img");
arr[0].setAttribute("src",img1);
arr[1].setAttribute("src",img2);
if(r1>r2){
    document.querySelector("p.refresh").innerHTML="Player 1 Wins";
}
else{
    document.querySelector("p.refresh").innerHTML="Player 2 Wins";
}
