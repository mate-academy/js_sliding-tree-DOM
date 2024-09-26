'use strict';

const tree = document.querySelector('.tree');
const listItem = document.querySelectorAll('li');

for (const element of [...listItem]) {
  if (element.firstElementChild !== null) {
    element.classList.add('headliner');
  }
}

tree.addEventListener('click', (e) => {
  const item = e.target.closest('li');
  const smallList = item.querySelector('ul');

  if (item.classList.contains('headliner')) {
    const title = document.createElement('span');
    const prevTitle = item.firstChild;

    title.textContent = prevTitle.textContent;
    item.replaceChild(title, prevTitle);

    if (item.classList.toggle('choice')) {
      smallList.style.display = 'none';
    } else {
      smallList.style.display = 'block';
    }
  }
});
