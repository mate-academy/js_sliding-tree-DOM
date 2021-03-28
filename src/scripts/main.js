'use strict';

const activeBranch = document.querySelectorAll('li ul');

activeBranch.forEach(element => {
  const listTitle = document.createElement('span');

  listTitle.textContent = element.previousSibling.textContent.trim();
  element.previousSibling.replaceWith(listTitle);

  listTitle.addEventListener('click', function() {
    listTitle.nextElementSibling.hidden = !listTitle.nextElementSibling.hidden;
  });
});
