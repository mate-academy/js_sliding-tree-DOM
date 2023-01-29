'use strict';

// write code here
const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

const tree = document.querySelector('.tree');

tree.onclick = function(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const headline = e.target.parentNode.querySelector('ul');

  if (!headline) {
    return;
  }
  headline.hidden = !headline.hidden;
};
