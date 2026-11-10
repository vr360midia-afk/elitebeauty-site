/**
 * Elite Beauty Salon - Mobile Navigation Drawer
 */
(function() {
  function initMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('header nav');
    if (!toggle || !nav) return;

    function openMenu() {
      nav.classList.add('active');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (nav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Fechar ao clicar em qualquer link da navegação
    var links = nav.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });

    // Fechar ao pressionar tecla Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        closeMenu();
      }
    });

    // Fechar caso a tela seja redimensionada para desktop (> 768px)
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && nav.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
})();
