/* 
  - Contains event listeners for every list item that user can choose.
*/
document.addEventListener('DOMContentLoaded', () => {
  const listItemUserChoices = document.querySelectorAll('.list-user-choices > li');
  const listItemPreferenceCapsule = document.getElementById('list-item-preference-capsule');
  const spanModularWord = document.getElementById('span-modular-word');
  const spanGrindPhrase = document.getElementById('span-grind-phrase');
  const spanPreference = document.getElementById('span-preference');
  const spanType = document.getElementById('span-type');
  const spanQuantity = document.getElementById('span-quantity');
  const divGrind = document.getElementById('div-grind-li');

  const spanGrind = document.getElementById('span-grind');
  const spanDelivery = document.getElementById('span-delivery');
  const stepGrind = document.getElementById('step-grind');
  const btnGrindArrow = document.querySelector('#div-grind-li > .div-input-header > button');


  for (let i = 0; i < listItemUserChoices.length; i++) {
    const listItemUserChoice = listItemUserChoices[i];

    // If Capsule is selected, change 'as' to 'using'
      // hide and disable the grind-list
      // remove the spanGrindPhase and spanGrind
    // Event Listener: On each of the choosable list items in ALL of the 5 questions.
    listItemUserChoice.addEventListener('click', (e) => {
      // Grab needed variables
      // On Click, we grab the parent ul element so that we can get the id to know which list question it is.
      // Set variable for the id, and set variable for which selection the user chose (parentListUserChoiceId, userChoice)
      const parentListUserChoice = e.currentTarget.parentElement;
      // Get the children of the ul element, for deselecting.
      const parentListChildren = parentListUserChoice.children;
      const parentListUserChoiceId = parentListUserChoice.id;
      const userChoice = e.currentTarget.children[0].innerHTML;
      
      // if the clicked list item has been selected
      if (listItemUserChoice.classList.contains('selected')) {
        // remove the selected tag from it, dehighlighting the selected item.
        listItemUserChoice.classList.remove('selected');
        listItemUserChoice.parentElement.parentElement.parentElement.setAttribute('data-form-selected', false);

        // Get the correct span from the order summary div it is and reset it to being blank.
        const correctSpan = `span-${parentListUserChoiceId.slice(5)}`;
        const spanClear = document.getElementById(correctSpan);
        spanClear.innerHTML = '___';
        // if the item that is being deselected is 'Capsule'
        // Then we need to enable the #div-grind-li element
        if (listItemUserChoice === listItemPreferenceCapsule) {
          // Add class name 'disabled' to #div-grind-li to give it the opaque css.
          stepGrind.classList.remove('disabled');
          divGrind.classList.remove('disabled');
          // remove the 'open' class word from #div-grind-li > .div-input-header
          // This should rotate the btnGrindArrow to the closed position
          // When opening the div grind li, if it is not desktop view, then we open up the list
          if (window.innerWidth < 1200) {
            divGrind.children[0].classList.add('open');
            divGrind.children[1].classList.remove('hide');
          }
          
          // Set the disabled property on btnGrindArrow to true.
          btnGrindArrow.disabled = false;
          
          // Changes to the order summary sentence
          spanModularWord.innerText = 'using';
          spanGrindPhrase.innerText = '';
          spanGrind.classList.add('hide');
        }
      } else {
        // Clicked item needs to be set to selected
        // Add selected to the classlist, so that will be highlighted
        listItemUserChoice.classList.add('selected');
        
        listItemUserChoice.parentElement.parentElement.parentElement.setAttribute('data-form-selected', true);
        // Remove other selected elements in this list so there aren't two selected.
        // Iterate through the current lists children
        for (let j = 0; j < parentListChildren.length; j++) {
          // If the current child is the same as the selected element, skip over it/do nothing
          if (parentListChildren[j] == e.currentTarget) {
            continue;
          } else {
            // Remove selected class name
            parentListChildren[j].classList.remove('selected');
            
            // EdgeCase: If the selected item is Capsule, we need to enable the grind prompt
            // if removing a selected is capsule, make sure we open the grind list.
            if (parentListChildren[j] === listItemPreferenceCapsule) {
              const divGrind = document.getElementById('div-grind-li');
              const btnGrindArrow = document.querySelector('#div-grind-li > .div-input-header > button');
              stepGrind.classList.remove('disabled');
              divGrind.classList.remove('disabled');

              if (window.innerWidth < 1200) {
                divGrind.children[0].classList.add('open');
                divGrind.children[1].classList.remove('hide');
              }
              // We set the btnGrindArrow's disabled property to false 
              btnGrindArrow.disabled = false;


            }
          }
        }

        if (listItemUserChoice === listItemPreferenceCapsule) {
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
      }

        // Check which list the list item has been selected from, and using that id, we set the correct span in the order summary to the correct list item selection.
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