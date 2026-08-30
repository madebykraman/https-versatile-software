(() => {
  const instagram='https://www.instagram.com/framedbyaman/';
  const facebook='https://www.facebook.com/@madebykraman/';
  const linkedin='https://www.linkedin.com/in/kumaramann/';
  const behance='https://www.behance.net/myselfakumar';
  const phone='+918709539814';
  function patch(){
    const nav=document.querySelector('.desktop-nav');
    if(nav&&!nav.dataset.patched){
      nav.dataset.patched='true';
      nav.innerHTML='<a href="/work">Work</a><a href="/#about">About</a><a href="/#experience">Experience</a><a href="/contact">Contact</a>';
    }
    document.querySelectorAll('.footer-links a').forEach(a=>{
      const label=a.textContent.trim().toLowerCase();
      if(label==='instagram')a.href=instagram;
      if(label==='linkedin')a.href=linkedin;
      if(label==='behance')a.href=behance;
      if(label==='facebook')a.href=facebook;
    });
    const services=[['Campaign Films','Narrative driven brand films developed to communicate brand positioning through cinematic storytelling.'],['Integrated Campaign','Cross platform campaign combining film, motion and digital storytelling to launch a brand initiative.'],['Brand Identity System','Scalable identity and visual systems built for consistency across digital platforms.'],['Cultural Brand Film','Short documentary style film created to build emotional connection between brand and audience.'],['Digital Motion Campaign','Motion led storytelling designed for digital campaigns and social distribution.'],['Brand Launch Campaign','Creative direction for brand launch including visual language, campaign narrative and film assets.'],['Editorial Visual Project','Visual storytelling developed for editorial platforms and cultural publications.'],['Visual Brand Framework','Visual systems including typography, motion language and identity guidelines.'],['Commercial Film Direction','Advertising film directed for brand storytelling across digital and broadcast platforms.']];
    const grid=document.querySelector('.service-grid');
    if(grid&&!grid.dataset.patched){grid.dataset.patched='true';grid.innerHTML=services.map(([t,d])=>`<article class="service reveal service-detail"><strong>${t}</strong><span>${d}</span></article>`).join('');grid.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'))}
    const facts=document.querySelector('.fact-grid');
    if(facts&&!facts.dataset.patched){facts.dataset.patched='true';facts.innerHTML='<div class="fact"><strong>495+</strong><span>Projects</span></div><div class="fact"><strong>MTV</strong><span>India feature</span></div><div class="fact"><strong>ELLE</strong><span>India publication</span></div>'}
    const footer=document.querySelector('.footer-bottom');
    if(footer&&!footer.querySelector('.phone-link')){const p=document.createElement('a');p.className='phone-link';p.href='tel:'+phone;p.textContent='+91 87095 39814';footer.insertBefore(p,footer.querySelector('.footer-links'))}
    if(!document.getElementById('content-overrides')){const s=document.createElement('style');s.id='content-overrides';s.textContent='.service-detail{width:min(100%,420px);display:flex;flex-direction:column;gap:8px;padding:20px 24px;border-radius:20px;align-items:flex-start;text-align:left}.service-detail strong{font-size:20px;line-height:1.2;letter-spacing:-.025em}.service-detail span{font-size:15px;line-height:1.45;font-weight:375}.phone-link{color:inherit;text-decoration:none;opacity:.9}.phone-link:hover{opacity:.55}';document.head.appendChild(s)}
  }
  window.addEventListener('load',patch);setTimeout(patch,100);setTimeout(patch,700);
})();
