'use strict';

const tree = document.querySelector('.tree');

const listItems = tree.querySelectorAll('li');

for (const item of listItems) {
  const textNote = [...item.childNodes].find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  if (textNote) {
    const span = document.createElement('span');

    span.textContent = textNote.textContent.trim();
    item.insertBefore(span, textNote);
    item.removeChild(textNote);
  }

  tree.addEventListener('click', (eve) => {
    if (eve.target.tagName !== 'SPAN') {
      return;
    }

    const li = eve.target.closest('li');
    const nestedList = li.querySelector('ul');

    if (nestedList) {
      nestedList.hidden = !nestedList.hidden;
    }
  });
}
