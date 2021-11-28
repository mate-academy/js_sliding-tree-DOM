'use strict';

const ulList = document.querySelectorAll('ul');

for (let i = 0; i < ulList.length; i++) {
  if (ulList[i].parentNode.tagName.toLowerCase() === 'li') {
    ulList[i].parentNode.innerHTML = ulList[i].parentNode.innerHTML.replace(
      /(\w+)\s(\w+)(\n+)|(\w+)(\n+)/gm, '<span class="title">$&</span>'
    );
  }
}

document.body.addEventListener('click', (click) => {
  const item = click.target.closest('.title');

  if (!item) {
    return;
  }

  if (item.nextElementSibling.getAttribute('hidden') === null
    || item.nextElementSibling.getAttribute('hidden') === true) {
    item.nextElementSibling.setAttribute('hidden', true);
  } else {
    item.nextElementSibling.removeAttribute('hidden');
  }
});
