'use strict';

const lis = [...document.querySelectorAll('li')];

lis.forEach(li => {
  li.insertAdjacentHTML('afterbegin', `
    <span>${li.childNodes[0].textContent}</span>
  `);

  li.childNodes[3].remove();
});

[...document.querySelectorAll('span')].forEach(span => {
  span.addEventListener('click', () => {
    if (span.parentElement.lastElementChild.tagName === 'UL') {
      const ul = span.parentElement.lastElementChild;
      const ulStyles = getComputedStyle(ul);

      if (ulStyles.display === 'block') {
        ul.style.display = 'none';
      } else if (ulStyles.display === 'none') {
        ul.style.display = 'block';
      };
    };
  });
});
