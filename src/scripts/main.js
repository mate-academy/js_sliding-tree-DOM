'use strict';

const li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
  const span = document.createElement('span');
  const firstChild = li[i].firstChild;

  if (firstChild.textContent !== undefined) {
    span.textContent = firstChild.textContent;
    li[i].insertBefore(span, firstChild);
    firstChild.textContent = '';
  }
}

const spans = document.querySelectorAll('span');

for (let i = 0; i < li.length; i++) {

  spans[i].addEventListener('click', e => {
    e.stopPropagation();

    const liChilds = li[i].querySelectorAll('li');

    for (let j = 0; j < liChilds.length; j++) {
      liChilds[j].style.display !== 'none'
        ? liChilds[j].style.display = 'none'
        : liChilds[j].style.display = 'list-item';
    }
  });
}
