// Année auto
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
const links = menu ? Array.from(menu.querySelectorAll('a')) : [];
const setOpen = (open)=>{ if(!menu||!toggle) return; menu.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); };
toggle && toggle.addEventListener('click', ()=> setOpen(!menu.classList.contains('open')));
links.forEach(a=> a.addEventListener('click', ()=> window.innerWidth<=960 && setOpen(false)));
window.addEventListener('resize', ()=>{ if(window.innerWidth>960) setOpen(false); });

// Slider témoignages (autoplay desktop)
const track = document.querySelector('.slider__track');
const slides = track ? Array.from(track.querySelectorAll('.testimonial')) : [];
const prev = document.querySelector('[data-dir="prev"]');
const next = document.querySelector('[data-dir="next"]');
let idx = 0, timer;
const width = ()=> slides[0]?.getBoundingClientRect().width || 0;
const gap = 16;
const go = (i)=>{ if(!slides.length||!track) return; const n = slides.length; idx = (i+n)%n; track.style.transform = `translateX(-${(width()+gap)*idx}px)`; };
const isDesktop = ()=> window.innerWidth>960;
const start = ()=>{ stop(); if(!isDesktop()||slides.length<=1) return; timer = setInterval(()=> go(idx+1), 6000); };
const stop = ()=> timer && (clearInterval(timer), timer=undefined);
prev && prev.addEventListener('click', ()=> isDesktop() && go(idx-1));
next && next.addEventListener('click', ()=> isDesktop() && go(idx+1));
track && track.addEventListener('mouseenter', stop);
track && track.addEventListener('mouseleave', start);
window.addEventListener('resize', ()=>{ if(!isDesktop()){ stop(); go(0); } else { go(idx); start(); } });
go(0); start();
