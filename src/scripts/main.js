'use strict';

const li = document.querySelectorAll('li');

function addSpan([...elements]) {
  elements.forEach(item => {
    const listItem = item.querySelector('ul');

    if (item.children.length > 0) {
      const textHead = item.firstChild.textContent.trim();
      const span = document.createElement('span');

      span.innerText = `${textHead}`;
      item.firstChild.textContent = '';
      item.prepend(span);

      span.addEventListener('click', (e) => {
        listItem.hidden = listItem.hidden = !listItem.hidden;
      });
    }
  });
}

addSpan(li);
