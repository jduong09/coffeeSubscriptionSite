document.addEventListener('DOMContentLoaded', () => {
  const listItemPreferenceCapsule = document.getElementById('list-item-preference-capsule');
  const divGrind = document.getElementById('div-grind-li');
  const spanModularWord = document.getElementById('span-modular-word');
  const spanGrindPhrase = document.getElementById('span-grind-phrase');
  const spanGrind = document.getElementById('span-grind');

  const listItemsQuantity = document.querySelectorAll('#list-quantity > li');

  listItemPreferenceCapsule.addEventListener('click', () => {
    const btnArrow = divGrind.children[0].children[1];

    if (listItemPreferenceCapsule.classList.contains('selected')) {
      divGrind.children[0].classList.remove('open');
      btnArrow.disabled = true;
      divGrind.children[1].classList.add('hide');
      spanModularWord.innerText = 'using';
      spanGrindPhrase.innerText = '';
      spanGrind.classList.add('hide');
    } else {
      divGrind.children[0].classList.add('open');
      btnArrow.disabled = false;
      divGrind.children[1].classList.remove('hide');
      spanModularWord.innerText = 'as';
      spanGrindPhrase.innerText = 'ground ala';
      spanGrind.innerText = spanGrind.innerHTML ? spanGrind.innerHTML : '___';
      spanGrind.classList.remove('hide');
    }
  });

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