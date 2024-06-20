'use strict';

function toggleListVisibility(e) {
  const list = e.target.nextSibling;

  if (list.style.display === 'none') {
    list.style.display = 'block';

    return;
  }

  list.style.display = 'none';
}

function wrapListHeaderText(list) {
  const headerTextElement = document.createElement('span');

  headerTextElement.addEventListener('click', toggleListVisibility);

  const textElement = list.previousSibling;
  const title = textElement.textContent;

  headerTextElement.textContent = title;

  textElement.remove();
  list.parentNode.prepend(headerTextElement);
}

const rootList = document.querySelector('.tree');
const lists = rootList.querySelectorAll('ul');

lists.forEach((list) => {
  wrapListHeaderText(list);
});
