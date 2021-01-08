'use strict';

const headlines = document.querySelector('.tree');

document.querySelectorAll('li').forEach(li => {
  if (li.children.length > 0) {
    li.insertAdjacentHTML('afterbegin',
      `<span>${li.firstChild.textContent}</span>`);

    li.firstChild.nextSibling.remove();
  };
});

headlines.addEventListener('click', (e) => {
  const list = e.target.nextSibling;

  if (e.target.tagName === 'SPAN') {
    if (list.style.display === 'none') {
      list.style.display = '';
    } else {
      list.style.display = 'none';
    }
  }
});
