// ===== Tema gelap / terang (tersimpan di browser) =====
const root = document.documentElement;
const themeBtn = document.getElementById('theme');

function setTheme(mode) {
  root.setAttribute('data-theme', mode);
  themeBtn.textContent = mode === 'light' ? '☀️' : '🌙';
  try { localStorage.setItem('theme', mode); } catch (e) {}
}

let saved = 'dark';
try { saved = localStorage.getItem('theme') || 'dark'; } catch (e) {}
setTheme(saved);

themeBtn.addEventListener('click', () => {
  setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
});

// ===== Carousel Work Gallery =====
const track = document.getElementById('track');
document.getElementById('next').addEventListener('click', () => track.scrollBy({ left: 360, behavior: 'smooth' }));
document.getElementById('prev').addEventListener('click', () => track.scrollBy({ left: -360, behavior: 'smooth' }));

// ===== Animasi muncul saat scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ===== Tahun otomatis di footer =====
document.getElementById('yr').textContent = new Date().getFullYear();
