'use strict';

const titles = document.querySelectorAll('li:has(ul)');
const arrayOfTitles = [...titles].reverse();

arrayOfTitles.forEach((el) => {
  el.innerHTML = el.innerHTML.trim();

  const { nameOfTitle, newHTML } = cutAndCopy(el.innerHTML);

  el.innerHTML = newHTML;

  const spanTitle = document.createElement('span');

  spanTitle.textContent = nameOfTitle;

  el.prepend(spanTitle);
});

function cutAndCopy(str) {
  const check = /^[a-zA-Z]$/;
  let result = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (check.test(str[i]) || str[i].includes(' ')) {
      result += str[i];
      count++;
    } else {
      break;
    }
  }

  return { nameOfTitle: result, newHTML: str.slice(count) };
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.matches('span')) {
    e.target.nextElementSibling.toggleAttribute('hidden');
  }
});
