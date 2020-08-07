'use strict';

const tree = document.querySelector('.tree');

function tagSpan(
  tagWithList = 'li',
  tagForWrap = document.createElement('span')
) {
  const items = tree.querySelectorAll(tagWithList);

  items.forEach((e) => {
    if ((e.childNodes[0].nodeType === 3 || e.childNodes[0].nodeName === '#text')
     && e.childNodes.length > 1) {
      const spanTag = document.createElement('span');

      spanTag.append(e.childNodes[0]);
      e.prepend(spanTag);

      spanTag.innerHTML = spanTag.innerText;
      spanTag.style.cursor = 'pointer';
    }
  });

  tree.addEventListener('click', (ev) => {
    if (ev.target.tagName.toLowerCase() !== 'span') {
      return;
    }

    if (ev.target.matches('span')) {
      if (ev.target.parentNode.querySelector('ul').hidden === false) {
        ev.target.parentNode.querySelector('ul').hidden = true;
      } else {
        ev.target.parentNode.querySelector('ul').hidden = false;
      }
    }
  });
}

tagSpan();
