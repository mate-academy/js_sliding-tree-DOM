'use strict';

// write code here
const mainList = document.querySelector('.tree');

const allHeaders = document.querySelectorAll('li:has(ul)');

allHeaders.forEach((element) => {
  const headerText = element.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = headerText;
  element.firstChild.replaceWith(span);
});

mainList.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const listToExtend = e.target.nextElementSibling;

  listToExtend.classList.toggle('hidden');

  if (listToExtend.classList.contains('hidden')) {
    listToExtend.style.display = 'none';
  } else {
    listToExtend.style.display = 'block';
  }
});
