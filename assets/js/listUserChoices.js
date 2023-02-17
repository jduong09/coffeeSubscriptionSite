document.addEventListener('DOMContentLoaded', () => {
  const listItemUserChoices = document.querySelectorAll('.list-user-choices > li');
  const listItemPreferenceCapsule = document.getElementById('list-item-preference-capsule');
  const btnPreferenceArrow = document.querySelector('#div-grind-li > .div-input-header > button');
  const divGrind = document.getElementById('div-grind-li');
  const spanModularWord = document.getElementById('span-modular-word');
  const spanGrindPhrase = document.getElementById('span-grind-phrase');
  const spanPreference = document.getElementById('span-preference');
  const spanType = document.getElementById('span-type');
  const spanQuantity = document.getElementById('span-quantity');
  const spanGrind = document.getElementById('span-grind');
  const spanDelivery = document.getElementById('span-delivery');

  for (let i = 0; i < listItemUserChoices.length; i++) {
    const listItemUserChoice = listItemUserChoices[i];

    // If Capsule is selected, change 'as' to 'using'
      // hide and disable the grind-list
      // remove the spanGrindPhase and spanGrind
    listItemUserChoice.addEventListener('click', (e) => {
      const parentListUserChoice = e.currentTarget.parentElement;
      const parentListChildren = parentListUserChoice.children;
      const parentListUserChoiceId = parentListUserChoice.id;
      const userChoice = e.currentTarget.children[0].innerHTML;
      
      if (listItemUserChoice.classList.contains('selected')) {
        listItemUserChoice.classList.remove('selected');

        const correctSpan = `span-${parentListUserChoiceId.slice(5)}`;
        const spanClear = document.getElementById(correctSpan);
        spanClear.innerHTML = '';
      } else {
        listItemUserChoice.classList.add('selected');

        // remove other selected elements in this list so there aren't two selected.
        for (let j = 0; j < parentListChildren.length; j++) {
          if (parentListChildren[j] == e.currentTarget) {
            continue;
          } else {
            parentListChildren[j].classList.remove('selected');
            
            // if removing a selected is capsule, make sure we open the grind list.
            if (parentListChildren[j] === listItemPreferenceCapsule) {
              btnPreferenceArrow.disabled = false;
              divGrind.children[0].classList.add('open');
              divGrind.children[1].classList.remove('hide');

              spanModularWord.innerText = 'as';
              spanGrindPhrase.innerText = 'ground ala';
              spanGrind.innerText = spanGrind.innerText ? spanGrind.innerText : '___';
              spanGrind.classList.remove('hide');
            }
          }
        }

        if (parentListUserChoiceId === 'list-preference') {
          spanPreference.innerHTML = userChoice === 'Capsule' ? `${userChoice}s` : userChoice;
        } else if (parentListUserChoiceId === 'list-type') {
          spanType.innerHTML = userChoice;
        } else if (parentListUserChoiceId === 'list-quantity') {
          spanQuantity.innerHTML = userChoice;
        } else if (parentListUserChoiceId === 'list-grind') {
          spanGrind.innerHTML = userChoice;
        } else {
          spanDelivery.innerHTML = userChoice;
        }
      }
    });
  }
});