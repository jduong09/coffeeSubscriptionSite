document.addEventListener('DOMContentLoaded', () => {
  const listItemUserChoices = document.querySelectorAll('.list-user-choices > li');
  const spanPreference = document.getElementById('span-preference');
  const spanType = document.getElementById('span-type');
  const spanQuantity = document.getElementById('span-quantity');
  const spanGrind = document.getElementById('span-grind');
  const spanDelivery = document.getElementById('span-delivery');

  for (let i = 0; i < listItemUserChoices.length; i++) {
    const listItemUserChoice = listItemUserChoices[i];

    listItemUserChoice.addEventListener('click', (e) => {
      e.preventDefault();

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
          }
        }

        if (parentListUserChoiceId === 'list-preference') {
          spanPreference.innerHTML = userChoice;
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