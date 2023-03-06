'use strict';

const firstLineTree = document.querySelector('.tree');
const liElenents = document.querySelectorAll('li');

for (const li of liElenents) {
  const span = document.createElement('span');
  const liText = li.firstChild.textContent;

  li.firstChild.textContent = '';

  span.innerHTML = liText;
  li.prepend(span);
};

firstLineTree.addEventListener('click', e => {
  const element = e.target.closest('li');

  for (const item of element.children) {
    if (!item.hasAttribute('hidden') && item.querySelector('span')) {
      item.setAttribute('hidden', true);
    } else {
      item.removeAttribute('hidden');
    };
  };
});
