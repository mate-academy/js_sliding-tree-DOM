'use strict';

// write code here
const li = [...document.querySelectorAll('li')];

li.map(item => {
  item.insertAdjacentHTML('afterbegin', `
    <span>${item.firstChild.textContent.trim()}</span>
  `);
  item.childNodes[3].remove();
});

for (const item of li) {
  item.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      e.stopPropagation();
      e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
    }
  });
}
