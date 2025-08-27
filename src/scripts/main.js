'use strict';

const liList = document.querySelectorAll('.tree li');

liList.forEach((li) => {
  if (li.children.length > 0) {
    const textNode = li.childNodes[0];
    const spanTag = document.createElement('span');

    spanTag.appendChild(textNode);
    li.insertBefore(spanTag, li.firstChild);

    spanTag.addEventListener('click', (events) => {
      const clickedNode = events.target;

      if (clickedNode.tagName !== 'SPAN') {
        return;
      }

      const liParent = clickedNode.parentElement;
      const ul2 = liParent.querySelector(':scope > ul');

      if (!ul2) {
        return;
      }
      ul2.hidden = !ul2.hidden;
    });
  }
});
