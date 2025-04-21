'use strict';

document.querySelectorAll('li').forEach((li) => {
  const textNode = li.firstChild;

  const span = document.createElement('span');

  span.textContent = textNode.textContent;
  textNode.replaceWith(span);
});

document.querySelector('.tree').addEventListener('click', function (e) {
  const li = e.target.closest('li');
  const childUl = li.querySelector('ul');

  if (childUl.hasAttribute('hidden')) {
    childUl.removeAttribute('hidden');
  } else {
    childUl.setAttribute('hidden', true);
  }
});
