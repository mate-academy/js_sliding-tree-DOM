'use strict';

const tree = document.querySelector('.tree');

function wrapInSpan(element) {
  const span = document.createElement('span');

  span.textContent = element.textContent;
  element.replaceWith(span);
}

const listItems = tree.querySelectorAll('li > ul');

listItems.forEach((ul) => {
  const li = ul.parentElement;

  wrapInSpan(li.firstChild);
});

document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    const parentLi = target.parentElement;
    const sublist = parentLi.querySelector('ul');

    if (sublist.style.display === 'none') {
      sublist.style.display = 'block';
    } else {
      sublist.style.display = 'none';
    }
  }
});
