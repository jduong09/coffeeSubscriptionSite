document.addEventListener('DOMContentLoaded', () => {
  const imgHamburger = document.getElementById('img-hamburger');
  const imgClose = document.getElementById('img-close');
  const listHeaderMenu = document.querySelector('.list-nav-menu');
  const divHeaderBg = document.getElementById('div-bg-header-open');

  imgHamburger.addEventListener('click', () => {
    imgHamburger.classList.add('hide');
    imgClose.classList.remove('hide');
    listHeaderMenu.classList.remove('hide');
    divHeaderBg.classList.remove('hide');
  });

  imgClose.addEventListener('click', () => {
    imgHamburger.classList.remove('hide');
    imgClose.classList.add('hide');
    listHeaderMenu.classList.add('hide');
    divHeaderBg.classList.add('hide');
  });

  if (window.innerWidth >= 768) {
    imgHamburger.classList.add('hide');
    imgClose.classList.add('hide');
    listHeaderMenu.classList.remove('hide');
    divHeaderBg.classList.add('hide');
  } else {
    imgHamburger.classList.remove('hide');
    imgClose.classList.remove('hide');
    listHeaderMenu.classList.add('hide');
    divHeaderBg.classList.remove('hide');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      imgHamburger.classList.add('hide');
      imgClose.classList.add('hide');
      listHeaderMenu.classList.remove('hide');
      divHeaderBg.classList.add('hide');
    } else {
      imgHamburger.classList.remove('hide');
      imgClose.classList.remove('hide');
      listHeaderMenu.classList.add('hide');
      divHeaderBg.classList.remove('hide');
    }
  });
});