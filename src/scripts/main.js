'use strict';

const listElements = document.querySelectorAll('li');

for (const listElement of listElements) {
  const wrapper = document.createElement('span');

  wrapper.className = 'active';

  if (listElement.firstElementChild) {
    listElement.prepend(wrapper);
    wrapper.append(listElement.childNodes[1]);
  }
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('active')) {
    const hidden = event.target.parentElement.lastElementChild;

    hidden.style.display = (hidden.style.display === 'none') ? '' : 'none';
  }
});
