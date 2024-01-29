var typed=new Typed(".text",{
    strings:["Frontend Developer","Software Developer", "Web Developer"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop:true
})


var theme = document.getElementById("theme");
theme.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        theme.src="Images/sun.png";
    }
    else{
        theme.src = "Images/moon1.png";
    }
}


const circles= document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    // for (let i = 0; i < dots; i++) {
    //     points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    // }

    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    
    elem.innerHTML = points;
    const pointsMarked=elem.querySelectorAll('.points');
    for(let i=0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})