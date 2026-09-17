// قائمة الجوال: فتح وإغلاق، وإغلاق عند اختيار رابط (النصوص من data-label-open/close لدعم اللغتين)
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  var openLabel = btn.getAttribute('data-label-open') || 'فتح القائمة';
  var closeLabel = btn.getAttribute('data-label-close') || 'إغلاق القائمة';
  function set(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? closeLabel : openLabel);
  }
  btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
