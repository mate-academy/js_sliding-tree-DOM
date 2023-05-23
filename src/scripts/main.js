'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  if (item.children.length > 0) {
    const text = item.firstChild;

    item.insertAdjacentHTML(
      'afterbegin',
      `<span>${text.textContent}</span>`
    );
    text.remove();
  }
});

list.addEventListener('click', e => {
  const item = e.target.closest('span');

  if (!item || !list.contains(item)) {
    return;
  }

  if (item.nextElementSibling.style.display === '') {
    item.nextElementSibling.style.display = 'none';

    return;
  }

  item.nextElementSibling.removeAttribute('style');
});
