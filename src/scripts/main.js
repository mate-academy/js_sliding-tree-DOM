'use strict';

document.querySelectorAll('.tree li').forEach(function (li) {
  const firstTextNode = li.firstChild;
  const span = document.createElement('span');

  span.textContent = firstTextNode.textContent.trim();

  li.replaceChild(span, firstTextNode);

  span.addEventListener('click', function () {
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
    }
  });
});
