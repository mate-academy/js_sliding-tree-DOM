'use strict';

const menu = document.querySelector('.tree');

function putInSpan(element) {
  for (const li of element.querySelectorAll('li')) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

putInSpan(menu);

menu.addEventListener('click', (myEvent) => {
  if (myEvent.target.tagName === 'SPAN') {
    const children
    = Array.from(myEvent.target.closest('li').children).slice(1,);

    for (const child of children) {
      child.classList.toggle('hide');
    }
  }
});
