(function () {
  // Dark mode
  var html = document.documentElement;
  var saved = localStorage.getItem('alwan-theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
  html.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    var btn = document.getElementById('btn-theme');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('alwan-theme', next);
        btn.textContent = next === 'dark' ? '☀️' : '🌙';
      });
      btn.textContent = html.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    }

    // Mobile menu
    var menuBtn = document.getElementById('btn-menu');
    var nav = document.getElementById('main-nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', function () {
        nav.classList.toggle('open');
      });
    }

    // Back to top
    var backTop = document.getElementById('back-top');
    if (backTop) {
      window.addEventListener('scroll', function () {
        backTop.classList.toggle('show', window.scrollY > 300);
      });
      backTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
})();
