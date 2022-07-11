'use strict';

const list = document.querySelector('.tree');
const li = document.querySelectorAll('li');
const copy = [...li].filter(el => el.firstElementChild !== null);

for (let i = 0; i < copy.length; i++) {
  const item = copy[i];
  const itemText = item.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.dataset.wrapper = `${itemText[0].toLowerCase() + itemText.slice(1)}`;
  span.append(document.createTextNode(itemText));

  item.replaceChild(span, copy[i].firstChild);
}

list.addEventListener('click', (eventOnclick) => {
  if (eventOnclick.target.dataset.wrapper) {
    eventOnclick
      .target.nextSibling.hidden = !eventOnclick.target.nextSibling.hidden;
  }
});
