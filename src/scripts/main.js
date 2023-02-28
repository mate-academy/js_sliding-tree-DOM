'use strict';

const list = document.querySelector('.tree');
const listOfItems = document.querySelectorAll('li');

listOfItems.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);

});

list.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const content = e.target.parentNode.querySelector('ul');

  if (!content) {
    return;
  }

  content.hidden = !content.hidden;
});
