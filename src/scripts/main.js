'use strict';

const list = document.querySelector('.tree');
const listItems = list.querySelectorAll('li');

for (const item of listItems) {
  if (item.childNodes.length > 1) {
    const heading = item.childNodes[0];
    const span = document.createElement('span');

    span.classList = 'tree__heading';
    heading.after(span);
    span.appendChild(heading);
    span.textContent = span.textContent.trim();
  }
}

list.addEventListener('click', e => {
  if (!e.target.classList.contains('tree__heading')) {
    return;
  }

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
