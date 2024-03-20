let btn = document.querySelector(".content .right");

let btn2 = document.querySelector(".content button");
let Img = document.querySelector(".content img")


btn.addEventListener("click", (e) => {
    then(btn.src == btn2.src) {
        Img.src = "D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
    } if(btn.src == btn.src){
        Img.src = "UnRec_SVD_PC_tall_Hero_3000x1200._CB572278891_.jpg"
    }else{
        Img.src = "11._CB571612229_.jpg"
    };
})

btn2.addEventListener("click", () => {
    Img.src = "11._CB571612229_.jpg";
})