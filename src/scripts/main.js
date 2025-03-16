'use strict';

// write code here
const lis = document.querySelectorAll('li');

lis.forEach((li) => {
  const span = document.createElement('span');
  const textContent = li.firstChild.textContent.trim();

  span.textContent = textContent;
  li.firstChild.textContent = '';
  li.prepend(span);
});

document.addEventListener('click', (e) => {
  const li = e.target.closest('li');

  if (e.target.parentElement.lastElementChild.tagName !== 'UL') {
    return;
  }

  if (li.lastElementChild.style.display === 'none') {
    li.lastElementChild.style.display = 'block';
  } else {
    li.lastElementChild.style.display = 'none';
  }
});
