document.body.classList.remove('no-js');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

// header sólido, barra de progresso e inclinação da janela do hero
const hd=document.querySelector('header'),pb=document.querySelector('.progress'),win=document.querySelector('.window');
function onScroll(){
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  hd.classList.toggle('solid',y>10);
  pb.style.setProperty('--p',h>0?y/h:0);
  if(win&&!reduce&&innerWidth>980){const k=Math.min(y/500,1);win.style.setProperty('--ry',(-8+8*k)+'deg');win.style.setProperty('--rx',(4-4*k)+'deg')}
}
addEventListener('scroll',onScroll,{passive:true});onScroll();

// menu mobile
const mb=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
mb.addEventListener('click',()=>{const o=menu.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
menu.addEventListener('click',e=>{if(e.target.tagName==='A'){menu.classList.remove('open');mb.setAttribute('aria-expanded','false')}});

// carrossel infinito: duplica a lista
document.querySelectorAll('.track').forEach(t=>{const c=t.firstElementChild.cloneNode(true);c.setAttribute('aria-hidden','true');c.querySelectorAll('img').forEach(i=>i.alt='');t.appendChild(c)});
document.querySelectorAll('.ft-logos .track ul:first-child img').forEach(i=>i.alt='');

// botão flutuante: aviso aparece depois de alguns segundos e pode ser fechado
const wf=document.getElementById('wafloat');
if(wf){
let tipOff=false;try{tipOff=sessionStorage.getItem('waTip')==='0'}catch(e){}
if(!tipOff)setTimeout(()=>wf.classList.add('show'),4000);
wf.querySelector('.tip button').addEventListener('click',()=>{wf.classList.remove('show');try{sessionStorage.setItem('waTip','0')}catch(e){}});
}


// revelar ao rolar
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('[data-r], .panel, .mg').forEach(el=>io.observe(el));

// contadores
const fmt=(n,d)=>n.toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
  const el=e.target,to=+el.dataset.count,d=+(el.dataset.dec||0),pre=el.dataset.pre||'',suf=el.dataset.suf||'';
  if(reduce){el.textContent=pre+fmt(to,d)+suf;return}
  const t0=performance.now(),dur=1600;(function tick(t){const k=Math.min((t-t0)/dur,1),v=to*(1-Math.pow(1-k,3));el.textContent=pre+fmt(v,d)+suf;if(k<1)requestAnimationFrame(tick)})(t0)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));
