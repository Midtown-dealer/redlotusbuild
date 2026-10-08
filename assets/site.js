(function(){var r=document.documentElement,b=document.getElementById('toggle');
function show(){b.setAttribute('aria-pressed',r.dataset.theme==='dark')}
b.addEventListener('click',function(){r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('redlotus-theme',r.dataset.theme)}catch(e){}show()});show();
var v=document.getElementById('reel');if(v){v.addEventListener('click',function(){v.paused?v.play():v.pause()});
if('IntersectionObserver' in window){new IntersectionObserver(function(e){e[0].isIntersecting?v.play().catch(function(){}):v.pause()},{threshold:.25}).observe(v)}}})();
