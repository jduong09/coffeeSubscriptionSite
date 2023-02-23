document.addEventListener('DOMContentLoaded', () => {
  const divOrderButtonConfirmation = document.getElementById('div-order-button-confirmation');
  const btnCheckoutConfirm = document.getElementById('btn-checkout-confirm');
  const spanCheckoutCalculatedPrice = document.getElementById('span-checkout-calculated-price');
  const divHeroDescription = document.querySelector('.div-hero > div > div');
  const divFormHeaderSteps = document.getElementById('div-form-header-steps');
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

    if (window.innerWidth >= 1400) {
      divHeroDescription.innerText = 'Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.';
      divFormHeaderSteps.classList.remove('hide');
    } else {
      divHeroDescription.innerText = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.';
      divFormHeaderSteps.classList.add('hide');
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
    divFormHeaderSteps.classList.remove('hide');
  } else {
    divHeroDescription.innerText = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.';
    divFormHeaderSteps.classList.add('hide');
  }
});