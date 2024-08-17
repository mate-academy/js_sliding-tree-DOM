'use strict';

const treeHeaders = document.querySelectorAll('.tree li');

treeHeaders.forEach((header) => {
  const headerText = document.createElement('span');

  headerText.innerHTML = header.firstChild.textContent;
  header.insertBefore(headerText, header.firstChild);
  header.firstChild.nextSibling.remove();

  headerText.addEventListener('click', () => {
    const ul = header.querySelector('ul');

    ul.hidden = !ul.hidden;
  });
});
