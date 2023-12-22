'use strict';

// write code here
const lis = document.getElementsByTagName('li');

[...lis].forEach((li) => {
  if (li.children.length > 0) {
    const spanElement = document.createElement('span');
    const text = li.firstChild;

    li.prepend(spanElement);
    spanElement.append(text);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  hideTree(e.target.nextSibling);
});

function hideTree(tag) {
  tag.hidden = !tag.hidden;
}
