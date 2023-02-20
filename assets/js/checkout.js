document.addEventListener('DOMContentLoaded', () => {
  const buttonUserSubmit = document.getElementById('btn-user-submit');
  const divOrderModal = document.getElementById('div-order-modal');
  const divBgModalOpen = document.getElementById('div-bg-modal-open');
  const spanPreference = document.getElementById('span-preference');
  const spanType = document.getElementById('span-type');
  const spanQuantity = document.getElementById('span-quantity');
  const spanGrind = document.getElementById('span-grind');
  const spanDelivery = document.getElementById('span-delivery');
  const spanPlanError = document.getElementById('span-submit-error');
  const resultOrderSummary = document.getElementById('result-order-summary');
  const divOrderSummary = document.getElementById('div-order-summary');

  buttonUserSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // if user clicks create my plan and order summary does not match correct conditionals, then we don't want to open modal
    // How to check if user has selected all prompts?
    // Check to see if all the result spans have been completed and are not empty.
    console.log(spanPreference, spanType, spanQuantity, spanGrind, spanDelivery);
    if (spanPreference.innerText !== '' && spanPreference.innerText !== '___' && spanType.innerText !== '' && spanType.innerText !== '___' && spanQuantity.innerText !== '' && spanQuantity.innerText !== '___' && spanDelivery.innerText !== '' && spanDelivery.innerText !== '___') {
      if (spanPreference.innerText !== 'Capsules' && (spanGrind.innerText === '' || spanGrind.innerText === '___')) {
        spanPlanError.classList.remove('hide');
        return;
      }

      divOrderModal.classList.remove('hide');
      divBgModalOpen.classList.remove('hide');
      spanPlanError.classList.add('hide');

      // Add user prompts to modal order summary.
      divOrderSummary.innerHTML = resultOrderSummary.innerHTML;

      // grab all span elements in result order summary that need to have id changed.
      const secondSpanPreference = document.querySelector('#div-order-summary > #span-preference');
      const secondSpanType = document.querySelector('#div-order-summary > #span-type');
      const secondSpanQuantity = document.querySelector('#div-order-summary > #span-quantity');
      const secondSpanGrind = document.querySelector('#div-order-summary > #span-grind');
      const secondSpanDelivery = document.querySelector('#div-order-summary > #span-delivery');

      secondSpanPreference.id = '';
      secondSpanType.id = '';
      secondSpanQuantity.id = '';
      secondSpanGrind.id = '';
      secondSpanDelivery.id = '';

      // Otherwise, if order summary has matched all conditionals, then we calculate total at checkout and show modal.
        // - If Every Week is selected, the Order Summary modal should show the per shipment price multiplied by 4. For example, if 250g weight is selected, the price would be $28.80/month
        // - If Every 2 Weeks is selected, the Order Summary modal should show the per shipment price multiplied by 2. For example, if 250g weight is selected, the price would be $19.20/month
        // - If Every Month is selected, the Order Summary modal should show the per shipment price multiplied by 1. For example, if 250g weight is selected, the price would be $12.00/month
      const listItemQuantity250 = document.getElementById('list-item-quantity-250');
      const listItemQuantity500 = document.getElementById('list-item-quantity-500');
      const listItemDeliveryOneWeek = document.getElementById('list-item-delivery-one-week');
      const listItemDeliveryTwoWeek = document.getElementById('list-item-delivery-two-week');
      const spanCheckoutPrice = document.getElementById('span-checkout-price');
  
      if (listItemQuantity250.classList.contains('selected')) {  
        if (listItemDeliveryOneWeek.classList.contains('selected')) {
          spanCheckoutPrice.innerText = '$28.80';
        } else if (listItemDeliveryTwoWeek.classList.contains('selected')) {
          spanCheckoutPrice.innerText = '$19.20';
        } else {
          spanCheckoutPrice.innerText = '$12.00';
        }
      } else if (listItemQuantity500.classList.contains('selected')) {
        if (listItemDeliveryOneWeek.classList.contains('selected')) {
          spanCheckoutPrice.innerText = '$52.00';
        } else if (listItemDeliveryTwoWeek.classList.contains('selected')) {
          spanCheckoutPrice.innerText = '$34.00';
        } else {
          spanCheckoutPrice.innerText = '$22.00';
        }
      } else {
        if (listItemDeliveryOneWeek.classList.contains('selected')) {
          spanCheckoutPrice.innerText = '$88.00';
        } else if (listItemDeliveryTwoWeek.classList.contains('selected')) {
          spanCheckoutPrice.innerText = '$64.00';
        } else {
          spanCheckoutPrice.innerText = '$42.00';
        }
      }
    } else {
      spanPlanError.classList.remove('hide');
      return;
    }
  });

  divBgModalOpen.addEventListener('click', () => {
    if (!divBgModalOpen.classList.contains('hide')) {
      divBgModalOpen.classList.add('hide');
      divOrderModal.classList.add('hide');
    }
  });
});