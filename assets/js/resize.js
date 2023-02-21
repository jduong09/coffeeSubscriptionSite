document.addEventListener('DOMContentLoaded', () => {
  const divOrderButtonConfirmation = document.getElementById('div-order-button-confirmation');
  const btnCheckoutConfirm = document.getElementById('btn-checkout-confirm');
  const spanCheckoutCalculatedPrice = document.getElementById('span-checkout-calculated-price');

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
});