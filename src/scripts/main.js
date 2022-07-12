'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

for (const item of listItems) {
  const span = document.createElement('span');

  span.append(item.firstChild.textContent.trim());
  item.insertBefore(span, item.firstElementChild);
  item.firstChild.remove();
}

tree.addEventListener('click', (e) => {
  const header = e.target.closest('span');

  if (!header) {
    return;
  };

  header.nextSibling.hidden = !header.nextSibling.hidden;
});
