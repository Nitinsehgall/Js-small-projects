let body=document.querySelector('body');
let btns=document.querySelectorAll('.button');



let changeColor=(e)=>{
console.log(e);
if(e.target.id=='grey'){
document.body.style.backgroundColor="grey";    
}
if(e.target.id=='white'){
document.body.style.backgroundColor="white";    
}
if(e.target.id=='blue'){
document.body.style.backgroundColor="blue";    
}
if(e.target.id=='yellow'){
document.body.style.backgroundColor="yellow";    
}
}

btns.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',changeColor)
})

