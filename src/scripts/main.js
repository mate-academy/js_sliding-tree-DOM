'use strict';

// write code here
const treeHeaders = document.querySelectorAll('.tree li');

treeHeaders.forEach((header) => {
  const headerText = document.createElement('span');

  headerText.innerHTML = header.firstChild.textContent;
  headerText.style.cursor = 'pointer';
  header.insertBefore(headerText, header.firstChild);
  header.firstChild.nextSibling.remove();

  headerText.addEventListener('click', () => {
    const childUl = header.querySelector('ul');

    childUl.hidden = !childUl.hidden;
  });
});
