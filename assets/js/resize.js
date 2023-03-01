document.addEventListener('DOMContentLoaded', () => {
  const divOrderButtonConfirmation = document.getElementById('div-order-button-confirmation');
  const btnCheckoutConfirm = document.getElementById('btn-checkout-confirm');
  const spanCheckoutCalculatedPrice = document.getElementById('span-checkout-calculated-price');
  const divHeroDescription = document.querySelector('.div-hero > div > div');
  const divFormHeaderSteps = document.getElementById('div-form-header-steps');
  const divListBg = document.getElementById('div-list-bg');
  const divFormGrind = document.getElementById('div-grind-li');

  const listItemFormSteps = document.getElementsByClassName('list-item-form-step');
  const divFormItems = document.getElementsByClassName('div-form-item');
  // For plan.html, on resize we are going to move the checkout calculated price outside of the button.
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && divOrderButtonConfirmation.children.length === 1) {
      spanCheckoutCalculatedPrice.remove();
      divOrderButtonConfirmation.prepend(spanCheckoutCalculatedPrice);
      btnCheckoutConfirm.innerText = 'Checkout';
    } else if (window.innerWidth <= 768 && divOrderButtonConfirmation.children.length > 1) {
      spanCheckoutCalculatedPrice.remove();
      btnCheckoutConfirm.innerText = 'Checkout - ';
      btnCheckoutConfirm.append(spanCheckoutCalculatedPrice);
    }

    if (window.innerWidth >= 768) {
      divListBg.classList.remove('hide');
    } else {
      divListBg.classList.add('hide');
    }

    // Desktop View Conditional
    if (window.innerWidth >= 1400) {
      divHeroDescription.innerText = 'Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.';
      divFormHeaderSteps.classList.remove('hide');

      const divFormsSelected = document.querySelectorAll("div[data-form-selected='true']");
      // if we resize to 1400px, desktop view, and none of the lists have been selected
      // then hide the bottom 4 lists and close their lists.
      // And highlight the first step and open it's list
      if (divFormsSelected.length === 0) {
        listItemFormSteps[0].classList.add('selected');
      } else {  
        let resizeIdxIncomplete;
        // The user has resized to desktop view, and their form has had some selections
        // We then need to check for which step needs to be selected next, and open it and highlight that one in the list-item-steps
        // In desktop view, we want to change the 'next possible form question that needs to be filled out' and set that as 'selected'
        for (let i = 0; i < divFormItems.length; i++) {
          // divForm is the .div-form-item that holds a header, and the list
          const divForm = divFormItems[i];
          // isDivFormComplete sees the value of the 'data-form-selected' element, which tells us if the user has selected from this list
          const isDivFormComplete = divForm.getAttribute('data-form-selected');
          // 0 false , idx === undefined
          // While iterating 0 --> 5, we remove the selected tag from any listItemsFormSteps, so that we can highlight the next form question that needs to be filled out.
          listItemFormSteps[i].classList.remove('selected');
  
          // Condition: if the data on .div-form-item is false
          if ((isDivFormComplete === 'false')) {
            // We see if it is the smaller than the current next filled form
            if (resizeIdxIncomplete === undefined || i < resizeIdxIncomplete) {
              resizeIdxIncomplete = i;
            }
          }
        }
        // if resizeIdxIncomplete is undefined, then all forms have been filled out.
        // We set the last step, 'Deliveries' as 
        if ((resizeIdxIncomplete === undefined) || (resizeIdxIncomplete === 3 && divFormGrind.classList.contains('disabled'))) {
          listItemFormSteps[4].classList.add('selected');
          return;
        } else {
          // set the question step to be selected
          // This means that there is an div form that is incomplete, so we will set that one as selected.
          listItemFormSteps[resizeIdxIncomplete].classList.add('selected');
          // Open it's list.
          divFormItems[resizeIdxIncomplete].children[0].classList.add('open');
          divFormItems[resizeIdxIncomplete].children[1].classList.remove('hide');
        }
      }
    } else {
      divHeroDescription.innerText = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.';
      divFormHeaderSteps.classList.add('hide');

      // When window resizes from desktop to tablet or mobile view, we want to open up all the div form lists.
      for (let i = 0; i < divFormItems.length; i++) {
        const divFormItem = divFormItems[i];

        if (i === 3 && divFormItem.classList.contains('disabled')) {
          continue;
        } else {
          divFormItem.children[0].classList.add('open');
          divFormItem.children[1].classList.remove('hide');
        }
      }
    }
  });

  if (window.innerWidth >= 768 && divOrderButtonConfirmation.children.length === 1) {
    spanCheckoutCalculatedPrice.remove();
    divOrderButtonConfirmation.prepend(spanCheckoutCalculatedPrice);
    btnCheckoutConfirm.innerText = 'Checkout';
  } else if (window.innerWidth <= 768 && divOrderButtonConfirmation.children.length > 1) {
    spanCheckoutCalculatedPrice.remove();
    btnCheckoutConfirm.innerText = 'Checkout - ';
    btnCheckoutConfirm.append(spanCheckoutCalculatedPrice);
  }

  if (window.innerWidth >= 1400) {
    divHeroDescription.innerText = 'Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.';
    divListBg.classList.remove('hide');
    divFormHeaderSteps.classList.remove('hide');

    // if we resize to 1200px, desktop view, then hide the bottom 4 lists and close their lists.
    listItemFormSteps[0].classList.add('selected');
    
    divFormItems[1].children[0].classList.remove('open');
    divFormItems[1].children[1].classList.add('hide');
    divFormItems[2].children[0].classList.remove('open');
    divFormItems[2].children[1].classList.add('hide');
    divFormItems[3].children[0].classList.remove('open');
    divFormItems[3].children[1].classList.add('hide');
    divFormItems[4].children[0].classList.remove('open');
    divFormItems[4].children[1].classList.add('hide');
  } else {
    divHeroDescription.innerText = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.';
    divFormHeaderSteps.classList.add('hide');
  }
});