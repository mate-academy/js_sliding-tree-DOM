'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

for (const li of headers) {
  const span = document.createElement('span');

  span.className = 'spanText';
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', () => {
  const header = event.target.closest('.spanText');
  const headerContent = event.target.closest('li').children[1];

  if (!header || !headerContent || !tree.contains(header)) {
    return;
  }

  headerContent.hidden = !headerContent.hidden;
});
