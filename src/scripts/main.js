'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  if (item.children.length > 0) {
    const text = item.firstChild.textContent;

    item.firstChild.remove();
    item.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
  }
}

list.addEventListener('click', (handler) => {
  const title = handler.target;

  if (title.tagName === 'SPAN') {
    title.nextElementSibling.hidden = !title.nextElementSibling.hidden;
  }
});
