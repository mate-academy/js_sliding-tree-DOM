'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  if (item.innerHTML.includes('ul')) {
    const itemContent = item.childNodes[0].nodeValue.trim();
    const span = document.createElement('span');

    span.textContent = itemContent;
    item.replaceChild(span, item.childNodes[0]);

    item.addEventListener('click', toggleElements);
  }
});

function toggleElements(e) {
  e.stopPropagation();

  const childUl = e.target.nextSibling;

  if (childUl) {
    childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
  }
}
