document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const b=document.querySelector('[data-menu]');
const n=document.querySelector('[data-nav-links]');
if(b&&n){
  b.addEventListener('click',()=>{
    n.classList.toggle('open');
    b.setAttribute('aria-expanded', n.classList.contains('open') ? 'true' : 'false');
  });
}
