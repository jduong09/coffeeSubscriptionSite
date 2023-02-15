document.addEventListener('DOMContentLoaded', () => {
  const iconArrows = document.querySelectorAll('.div-input-header > svg');

  for (let i = 0; i < iconArrows.length; i++) {
    const iconArrow = iconArrows[i];

    iconArrow.addEventListener('click', (e) => {
      const divInputHeader = e.currentTarget.parentElement;
      const divForm = divInputHeader.parentElement;

      if (divInputHeader.classList.contains('open')) {
        divInputHeader.classList.remove('open');

        divForm.children[1].classList.add('hide');
      } else {
        divInputHeader.classList.add('open');

        divForm.children[1].classList.remove('hide');
      }
    });
  }
});