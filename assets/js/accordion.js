// FINTRANS-UK research questions dropdowns
document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.rq-toggle');
  if (!toggles.length) return;

  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.rq-item');
      if (!item) return;

      var body = item.querySelector('.rq-body');
      var isOpen = item.classList.contains('open');

      // close others
      document.querySelectorAll('.rq-item.open').forEach(function (it) {
        if (it !== item) {
          it.classList.remove('open');
          var b = it.querySelector('.rq-body');
          if (b) b.style.display = 'none';
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        body.style.display = 'none';
      } else {
        item.classList.add('open');
        body.style.display = 'block';
      }
    });
  });
});

// Research Agenda theme accordions
document.addEventListener('DOMContentLoaded', function () {
  var themeToggles = document.querySelectorAll('.theme-toggle');
  if (!themeToggles.length) return;

  themeToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.theme-accordion');
      if (!card) return;

      var body = card.querySelector('.theme-body');
      var isOpen = card.classList.contains('open');

      // close others
      document.querySelectorAll('.theme-accordion.open').forEach(function (c) {
        if (c !== card) {
          c.classList.remove('open');
          var b = c.querySelector('.theme-body');
          if (b) b.style.display = 'none';
        }
      });

      if (isOpen) {
        card.classList.remove('open');
        body.style.display = 'none';
      } else {
        card.classList.add('open');
        body.style.display = 'block';
      }
    });
  });
});
