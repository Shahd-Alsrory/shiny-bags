

window.addEventListener("DOMContentLoaded",()=>{
const texts=[
    {type:"h1",text:""},
    {type:"p",text:"Shiny bags"},
    {type:"h1",text:""},
    {type:"p",text:"hand made"}
];
const container=document.getElementById("hero-container");
let index=0;

function showNextText(){
    container.innerHTML="";

    const elem=document.createElement(texts[index].type);
    elem.textContent=texts[index].text;
    container.appendChild(elem);

    setTimeout(()=>{
        elem.classList.add("active");
        50;
    });
    index=(index+1)%texts.length;
    setTimeout(showNextText,2000);
}
showNextText();
});


let pass=document.getElementById('pass');
let btn=document.getElementById('btn');

btn.addEventListener('click',xpassword)
function xpassword() {
    if(btn.getAttribute('data')=='show'){
    pass.setAttribute('type','text');
    btn.setAttribute('data','hide');
    btn.innerHTML="hide";
}
else {
    pass.setAttribute('type','password');
    btn.setAttribute('data','show');
    btn.innerHTML="show";
}
}

document.addEventListener("DOMContentLoaded",function(){
const btn=document.getElementById("btn");

btn.onmouseenter=function(){
    btn.style.backgroundColor="#e84393";
};

btn.onmouseleave=function(){
    btn.style.backgroundColor="";
};

});


// document.querySelectorAll(".procuct").forEach(item=>{
// item.onclick=()=>{
//     alert("product details page will open here.");
// };
// });


 
// let favCount=0;
// document.querySelectorAll(".fav-icon").forEach(icon=>{
//     icon.onclick=()=>{
//         favCount++;

//         document.getElementById("favCount").textContent=favCount;
//     };
// });
