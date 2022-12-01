'use strict';

const tree = document.querySelector('.tree');

function listItems(collection) {
  for (const item of collection) {
    if (item.nodeName === 'LI') {
      if (item.children.length > 0) {
        item.innerHTML = editInnerHtml(item.innerHTML);
      }

      if (Object.values(item.children).length === 2) {
        item.addEventListener('click', (e) => {
          e.stopPropagation();

          const currentElement = e.target.parentElement.lastElementChild;
          const getElStyles = getComputedStyle(currentElement);
          const currentDisplayStyel = getElStyles.getPropertyValue('display');

          if (e.currentTarget === e.target.parentElement) {
            if (currentDisplayStyel === 'none') {
              e.target.parentElement.lastElementChild.style.display = 'block';
            } else {
              e.target.parentElement.lastElementChild.style.display = 'none';
            }
          }
        });
      }
    }
    listItems(item.children);
  }
}

listItems(tree.children);

function editInnerHtml(code) {
  const index = code.indexOf('<') > 0 ? code.indexOf('<') : code.length;
  const title = code.slice(0, index).trim();
  const restOfHtml = code.slice(index);

  return `<span>${title}</span>${restOfHtml}`;
}
