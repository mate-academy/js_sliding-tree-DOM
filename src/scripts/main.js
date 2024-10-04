'use strict';

const tree = document.querySelector('.tree');
const firstUls = tree.querySelectorAll('ul');

firstUls.forEach((ul) => {
  const span = document.createElement('span');

  span.innerHTML = `${ul.previousSibling.textContent}`;

  ul.previousSibling.replaceWith(span);

  ul.previousSibling.onclick = (e) => {
    if (e.target === span) {
      ul.hidden = !ul.hidden;
    }
  };
});
