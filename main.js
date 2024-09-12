
let button = document.querySelector("button");
button.addEventListener("click", function()
    {
    let c = document.querySelector('aside');
    c.classList.toggle('hidden');
    
    let b = document.querySelector('main');
    b.classList.toggle('hidden');
    
    if(b.classList.contains('hidden')){button.innerHTML = "<= Return ";} 
    else {button.innerHTML = "More info =>";}
    }
)



