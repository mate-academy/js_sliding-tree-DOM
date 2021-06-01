'use strict';

// write code here
const listItem = document.querySelector('.tree');
const liItems = listItem.querySelectorAll('li');

for (const li of liItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

const getHidden = (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  };

  const child = e.target.parentElement.querySelector('ul');

  if (!child) {
    return;
  };

  child.hidden = !child.hidden;
};

listItem.addEventListener('click', getHidden);
