'use strict';

'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('.tree li');

for (const li of listItems) {
  const span = document.createElement('span');

  span.append(li.firstChild);
  li.prepend(span);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenList = e.target.parentNode.querySelector('ul');

  if (childrenList) {
    childrenList.hidden = !childrenList.hidden;
  }
});
