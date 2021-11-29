'use strict';

const ulList = document.querySelectorAll('ul');

for (let i = 0; i < ulList.length; i++) {
  if (ulList[i].parentNode.tagName.toLowerCase() === 'li') {
    ulList[i].parentNode.innerHTML = ulList[i].parentNode.innerHTML.replace(
      /(\w+)\s(\w+)(\n+)|(\w+)(\n+)/gm, '<span class="title">$&</span>'
    );
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (click) => {
  const item = click.target.closest('span');

  if (!item) {
    return;
  }

  if (item.nextElementSibling.getAttribute('hidden') === null) {
    item.nextElementSibling.setAttribute('hidden', true);
  } else {
    item.nextElementSibling.removeAttribute('hidden');
  }
});
