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
// Additive English language navigation; original filtering above is unchanged.
(function(){
 const c=document.querySelector('link[rel="canonical"]');if(!c)return;
 const base=c.href.replace(/\/$/,'')+'/',list=[['en','English',''],['pt-BR','Português','pt/'],['es','Español','es/'],['fr','Français','fr/'],['de','Deutsch','de/']];
 if(document.getElementById('field-resource-languages'))return;
 const nav=document.createElement('nav');nav.id='field-resource-languages';nav.setAttribute('aria-label','Resource languages');nav.style.cssText='display:flex;flex-wrap:wrap;gap:16px;padding:16px;';
 list.forEach(([lang,label,suffix])=>{const a=document.createElement('a');a.href=base+suffix;a.hreflang=lang;a.lang=lang;a.textContent=label;if(!suffix)a.setAttribute('aria-current','page');nav.append(a);const link=document.createElement('link');link.rel='alternate';link.hreflang=lang;link.href=a.href;document.head.append(link);});
 const def=document.createElement('link');def.rel='alternate';def.hreflang='x-default';def.href=base;document.head.append(def);
 const more=document.createElement('p');more.innerHTML='<a href="https://ziontechgroup.com/apps/field-ticket-types.html">Field Ticket Types</a> · <a href="https://ziontechgroup.com/zion-app-network/CATALOG-FIELD-LOCALIZED.html#en">Localized field-resource catalog</a>';
 const main=document.querySelector('main')||document.body;main.prepend(nav);main.append(more);
})();
