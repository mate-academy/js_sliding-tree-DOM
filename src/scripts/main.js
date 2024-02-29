'use strict';

// write code here
function toggleListener(ev) {
  const target = ev.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const ul = target.nextSibling;
  const ulDisplay = ul.style.display;

  ul.style.display = ulDisplay === 'none' ? null : 'none';
}

function wrapUlTitleInSpan(rootElement) {
  rootElement.querySelectorAll('ul').forEach((el) => {
    const previous = el.previousSibling;
    const span = document.createElement('SPAN');

    span.append(previous);
    el.before(span);
  });
}

const tree = document.querySelector('.tree');

wrapUlTitleInSpan(tree);
tree.addEventListener('click', toggleListener);
