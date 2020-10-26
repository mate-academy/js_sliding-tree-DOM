'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');
const headlines = [...li].filter((item) => {
  if (item.firstElementChild) {
    return item.firstElementChild.nodeName === 'UL';
  }
});

headlines.forEach((item) => {
  const headlineText = item.firstChild.textContent;
  const span = document.createElement('span');

  item.firstChild.remove();
  span.innerText = headlineText;
  span.className = 'headline';
  item.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.className === 'headline') {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
