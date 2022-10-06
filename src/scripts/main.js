'use strict';

const liItems = document.querySelectorAll('li');

liItems.forEach(li => {
  if (li.children.length !== 0) {
    const textNode = li.firstChild.textContent.trim();

    li.firstChild.remove();
    li.insertAdjacentHTML('afterbegin', `<span>${textNode}</span>`);
  }
});

document.addEventListener('click', e => {
  if (!(e.target.tagName === 'SPAN')) {
    return;
  }

  const displayValue = e.target.parentElement.children[1].style.display;

  displayValue
    ? e.target.parentElement.children[1].style.display = null
    : e.target.parentElement.children[1].style.display = 'none';
});
