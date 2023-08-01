const AnimText = document.getElementById("FirstText");
const AnimText2 = document.getElementById("SecondText");
const ChangeLogo = document.getElementById("ChangingObj");
const backorund = document.getElementById("Back")
var AllLeters = AnimText.innerHTML.split('');
var AllLeters2 = AnimText2.innerHTML.split('');

const AboutUs = document.getElementById("AboutUsButton");
const ScrollToEnd = document.getElementById("ToTheEnd");
const ScrollToEnd2 = document.getElementById("ToTheEnd2");

var indexOfCollect = 0;
var indexOfCollect2 = 0;
var offer = "";
var offer2 = "";

var AnimTextLength = AnimText.innerText.length; 
var AnimTextLength2 = AnimText2.innerText.length; 

var UpdateTime = 50;
var UpdateTime2 = 70;

var ScrolIndex = 0;

var UpdateBack = 0;

let body = document.querySelector('body');

function CollectOffer(){
    setTimeout(function(){
        CollectOffer();
        if (offer.length < AnimTextLength)
        {
            offer += AllLeters[indexOfCollect]
            indexOfCollect++;
            AnimText.innerHTML = offer;
        }else{
            UpdateTime = 10000;
        }
    } , UpdateTime)
}
function CollectOffer2(){
    setTimeout(function(){
        CollectOffer2();
        if (offer2.length < AnimTextLength2)
        {
            offer2 += AllLeters2[indexOfCollect2]
            indexOfCollect2++;
            AnimText2.innerHTML = offer2;
        }else{
            UpdateTime2 = 10000;
        }
    } , UpdateTime2)
}
function Wait(){
    setTimeout(function(){
        ChangeLogo.src = "Logoi.png"
        ChangeLogo.className = "changed"
    } , 2000)
}
function NoneStaticBack(){
    setTimeout(function(){
        NoneStaticBack();
        backorund.style.background = `linear-gradient(${UpdateBack}deg, rgba(${2},0,36,1) 0%, rgba(32,32,154,1) 27%, rgba(0,212,255,1) 100%)`;
        UpdateBack += 0.8;
    } , 50)
}
function ScrollControll(){
    setTimeout(function(){
        ScrollControll();
    } , 100)
}
// window.addEventListener('scroll', function () {
//     const scrollPosition = document.documentElement.scrollTop;
//     console.log(scrollPosition);
//   });
// body.addEventListener('scroll', () => { 
//     let scrollTop = body.scrollHeight;
//     console.log(scrollTop);
// console.log(headerWrapper);

// if(scrollTop >= 100){
//     console.log("Done")
// }else{    
//     console.log("Ye")
// }
// });

addEventListener('scroll' , function(){
    console.log(this.window.scrollY);
})

AboutUs.onclick = function(){
    window.scrollBy({
        top: 800,
        behavior: "smooth"
    })
}
ScrollToEnd.onclick = function(){
    window.scrollBy({
        top: 2500,
        behavior: "smooth"
    })
}
ScrollToEnd2.onclick = function(){
    window.scrollBy({
        top: 2500,
        behavior: "smooth"
    })
}
CollectOffer();
CollectOffer2();
Wait();
ScrollControll();


