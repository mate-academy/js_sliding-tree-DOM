'use strict';

const list = document.querySelector('.tree');

const listTitle = list.querySelectorAll('li');

function hideElement(element) {
  const hiddenElement = element.target.nextSibling.style;

  if (hiddenElement.display === 'none') {
    hiddenElement.display = 'block';
  } else {
    hiddenElement.display = 'none';
  }
}

for (const title of listTitle) {
  const wrapper = document.createElement('span');

  title.prepend(wrapper);
  wrapper.append(wrapper.nextSibling);

  wrapper.addEventListener('click', hideElement);
}
