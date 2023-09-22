'use strict';

const tree = document.querySelector('.tree');
const branches = tree.querySelectorAll('li');

branches.forEach((branch) => {
  const title = document.createElement('span');
  const prevTitle = branch.firstChild;

  title.textContent = prevTitle.textContent;
  branch.replaceChild(title, prevTitle);
});

tree.addEventListener('click', (e) => {
  const parentElement = e.target.parentElement;

  if (parentElement.tagName === 'LI') {
    const nestedList = parentElement.querySelector('ul');

    if (nestedList) {
      nestedList.style.display
        = nestedList.style.display === 'none' ? '' : 'none';
    }
  }
});
