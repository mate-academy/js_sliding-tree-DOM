'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  const text = item.firstChild;
  const header = document.createElement('span');

  header.innerText = `${text.nodeValue.trim()}`;
  item.prepend(header);

  text.remove();
}

list.addEventListener('click', e => {
  const headline = e.target.closest('span');

  if (!headline) {
    return;
  }

  const firstList = headline.parentElement.querySelector('ul');

  if (!firstList.hidden) {
    firstList.setAttribute('hidden', true);
  } else {
    firstList.removeAttribute('hidden');
  }
});
