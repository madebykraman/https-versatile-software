(() => {
  const instagram = 'https://www.instagram.com/framedbyaman/';
  const linkedin = 'https://www.linkedin.com/in/kumaramann/';
  const behance = 'https://www.behance.net/myselfakumar';

  function patch() {
    document.querySelectorAll('.footer-links a').forEach(a => {
      const label = a.textContent.trim().toLowerCase();
      if (label === 'instagram') a.href = instagram;
      if (label === 'linkedin') a.href = linkedin;
      if (label === 'behance') a.href = behance;
    });

    const services = [
      ['Campaign Films','Narrative driven brand films developed to communicate brand positioning through cinematic storytelling.'],
      ['Integrated Campaign','Cross platform campaign combining film, motion and digital storytelling to launch a brand initiative.'],
      ['Brand Identity System','Designing scalable brand identity and visual systems built for consistency across digital platforms.'],
      ['Cultural Brand Film','Short documentary style film created to build emotional connection between brand and audience.'],
      ['Digital Motion Campaign','Motion led storytelling designed for digital campaigns and social distribution.'],
      ['Brand Launch Campaign','Creative direction for brand launch including visual language, campaign narrative and film assets.'],
      ['Editorial Visual Project','Visual storytelling project developed for editorial platforms and cultural publications.'],
      ['Visual Brand Framework','Development of visual systems including typography, motion language and identity guidelines.'],
      ['Commercial Film Direction','Advertising film directed for brand storytelling across digital and broadcast platforms.']
    ];
    const grid = document.querySelector('.service-grid');
    if (grid) {
      grid.innerHTML = services.map(([title, description]) => `<article class="service reveal service-detail"><strong>${title}</strong><span>${description}</span></article>`).join('');
      grid.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    }

    document.querySelectorAll('.fact').forEach(f => {
      const text = f.textContent.trim();
      if (text.includes('Years of practice')) f.remove();
      if (text.includes('Ways to make it better')) f.remove();
    });

    const facts = document.querySelector('.fact-grid');
    if (facts) {
      facts.innerHTML = '<div class="fact"><strong>495+</strong><span>Projects</span></div><div class="fact"><strong>MTV</strong><span>India feature</span></div><div class="fact"><strong>ELLE</strong><span>India publication</span></div>';
    }

    const footer = document.querySelector('.footer-bottom');
    if (footer && !footer.querySelector('.phone-link')) {
      const phone = document.createElement('a');
      phone.className = 'phone-link';
      phone.href = 'tel:+918709539814';
      phone.textContent = '+91 87095 39814';
      footer.insertBefore(phone, footer.querySelector('.footer-links'));
    }
  }

  const originalPush = history.pushState;
  history.pushState = function () {
    originalPush.apply(this, arguments);
    setTimeout(patch, 0);
  };
  window.addEventListener('load', patch);
  setTimeout(patch, 100);
  setTimeout(patch, 700);
})();
