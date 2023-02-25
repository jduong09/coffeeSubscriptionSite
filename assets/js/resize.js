document.addEventListener('DOMContentLoaded', () => {
  const divOrderButtonConfirmation = document.getElementById('div-order-button-confirmation');
  const btnCheckoutConfirm = document.getElementById('btn-checkout-confirm');
  const spanCheckoutCalculatedPrice = document.getElementById('span-checkout-calculated-price');
  const divHeroDescription = document.querySelector('.div-hero > div > div');
  const divFormHeaderSteps = document.getElementById('div-form-header-steps');

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

    if (window.innerWidth >= 1200) {
      divHeroDescription.innerText = 'Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.';
      divFormHeaderSteps.classList.remove('hide');

      const listItemFormStepsSelected = document.querySelectorAll('.list-item-form-step.selected');
      // if we resize to 1200px, desktop view, then hide the bottom 4 lists and close their lists.
      if (listItemFormStepsSelected.length != 1) {
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
        return;
      }
    } else {
      divHeroDescription.innerText = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.';
      divFormHeaderSteps.classList.add('hide');

      /*
      // When window resizes, we want to open up all the div form lists.
      for (let i = 0; i < divFormItems.length; i++) {
        const divFormItem = divFormItems[i];

        if (i === 3 && divFormItem.classList.contains('disabled')) {
          continue;
        } else {
          divFormItem.children[0].classList.add('open');
          divFormItem.children[1].classList.remove('hide');
        }
      }
      */
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

  if (window.innerWidth >= 1200) {
    divHeroDescription.innerText = 'Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.';
    divFormHeaderSteps.classList.remove('hide');

    const listItemFormStepsSelected = document.querySelectorAll('.list-item-form-step.selected');
    // if we resize to 1200px, desktop view, then hide the bottom 4 lists and close their lists.
    if (listItemFormStepsSelected.length != 1) {
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
      return;
    }
  } else {
    divHeroDescription.innerText = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.';
    divFormHeaderSteps.classList.add('hide');
  }
});