'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  if (item.firstElementChild) {
    const text = item.firstChild.textContent.trim();

    const span = document.createElement('span');

    span.innerText = text;

    item.firstChild.replaceWith(span);
  }
}

tree.addEventListener('click', function(e) {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const ul = span.nextElementSibling;

  const ulStyles = getComputedStyle(ul);

  if (ulStyles.display === 'block') {
    ul.style.display = 'none';
  } else {
    ul.style.display = '';
  }
});
