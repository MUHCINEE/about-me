// Reveal au scroll
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .15 });
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add('in'));

// Halo lumineux qui suit le curseur (souris uniquement)
const glow = document.querySelector('.cursor-glow');
if (glow && matchMedia('(hover:hover) and (pointer:fine)').matches) {
  addEventListener('pointermove', e => {
    glow.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    glow.classList.add('on');
  });
  document.addEventListener('mouseleave', () => glow.classList.remove('on'));
}

// Reflet rouge sur les cartes, centré sous le curseur
document.querySelectorAll('.card').forEach(c => c.addEventListener('pointermove', e => {
  const r = c.getBoundingClientRect();
  c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  c.style.setProperty('--my', (e.clientY - r.top) + 'px');
}));