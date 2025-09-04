'use strict';

// Wrap each header text in <span> dynamically
const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  // Collect nodes before the first <ul>
  const children = Array.from(li.childNodes);
  const firstUlIndex = children.findIndex((n) => n.tagName === 'UL');

  // Take all nodes up to the first <ul> (or all if no <ul>)
  const headerNodes =
    firstUlIndex === -1 ? children : children.slice(0, firstUlIndex);

  // Skip if already wrapped in a <span>
  if (headerNodes.length === 1 && headerNodes[0].tagName === 'SPAN') return;

  // Create span and move header nodes into it
  const span = document.createElement('span');

  headerNodes.forEach((node) => span.appendChild(node));
  li.insertBefore(span, li.firstChild);
});

// Toggle open/closed only when span (title text) is clicked
document.addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'SPAN') {
    return;
  }

  const li = ev.target.closest('li');

  if (!li) {
    return;
  }

  li.classList.toggle('open');
});
