const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
      nav.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();

          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
          });
      });
  });
}

navSlide();
