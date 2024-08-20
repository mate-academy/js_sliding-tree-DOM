'use strict';

// write code here
const list = document.getElementsByClassName('tree')[0];

const lies = document.getElementsByTagName('li');

[...lies].reverse().forEach((el) => {
  const newLiText = el.innerHTML;

  el.innerHTML = '';

  const spanItem = document.createElement('span');

  const allContent = newLiText
    .split('\n')
    .filter((x) => x)
    .map((l) => l.trim());

  spanItem.innerText = allContent[0];

  el.append(spanItem);
  el.innerHTML += allContent.slice(1).reduce((prev, curr) => prev + curr, '');
});

list.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (span) {
    const current = span.closest('li');

    const subList = current.querySelector('ul');

    if (subList) {
      subList.hidden = !subList.hidden;
    }
  }
});
