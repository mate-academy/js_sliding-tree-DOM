'use strict';

// write code here
const li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
  const firstTextNode = li[i].firstChild;
  const newSpan = document.createElement('span');

  newSpan.appendChild(document.createTextNode(firstTextNode.nodeValue));
  newSpan.style.width = 'min-content';

  li[i].replaceChild(newSpan, firstTextNode);
}

for (let i = 0; i < li.length; i++) {
  li[i].children[0].addEventListener('click', (e) => {
    e.stopPropagation();

    if (li[i].children[1].style.display === 'none') {
      li[i].children[1].style.display = 'block';
    } else {
      li[i].children[1].style.display = 'none';
    }
  });
}
