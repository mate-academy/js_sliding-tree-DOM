'use strict';

const liAll = document.querySelectorAll('li');
const liTitles = [...liAll].filter(li => li.children.length > 0);

liTitles.map(li => {
  const span = document.createElement('span');

  span.innerText = li.firstChild.textContent;

  li.firstChild.replaceWith(span);
  span.nextElementSibling.style.display = 'block';

  span.addEventListener('click', () => {
    span.nextElementSibling.style.display !== 'block'
      ? span.nextElementSibling.style.display = 'block'
      : span.nextElementSibling.style.display = 'none';
  });
});
