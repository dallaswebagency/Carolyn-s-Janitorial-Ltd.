// nav
const burger=document.querySelector('.burger'),menu=document.querySelector('nav.menu'),hdr=document.getElementById('hdr');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.classList.toggle('x',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
document.querySelectorAll('.dd>a').forEach(a=>a.addEventListener('click',e=>{if(innerWidth<=1180){e.preventDefault();a.parentElement.classList.toggle('open')}}));
addEventListener('scroll',()=>hdr.classList.toggle('fix',scrollY>220),{passive:true});

// hero bubbles
const hero=document.querySelector('.hero,.phero');
if(hero){for(let i=0;i<12;i++){const b=document.createElement('span');b.className='bubble';const z=12+Math.random()*46;b.style.cssText=`width:${z}px;height:${z}px;left:${45+Math.random()*55}%;animation-duration:${14+Math.random()*12}s;animation-delay:-${Math.random()*20}s`;hero.appendChild(b)}}

// reviews slider
const rt=document.querySelector('.rtrack');
if(rt){const step=()=>rt.querySelector('.rcard').offsetWidth+22;
  document.querySelector('.rnav .p').onclick=()=>rt.scrollBy({left:-step(),behavior:'smooth'});
  document.querySelector('.rnav .n').onclick=()=>rt.scrollBy({left:rt.scrollLeft+rt.clientWidth>=rt.scrollWidth-5?-rt.scrollWidth:step(),behavior:'smooth'});}

// lightbox
const figs=[...document.querySelectorAll('.ggrid figure')],lb=document.getElementById('lb');
if(lb&&figs.length){const li=lb.querySelector('img'),lc=lb.querySelector('p');let cur=0;
  const open=i=>{cur=(i+figs.length)%figs.length;const im=figs[cur].querySelector('img');li.src=im.src;li.alt=im.alt;lc.textContent=String(cur+1).padStart(2,'0')+' / '+figs.length+'  ·  '+im.alt;lb.classList.add('on')};
  figs.forEach((f,i)=>f.addEventListener('click',()=>open(i)));
  lb.querySelector('.x').onclick=()=>lb.classList.remove('on');
  lb.querySelector('.p').onclick=e=>{e.stopPropagation();open(cur-1)};
  lb.querySelector('.n').onclick=e=>{e.stopPropagation();open(cur+1)};
  lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('on')});
  document.addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowRight')open(cur+1);if(e.key==='ArrowLeft')open(cur-1)});}

// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
