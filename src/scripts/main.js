'use strict';

const list = document.querySelector('.tree');

const spanIn = (node) => {
  const liArr = node.querySelectorAll('li');

  for (let i = 0; i < liArr.length; i++) {
    const span = document.createElement('span');

    liArr[i].prepend(span);
    span.append(span.nextSibling);

    if (liArr[i].children.length > 0) {
      spanIn(liArr[i].firstChild);
    } else {
      const text = liArr[i].innerText;

      liArr[i].innerText = null;

      liArr[i].insertAdjacentHTML('beforeend', `
  <span>${text}</span>
  `);
    }
  }
};

spanIn(list);

list.addEventListener('click', e => {
  const item = e.target;

  if (item.tagName !== 'SPAN') {
    return;
  }
  item.nextSibling.hidden = !item.nextSibling.hidden;
});
