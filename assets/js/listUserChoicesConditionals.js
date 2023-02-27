document.addEventListener('DOMContentLoaded', () => {
  const listItemsQuantity = document.querySelectorAll('#list-quantity > li');
  // Conditionals for changing the checkout price that will be displayed to the user before confirming their order
  // Based on the quantity and time range the user selects for their order.
  for (let i = 0; i < listItemsQuantity.length; i++) {
    const listItemQuantity = listItemsQuantity[i];
    const spanOneWeekPrice = document.querySelector('#list-item-delivery-one-week > div > .span-shipment-price');
    const spanTwoWeekPrice = document.querySelector('#list-item-delivery-two-week > div > .span-shipment-price');
    const spanOneMonthPrice = document.querySelector('#list-item-delivery-one-month > div > .span-shipment-price');

    listItemQuantity.addEventListener('click', () => {
      if (i === 0) {
        spanOneWeekPrice.innerText = '$7.20';
        spanTwoWeekPrice.innerText = '$9.60';
        spanOneMonthPrice.innerText = '$12.00';
      } else if (i === 1) {
        spanOneWeekPrice.innerText = '$13.00';
        spanTwoWeekPrice.innerText = '$17.00';
        spanOneMonthPrice.innerText = '$22.00';
      } else {
        spanOneWeekPrice.innerText = '$22.00';
        spanTwoWeekPrice.innerText = '$32.00';
        spanOneMonthPrice.innerText = '$42.00';
      }
    });
  }
});