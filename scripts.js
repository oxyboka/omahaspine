document.getElementById('year').textContent = new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

const dialog = document.getElementById('booking');
document.querySelectorAll('[data-open-modal]').forEach(btn => btn.addEventListener('click', () => dialog.showModal()));

const slides = document.getElementById('slides');
const dots = Array.from(document.querySelectorAll('.dot'));
let index = 0;
function goTo(i) {
  index = i;
  slides.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach((d, di) => d.classList.toggle('active', di === i));
}
dots.forEach(d => d.addEventListener('click', e => goTo(Number(e.currentTarget.dataset.slide))));
setInterval(() => { goTo((index + 1) % dots.length); }, 6000);

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => { toTop.style.display = window.scrollY > 600 ? 'block' : 'none'; });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('form').forEach(f => {
  f.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! We received your request.');
    f.reset();
    dialog.close();
  });
});
