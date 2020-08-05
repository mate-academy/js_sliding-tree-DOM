'use strict';

const tree = document.querySelector('.tree');

function tagB(
  tagWithList = 'li',
  tagForWrap = document.createElement('b')
) {
  const items = tree.querySelectorAll(tagWithList);

  items.forEach((e) => {
    if ((e.childNodes[0].nodeType === 3 || e.childNodes[0].nodeName === '#text')
     && e.childNodes.length > 1) {
      const bTag = document.createElement('b');

      bTag.append(e.childNodes[0]);
      e.prepend(bTag);

      bTag.innerHTML = bTag.innerText;
      bTag.style.cursor = 'pointer';
    }
  });

  tree.addEventListener('click', (ev) => {
    if (ev.target.tagName.toLowerCase() !== 'b') {
      return;
    }

    if (ev.target.matches('b')) {
      if (ev.target.parentNode.querySelector('ul').hidden === false) {
        ev.target.parentNode.querySelector('ul').hidden = true;
      } else {
        ev.target.parentNode.querySelector('ul').hidden = false;
      }
    }
  });
}

tagB();
