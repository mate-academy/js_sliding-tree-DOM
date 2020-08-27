'use strict';

for (const a of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  a.prepend(span);
  span.innerText = span.nextSibling.textContent;
  span.nextSibling.remove();
}

const spans = document.querySelectorAll('span');

for (const a of spans) {
  a.addEventListener('click', (event) => {
    const ul = event.target;

    if (ul.nextElementSibling.tagName === 'UL') {
      ul.nextElementSibling.hidden = !ul.nextElementSibling.hidden;
    }
  });
}
