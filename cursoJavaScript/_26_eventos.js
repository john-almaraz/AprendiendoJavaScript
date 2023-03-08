const $link = document.querySelector('.link-dom');

$link.addEventListener('click',(e)=>{
    alert(e.type)
    alert(e.target)    
})
