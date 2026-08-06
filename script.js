const navbar=document.getElementById("navbar");
window.addEventListener("scroll",function(){
if(window.scrollY>50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
});


const menu=document.getElementById("menu");
const toggle=document.getElementById("menu-toggle");
toggle.onclick=function(){
menu.classList.toggle("active");
}


const reveal=document.querySelectorAll(".reveal");
function scrollReveal(){
reveal.forEach((item)=>{
const windowHeight=window.innerHeight;
const revealTop=item.getBoundingClientRect().top;
const revealPoint=150;
if(revealTop<windowHeight-revealPoint){
item.classList.add("active");
}else{
item.classList.remove("active");
}
});
}


window.addEventListener("scroll",scrollReveal);
scrollReveal();
const links=document.querySelectorAll("#menu a");
links.forEach((link)=>{
link.addEventListener("click",()=>{
menu.classList.remove("active");
});
});


const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
let current="";
sections.forEach((section)=>{
const sectionTop=section.offsetTop-120;
if(window.scrollY>=sectionTop){
current=section.getAttribute("id");
}
});


navLinks.forEach((link)=>{
link.classList.remove("active");
if(link.getAttribute("href")=="#"+current){
link.classList.add("active");
}
});
});

const text="Creative Developer & Business Management Student";
const typing=document.getElementById("typing");
let index=0;
function typeText(){
if(index<text.length){
typing.innerHTML+=text.charAt(index);
index++;
setTimeout(typeText,60);
}
}
typeText();