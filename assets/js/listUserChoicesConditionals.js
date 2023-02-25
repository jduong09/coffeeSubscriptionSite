document.addEventListener('DOMContentLoaded', () => {
  const stepGrind = document.getElementById('step-grind');
  const listItemPreferenceCapsule = document.getElementById('list-item-preference-capsule');
  const divGrind = document.getElementById('div-grind-li');
  const spanModularWord = document.getElementById('span-modular-word');
  const spanGrindPhrase = document.getElementById('span-grind-phrase');
  const spanGrind = document.getElementById('span-grind');

  const listItemsQuantity = document.querySelectorAll('#list-quantity > li');

  /*
  // Event listener on 'list-item-preference-capsule'
  // When selected
  // The #div-grind-li is set to disabled, and user cannot select from this group of list items.
  // Order summary sentence is changed to reflect this.

  // NOTE: BECAUSE THIS JAVASCRIPT FILE IS AFTER 'listUserChoices.js'
  // When the list-item-preference-capsule is checked for selected, it will have just been selected by the user.
  // Therefore, when it does not contain selected, the user will have just clicked on it to remove capsule as a choice
  listItemPreferenceCapsule.addEventListener('click', () => {
    // set variable for arrow button that is a child of #div-grind-li
    const btnGrindArrow = document.querySelector('#div-grind-li > .div-input-header > button');

    // If ListItemPreferenceCapsule contains selected,
    // Then user just selected it as an option, and we want to disabled #div-grind-li
    if (listItemPreferenceCapsule.classList.contains('selected')) {
      // Add class name 'disabled' to #div-grind-li to give it the opaque css.
      stepGrind.classList.add('disabled');
      divGrind.classList.add('disabled');
      // remove the 'open' class word from #div-grind-li > .div-input-header
      // This should rotate the btnGrindArrow to the closed position
      divGrind.children[0].classList.remove('open');
      
      // Set the disabled property on btnGrindArrow to true.
      btnGrindArrow.disabled = true;
      // Add class name 'hide' to #div-grind-li > .div-input to hide it.
      divGrind.children[1].classList.add('hide');
      
      // Changes to the order summary sentence
      spanModularWord.innerText = 'using';
      spanGrindPhrase.innerText = '';
      spanGrind.classList.add('hide');
    } else {
      // Else, the user just selected to not choose capsule,
      // Need to enable the #div-grind-li
      // Remove the class name 'disabled' from #div-grind-li, effectively removing the opacity change
      stepGrind.classList.remove('disabled');
      divGrind.classList.remove('disabled');

      // Add class name 'open' to #div-grind-li > .div-input-header
      // This rotates the btnGrindArrow to the open position
      divGrind.children[0].classList.add('open');
      // Set the 'disabled' property on btnGrindArrow to false, allowing it to be selected
      btnGrindArrow.disabled = false;
      // Remove the 'hide' class name on #div-grind-li > .div-input, which then shows it on the html page.
      divGrind.children[1].classList.remove('hide');

      // Change the order summary sentence to what it should look like if 'filter' and 'espresso' are selected for the preference.
      spanModularWord.innerText = 'as';
      spanGrindPhrase.innerText = 'ground ala';
      spanGrind.innerText = spanGrind.innerHTML ? spanGrind.innerHTML : '___';
      spanGrind.classList.remove('hide');
    }
  });
  */

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