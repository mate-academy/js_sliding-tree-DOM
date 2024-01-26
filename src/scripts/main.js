'use strict';

const headers = document.querySelectorAll('li>ul>li');
const topHeaders = document.querySelectorAll('ul>li');

function spanWrap(input) {
  const text = input.innerHTML;
  let newText = '<span>';
  let count = 0;

  for (const ch of text) {
    if (ch !== '<') {
      newText += ch;
      count++;
    }

    if (ch === '<') {
      newText += '</span>';
      newText += text.slice(count);
      break;
    }
  }
  input.innerHTML = newText;
}

headers.forEach(element => {
  spanWrap(element);
});

topHeaders.forEach(element => {
  spanWrap(element);
});

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.parentElement.lastElementChild.hidden
      = !e.target.parentElement.lastElementChild.hidden;
  }
});
