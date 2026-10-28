// cycling role text
const roles = ['MIS Executive', 'Data Analyst', 'Apps Script automator', 'Dashboard builder'];
let r = 0;
setInterval(() => { r = (r + 1) % roles.length; document.getElementById('role').textContent = roles[r]; }, 2200);

// reveal on scroll + count-up stats
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('show');
  e.target.querySelectorAll('[data-count]').forEach(el => {
    const end = +el.dataset.count; let n = 0;
    const t = setInterval(() => { el.textContent = ++n; if (n >= end) clearInterval(t); }, 180);
  });
  io.unobserve(e.target);
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(s => io.observe(s));

// close mobile menu on link click; footer year
document.querySelectorAll('.nav nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
