'use strict';

const list = document.querySelector('.tree');

const itemList = list.querySelectorAll('li');

for (const li of itemList) {
  if (li.children.length > 0) {
    const head = li.firstChild.textContent;

    const span = document.createElement('span');

    span.textContent = head;
    li.firstChild.remove();

    li.prepend(span);
  };
};

list.addEventListener('click', (push) => {
  const item = push.target.tagName;

  if (item !== 'SPAN') {
    return;
  };

  const ul = push.target.parentNode.querySelector('ul');

  ul.hidden = !ul.hidden;
});
