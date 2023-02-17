/*
- If "Capsule" is selected for the first option 
  - The "Want us to grind them?" section should be disabled and not able to be opened


- Order summary texts updates
  - If "Capsule" is selected, update the order summary text to:
    - "I drink my coffee **using** Capsules"
    - Remove the grind selection text
  - If "Filter" or "Espresso" are selected, update the order summary text to:
    - "I drink my coffee **as** Filter||Espresso"
    - Keep/Add the grind selection text
  - For all other selections, add the selection title in the blank space where appropriate
- Updating per shipment price (shown in "How often should we deliver?" section at the bottom) based on weight selected
  - If 250g weight is selected
    - Every Week price per shipment is $7.20
    - Every 2 Weeks price per shipment is $9.60
    - Every Month price per shipment is $12.00
  - If 500g weight is selected
    - Every Week price per shipment is $13.00
    - Every 2 Weeks price per shipment is $17.50
    - Every Month price per shipment is $22.00
  - If 1000g weight is selected
    - Every Week price per shipment is $22.00
    - Every 2 Weeks price per shipment is $32.00
    - Every Month price per shipment is $42.00
- Calculating per month cost for the Order Summary modal
  - If Every Week is selected, the Order Summary modal should show the per shipment price multiplied by 4. For example, if 250g weight is selected, the price would be $28.80/month
  - If Every 2 Weeks is selected, the Order Summary modal should show the per shipment price multiplied by 2. For example, if 250g weight is selected, the price would be $19.20/month
  - If Every Month is selected, the Order Summary modal should show the per shipment price multiplied by 1. For example, if 250g weight is selected, the price would be $12.00/month
*/
document.addEventListener('DOMContentLoaded', () => {
  const listItemPreferenceCapsule = document.getElementById('list-item-preference-capsule');
  const divGrind = document.getElementById('div-grind-li');
  const headerOrderSummary = document.getElementById('result-order-summary');

  listItemPreferenceCapsule.addEventListener('click', () => {
    const btnArrow = divGrind.children[0].children[1];
    const splitOrderSummary = headerOrderSummary.innerHTML;

    if (listItemPreferenceCapsule.classList.contains('selected')) {
      divGrind.children[0].classList.remove('open');
      btnArrow.disabled = true;
      divGrind.children[1].classList.add('hide');
      headerOrderSummary.innerHTML = splitOrderSummary.replace('as', 'using');
    } else {
      divGrind.children[0].classList.add('open');
      btnArrow.disabled = false;
      divGrind.children[1].classList.remove('hide');
      headerOrderSummary.innerHTML = splitOrderSummary.replace('using', 'as');
    }
  });
});