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
  const currList = e.target.parentElement.children[1];

  if (!item || !topics.contains(item)) {
    return;
  }

  if (currList) {
    currList.hidden = !currList.hidden;
  }
});
