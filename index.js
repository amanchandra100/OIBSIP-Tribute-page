let btn = document.getElementById('btndark');
btn.addEventListener('click',(btn1)=>{
    const cssfile=document.getElementById("cssfile");
    const btn12=document.getElementById("btndark")
    if (btn12.innerHTML == 'Dark mode') {
        cssfile.setAttribute('href','./dark_mode.css');
        btn12.innerHTML="Light mode";
    }
     else {
        cssfile.setAttribute('href','./light_mode.css');
        btn12.innerHTML="Dark mode";
    }  
})
