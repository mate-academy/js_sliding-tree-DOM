'use strict';

const lis = [...document.querySelectorAll('li')]
  .filter(li => li.children.length !== 0);
const tree = document.querySelector('.tree');

for (const li of lis) {
  const spanText = li.firstChild.textContent;

  li.firstChild.remove();
  li.insertAdjacentHTML('afterbegin', `<span>${spanText}</span>`);
}

tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
