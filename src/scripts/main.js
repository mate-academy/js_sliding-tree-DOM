'use strict';

const tree = document.querySelector('.tree');
const title = document.querySelectorAll('li');

for (let i = 0; i < [...title].length; i++) {
  if (title[i].children.length !== 0) {
    const span = document.createElement('span');
    // span.style.display = 'block';
    const spanText = title[i].childNodes[0];

    title[i].prepend(span);
    span.append(spanText);
  }
}

tree.addEventListener('click', (e) => {
  const item = e.target;

  if (item.tagName === 'LI') {
    return;
  }

  item.nextSibling.style.display
    = (item.nextSibling.style.display !== 'none')
      ? 'none'
      : 'block';
});
