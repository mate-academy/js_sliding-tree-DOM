'use strict';

const activeBranch = document.querySelectorAll('li ul');

activeBranch.forEach(element => {
  const listHead = document.createElement('span');

  listHead.innerHTML = element.previousSibling.textContent.trim();
  element.previousSibling.replaceWith(listHead);

  listHead.onclick = () => {
    listHead.nextElementSibling.hidden = !listHead.nextElementSibling.hidden;
  };
});
