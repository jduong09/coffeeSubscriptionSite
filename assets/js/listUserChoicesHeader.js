document.addEventListener('DOMContentLoaded', () => {
  const iconArrows = document.querySelectorAll('.div-input-header > button');
  const listItemsFormSteps = document.getElementsByClassName('list-item-form-step');
  for (let i = 0; i < iconArrows.length; i++) {
    const iconArrow = iconArrows[i];

    // If it's to close the form, then we want to open the next unfilled form.
    iconArrow.addEventListener('click', (e) => {
      const divInputHeader = e.currentTarget.parentElement;
      const divForm = divInputHeader.parentElement;      

      // if inputHeader is open, then we remove open on the divInputHeader parent element
      // This will rotate the svg
      // Then we hide the divForm
      if (divInputHeader.classList.contains('open')) {
        divInputHeader.classList.remove('open');

        divForm.children[1].classList.add('hide');

      } else {
        // InputHeader is closed, we use the parent element to set the class to open and rotate the svg
        // Remove the hide on the sibling list element
        divInputHeader.classList.add('open');

        divForm.children[1].classList.remove('hide');
      }

      if (window.innerWidth >= 1400) {
        let idxIncomplete;
  
        // when iconArrow is clicked, we want to iterate through the icon arrows.
        // In desktop view, we want to change the 'next possible form question that needs to be filled out' and set that as 'selected'
        for (let j = 0; j < iconArrows.length; j++) {
          // Iterate through the icon arrows
          // divForm is the .div-form-item that holds a header, and the list
          const divForm = iconArrows[j].parentElement.parentElement;
          // isDivFormComplete sees the value of the 'data-form-selected' element, which tells us if the user has selected from this list
          const isDivFormComplete = divForm.getAttribute('data-form-selected');
          // While iterating 0 --> 5, we remove the selected tag from any listItemsFormSteps, so that we can highlight the next form question that needs to be filled out.
          listItemsFormSteps[j].classList.remove('selected');
  
          // Condition: if the data on .div-form-item is false, and that respective list is open.
          if ((isDivFormComplete === 'false')) {
            // We see if it is the smalleer than the current next filled form
            if (idxIncomplete === undefined) {
              idxIncomplete = j;
            } else if (j < idxIncomplete) {
              idxIncomplete = j;
            }
          } else {
            idxIncomplete = 4;
          }
        }
        // set the question step to be selected
        listItemsFormSteps[idxIncomplete].classList.add('selected');
        // Open it's list.
        const divFormItems = document.getElementsByClassName('div-form-item');
        divFormItems[idxIncomplete].children[0].classList.add('open');
        divFormItems[idxIncomplete].children[1].classList.remove('hide');
      }
    });
  }
});