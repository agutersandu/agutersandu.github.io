// Contact dropdown button (mobile only)
document.addEventListener('DOMContentLoaded', function() {
  const contactToggle = document.getElementById('contact-toggle');
  const contactLinks = document.getElementById('contact-links');
  
  if (contactToggle && contactLinks) {
    contactToggle.addEventListener('click', function() {
      if (contactLinks.style.display === 'none') {
        contactLinks.style.display = 'block';
        contactToggle.innerHTML = '<i class="fas fa-fw fa-times"></i> Close';
      } else {
        contactLinks.style.display = 'none';
        contactToggle.innerHTML = '<i class="fas fa-fw fa-envelope"></i> Contact';
      }
    });
  }
});

// FINTRANS-UK expandable description (mobile only)
document.addEventListener('DOMContentLoaded', function() {
  // Only run on mobile
  if (window.innerWidth <= 768) {
    const desc = document.querySelector('.research-description');
    const btn = document.querySelector('.read-more-btn');

    if (desc && btn && desc.scrollHeight > 150) {
      // Start in collapsed state on mobile
      desc.classList.add('collapsed');

      btn.addEventListener('click', function() {
        if (desc.classList.contains('collapsed')) {
          desc.classList.remove('collapsed');
          btn.textContent = 'Read less';
        } else {
          desc.classList.add('collapsed');
          btn.textContent = 'Read more';
          desc.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    } else if (btn) {
      // Hide button if content is short
      btn.style.display = 'none';
    }
  }
});
