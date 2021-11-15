'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

function addHeadlines() {
  for (const listItem of listItems) {
    if (listItem.childElementCount > 0) {
      const spanHeadline = document.createElement('span');

      spanHeadline.textContent = listItem.firstChild.textContent;
      spanHeadline.className = 'headline';

      listItem.firstChild.replaceWith(spanHeadline);
    }
  }
}

addHeadlines();

tree.addEventListener('click', (e) => {
  const selectedItem = e.target;

  if (!selectedItem.classList.contains('headline')) {
    return;
  }

  const list = selectedItem.nextElementSibling;

  list.hidden = !list.hidden;
});
