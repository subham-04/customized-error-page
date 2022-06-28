const icon = document.querySelector('.icon');
icon.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src='sun-solid.png';
    }else{
        icon.src='moon-solid.svg';
    }
})