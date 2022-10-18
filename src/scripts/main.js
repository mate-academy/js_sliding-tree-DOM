'use strict';

const itemList = document.querySelector('.tree');

function setSpan(list) {
  for (const item of list) {
    if (item.children.length > 0) {
      const text = item.firstChild.textContent.trim();
      const spanElement = document.createElement('span');

      item.firstChild.textContent = '';
      spanElement.innerText = text;
      item.prepend(spanElement);
    }

    setSpan(item.children)
  }
}
setSpan(itemList.children);

itemList.addEventListener('click', function(e) {
  if (e.target.tagName === 'SPAN') {
    const target = e.target.nextElementSibling;
    target.hidden = target.hidden ? false : true;
  }
})
