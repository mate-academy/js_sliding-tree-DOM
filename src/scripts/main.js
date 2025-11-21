'use strict';

const tree = document.querySelector('ul.tree');
const lis = [...tree.querySelectorAll('li')];

function wrapWithSpan(liArray) {
  const array = [];

  liArray.forEach((li) => {
    if (!li.querySelector('ul')) {
      return;
    }

    if (li.querySelector('ul')) {
      wrapWithSpan([...li.querySelector('ul').children]);
    }

    const span = document.createElement('span');

    span.textContent = `${li.firstChild.textContent}`;
    li.firstChild.replaceWith(span);

    array.push(li);
  });

  return array;
}

wrapWithSpan(lis);

tree.addEventListener('click', (elemEvent) => {
  if (elemEvent.target.matches('span')) {
    const list = elemEvent.target.parentElement.children[1];

    if (!list) {
      return;
    }

    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
});
