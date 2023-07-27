const bar=document.getElementById('bar')
const close=document.getElementById('close')
const nav=document.querySelector('#navbar');

const navl=document.querySelector('#navbar').querySelectorAll("a");

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

navl.forEach(ele=>{
    ele.addEventListener("click",()=>{
        navl.forEach(nav2=>nav2.classList.remove("active"))
        this.classList.add("active")
    })

})
