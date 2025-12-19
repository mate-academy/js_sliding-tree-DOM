'use strict';

const mainUl = document.querySelector('.tree');

function spanWrap(element) {
  for (const elem of element.children) {
    for (const li of elem.childNodes) {
      if (li.nodeType === 3 && li.textContent.trim() !== '') {
        const span = document.createElement('span');

        span.textContent = li.textContent.trim();
        li.textContent = li.textContent.replace(li.textContent.trim(), '');
        li.parentElement.insertBefore(span, li);
      }

      if (li.nodeType === 1) {
        spanWrap(li);
      }
    }
  }
}

spanWrap(mainUl);

mainUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.parentElement;
    const ul = li.querySelector('ul');

    if (ul !== null) {
      if (ul.style.display === 'none') {
        ul.style.display = 'block';
      } else {
        ul.style.display = 'none';
      }
    }

  }
});
