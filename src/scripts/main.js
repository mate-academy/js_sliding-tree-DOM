'use strict';

const topics = document.querySelector('.tree');

function getWrapInSpan(list) {
  for (const listItem of [...list.children]) {
    const span = document.createElement('span');
    const itemName = listItem.childNodes[0].textContent.trim();

    span.innerText = itemName;
    listItem.replaceChild(span, listItem.childNodes[0]);

    if ([...listItem.children][1]) {
      getWrapInSpan(listItem.children[1]);
    }
  }
}

getWrapInSpan(topics);

document.body.addEventListener('click', e => {
  const item = e.target.closest('span');

  if (!item || !topics.contains(item)) {
    return;
  }

  if (e.target.parentElement.children[1]) {
    if (e.target.parentElement.children[1].hidden) {
      e.target.parentElement.children[1].hidden = false;
    } else {
      e.target.parentElement.children[1].hidden = true;
    }
  }
});
