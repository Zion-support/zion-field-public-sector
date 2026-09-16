(function(){
  const q=document.getElementById('q');
  const cards=document.querySelectorAll('[data-filter]');
  if(!q||!cards.length) return;
  q.addEventListener('input',function(){
    const s=q.value.trim().toLowerCase();
    cards.forEach(function(el){
      const hay=(el.getAttribute('data-filter')||'').toLowerCase();
      el.style.display=!s||hay.indexOf(s)!==-1?'':'none';
    });
  });
})();
