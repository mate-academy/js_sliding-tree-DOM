'use strict';

const lists = [...document.querySelectorAll('ul')];

for (let i = 0; i < lists.length; i++) {
  if (lists[i].className === 'tree') {
    continue;
  }

  const title = lists[i].previousSibling;
  const titleText = lists[i].previousSibling.textContent.trim();

  const newTitle = document.createElement('span');

  newTitle.textContent = titleText;

  lists[i].parentElement.removeChild(title);
  lists[i].parentElement.prepend(newTitle);
}

document.addEventListener('click', (eventOne) => {
  const item = eventOne.target;

  if (item.tagName !== 'SPAN') {
    return;
  }

  item.nextSibling.hidden = !item.nextSibling.hidden;
});
