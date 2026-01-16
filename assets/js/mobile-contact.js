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
