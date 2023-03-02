// Event listeners for each icon arrow button that can open/close a question's choices.
document.addEventListener('DOMContentLoaded', () => {
  const iconArrows = document.querySelectorAll('.div-input-header > button');
  const listItemFormSteps = document.getElementsByClassName('list-item-form-step');
  const listItemPreferenceCapsule = document.getElementById('list-item-preference-capsule');
  const divFormItems = document.getElementsByClassName('div-form-item');
  const divInputDeliveries = document.querySelector('#div-deliveries > .div-input-header');
  
  for (let i = 0; i < iconArrows.length; i++) {
    const iconArrow = iconArrows[i];

    // Problem: 
    // When click the icon arrow, and the next unfilled form is div-grind-li
    // If capsule is selected, we want to skip that form.
    // If it's to close the form, then we want to open the next unfilled form.
    iconArrow.addEventListener('click', (e) => {
      const divInputHeader = e.currentTarget.parentElement;
      const divForm = divInputHeader.parentElement;  

      // if inputHeader is open, then we remove open on the divInputHeader parent element
      // This will rotate the svg
      // Then we hide the divForm
      if (divInputHeader.classList.contains('open')) {
        if (window.innerWidth >= 1400 && listItemPreferenceCapsule.classList.contains('selected') && divInputDeliveries.classList.contains('open')) {
          divInputHeader.classList.remove('open');
          divForm.children[1].classList.add('hide');
          return;
        }

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
        // We then need to check for which step needs to be selected next, and open it and highlight that one in the list-item-steps
        // In desktop view, we want to change the 'next possible form question that needs to be filled out' and set that as 'selected'
        for (let j = 0; j < divFormItems.length; j++) {
          // divForm is the .div-form-item that holds a header, and the list
          const divForm = divFormItems[j];
          // isDivFormComplete sees the value of the 'data-form-selected' element, which tells us if the user has selected from this list
          const isDivFormComplete = divForm.getAttribute('data-form-selected');
          // 0 false , idx === undefined
          // While iterating 0 --> 5, we remove the selected tag from any listItemsFormSteps, so that we can highlight the next form question that needs to be filled out.
          listItemFormSteps[j].classList.remove('selected');
          // Condition: if the data on .div-form-item is false
          if ((isDivFormComplete === 'false')) {
            // We see if it is the smaller than the current next filled form
            if (idxIncomplete === undefined || j < idxIncomplete) {
              idxIncomplete = j;
            }
          }
        }

        // if resizeIdxIncomplete is undefined, then all forms have been filled out.
        if ((idxIncomplete === undefined)) {
          listItemFormSteps[4].classList.add('selected');
        } else if ((idxIncomplete === 3 && listItemPreferenceCapsule.classList.contains('selected'))) {
          listItemFormSteps[4].classList.add('selected');
          divFormItems[4].children[0].classList.add('open');
          divFormItems[4].children[1].classList.remove('hide');
        } else {
          // set the question step to be selected
          // This means that there is an div form that is incomplete, so we will set that one as selected.
          listItemFormSteps[idxIncomplete].classList.add('selected');
          // Open it's list.
          divFormItems[idxIncomplete].children[0].classList.add('open');
          divFormItems[idxIncomplete].children[1].classList.remove('hide');
        }
      }
    });
  }
});