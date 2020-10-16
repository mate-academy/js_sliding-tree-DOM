'use strict';

const listElement = document.querySelectorAll('li');

for (const i of listElement) {
  const addSpan = document.createElement('span');

  addSpan.className = 'active';

  if (i.firstElementChild) {
    i.prepend(addSpan);
    addSpan.append(i.childNodes[1]);
  }
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('active')) {
    const hidden = event.target.parentElement.lastElementChild;

    hidden.style.display = (hidden.style.display === 'none') ? '' : 'none';
  }
});
