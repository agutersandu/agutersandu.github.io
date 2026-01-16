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

// Add to existing file or create new one
document.addEventListener('DOMContentLoaded', function() {
  // Only run on mobile
  if (window.innerWidth <= 768) {
    const descriptions = document.querySelectorAll('.core-rq-heading, .project-box-featured p, .course-box p');
    
    descriptions.forEach(function(desc) {
      // Check if text is long enough to need expansion
      if (desc.scrollHeight > 150) {
        desc.classList.add('research-description', 'collapsed');
        
        const btn = document.createElement('button');
        btn.className = 'read-more-btn';
        btn.textContent = 'Read more';
        
        desc.parentNode.insertBefore(btn, desc.nextSibling);
        
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
      }
    });
  }
});
