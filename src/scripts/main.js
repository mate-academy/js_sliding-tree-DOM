'use strict';

for (const ul of document.querySelectorAll('ul')) {
  const span = document.createElement('span');

  console.log(ul.parentElement.tagName === 'LI');

  if (ul.parentElement.tagName === 'LI') {
    ul.parentElement.prepend(span);
    span.append(span.nextSibling);
  }
}

const spanList = document.querySelectorAll('span');

spanList.forEach(el => {
  el.addEventListener('click', (e) => {
    const displayStatus = e.target.nextSibling.style.display;

    e.target.nextSibling.style.display = displayStatus !== 'none'
      ? 'none'
      : 'block';
  });
});
