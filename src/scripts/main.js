'use strict';

// write code here
const lists = document.querySelectorAll('li');

for (const li of lists) {
  const text = li.firstChild;

  li.insertAdjacentHTML('afterbegin',
    `<span class='title'>
    ${li.firstChild.nodeValue.trim()}
    </span>`);
  text.remove();
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', action => {
  if (action.target.className !== 'title') {
    return;
  }

  const toHide = action.target.nextElementSibling;

  if (toHide) {
    toHide.hidden = !toHide.hidden;
  }
});
