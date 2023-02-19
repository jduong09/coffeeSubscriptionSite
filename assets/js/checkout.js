document.addEventListener('DOMContentLoaded', () => {
  const buttonUserSubmit = document.getElementById('btn-user-submit');
  const divOrderModal = document.getElementById('div-order-modal');
  const divBgModalOpen = document.getElementById('div-bg-modal-open');

  buttonUserSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    divOrderModal.classList.remove('hide');
    divBgModalOpen.classList.remove('hide');
    // if user clicks create my plan and order summary does not match correct conditionals, then we don't want to open modal

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
  });

  divBgModalOpen.addEventListener('click', () => {
    if (!divBgModalOpen.classList.contains('hide')) {
      divBgModalOpen.classList.add('hide');
      divOrderModal.classList.add('hide');
    }
  });
});