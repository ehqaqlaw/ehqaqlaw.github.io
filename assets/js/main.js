// قائمة الجوال: فتح وإغلاق، وإغلاق عند اختيار رابط
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  function set(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
  }
  btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
