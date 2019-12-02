'use strict';

document.querySelectorAll('li').forEach(li => {
  if (li.children.length) {
    const span = document.createElement('span');

    span.classList.add('list-name');
    li.prepend(span);
    span.append(span.nextSibling);
  }
});

const list = document.querySelector('.tree');

list.addEventListener('click', action => {
  if (action.target.tagName === 'SPAN') {
    const ulClasses = action.target.nextSibling.classList;

    if (ulClasses.contains('hide')) {
      ulClasses.remove('hide');
    } else {
      ulClasses.add('hide');
    }
  }
});
