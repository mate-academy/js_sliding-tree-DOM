'use strict';

// write code here
(function() {
  "use strict";

  function wrapHeadings() {
    const allLi = document.querySelectorAll('.tree li');
    allLi.forEach(li => {
      const childUl = li.querySelector(':scope > ul');
      if (!childUl) return;
      const firstChild = li.childNodes[0];
      if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
        const text = firstChild.textContent.trim();
        if (text.length > 0) {
          const span = document.createElement('span');
          span.textContent = text;
          li.replaceChild(span, firstChild);
        }
      }
    });
  }

  wrapHeadings();

  document.querySelectorAll('.tree li > ul').forEach(ul => {
    ul.style.display = 'none';
    ul.classList.remove('open');
  });
  document.querySelectorAll('.tree li > span').forEach(span => {
    span.classList.remove('open-indicator');
  });

  function handleTreeClick(e) {
    const target = e.target;
    if (target.tagName !== 'SPAN') return;
    const parentLi = target.parentElement;
    if (!parentLi || parentLi.tagName !== 'LI') return;
    const headingSpan = parentLi.querySelector(':scope > span');
    if (headingSpan !== target) return;
    const childUl = parentLi.querySelector(':scope > ul');
    if (!childUl) return;

    if (childUl.style.display === 'none' || childUl.style.display === '') {
      childUl.style.display = 'block';
      childUl.classList.add('open');
      headingSpan.classList.add('open-indicator');
    } else {
      childUl.style.display = 'none';
      childUl.classList.remove('open');
      headingSpan.classList.remove('open-indicator');
    }
  }

  const treeRoot = document.getElementById('treeRoot');
  if (treeRoot) {
    treeRoot.addEventListener('click', handleTreeClick);
  }
})();
