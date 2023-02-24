document.addEventListener('DOMContentLoaded', () => {
  const iconArrows = document.querySelectorAll('.div-input-header > button');
  const listItemsFormSteps = document.getElementsByClassName('list-item-form-step');
  for (let i = 0; i < iconArrows.length; i++) {
    const iconArrow = iconArrows[i];

    iconArrow.addEventListener('click', (e) => {
      const divInputHeader = e.currentTarget.parentElement;
      const divForm = divInputHeader.parentElement;

      // if inputHeader is open, then we remove open on the divInputHeader parent element
      // This will rotate the svg
      // Then we hide the divForm
      if (divInputHeader.classList.contains('open')) {
        divInputHeader.classList.remove('open');

        divForm.children[1].classList.add('hide');


        if (window.innerWidth >= 1200 && i != 4) {
          // When an icon arrow is opened, we want to close the other icon arrows and their respective lists.
          // We then want to highlight the corresponding header list item, and dehighlight the other ones.
          listItemsFormSteps[i].classList.remove('selected');
          const currentDivInputHeader = iconArrows[i + 1].parentElement;
          const currentDivForm = currentDivInputHeader.parentElement;

          currentDivInputHeader.classList.add('open');
          currentDivForm.children[1].classList.remove('hide');
          listItemsFormSteps[i + 1].classList.add('selected');
        }
      } else {
        // InputHeader is closed, we use the parent element to set the class to open and rotate the svg
        // Remove the hide on the sibling list element
        divInputHeader.classList.add('open');

        divForm.children[1].classList.remove('hide');

        // If the window is in desktop view (> 1200px)
        // When this icon arrow is opened, we want to close the other icon arrows
        // If there is an open icon arrow, we want to hide its respective list element
        // we need to highlight/dehighlight the divFormHeader Items.
        if (window.innerWidth >= 1200) {
          // When an icon arrow is opened, we want to close the other icon arrows and their respective lists.
          // We then want to highlight the corresponding header list item, and dehighlight the other ones.
          for (let j = 0; j < iconArrows.length; j++) {
            if (i === j) {
              listItemsFormSteps[i].classList.add('selected');
              continue;
            } else {
              const currentDivInputHeader = iconArrows[j].parentElement;
              const currentDivForm = currentDivInputHeader.parentElement;

              currentDivInputHeader.classList.remove('open');
              currentDivForm.children[1].classList.add('hide');
              listItemsFormSteps[j].classList.remove('selected');

            }
          } 
        }
      }
    });
  }
});