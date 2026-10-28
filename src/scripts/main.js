'use strict';

// write code here

const tree = document.querySelector('.tree');
const nestedTitles = tree.querySelectorAll('li');

for (const title of nestedTitles) {
  const heading = title.firstChild;
  const spanElement = document.createElement('span');

  spanElement.textContent = heading.textContent.trim();
  heading.replaceWith(spanElement);
}

tree.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.closest('span')) {
    const targetParent = clickEvent.target.closest('span').parentElement;
    const nestedLists = targetParent.querySelector('ul');

    if (nestedLists) {
      nestedLists.hidden = !nestedLists.hidden;
    }
  }
});
