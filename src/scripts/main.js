'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  const liWithChildren = Array.from(tree.querySelectorAll('li')).filter(
    (li) => {
      return li.querySelector(':scope > ul');
    },
  );

  liWithChildren.forEach((li) => {
    const childUl = li.querySelector(':scope > ul');

    if (!childUl) {
      return;
    }

    let headerSpan = li.querySelector(':scope > .tree-label');

    if (!headerSpan) {
      const textNode = Array.from(li.childNodes).find(
        (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '',
      );

      if (textNode) {
        headerSpan = document.createElement('span');
        headerSpan.className = 'tree-label';
        headerSpan.textContent = textNode.textContent.trim();
        li.replaceChild(headerSpan, textNode);
      } else {
        headerSpan = document.createElement('span');
        headerSpan.className = 'tree-label';
        headerSpan.textContent = '';
        li.insertBefore(headerSpan, childUl);
      }
    }

    headerSpan.style.cursor = 'pointer';
    headerSpan.style.userSelect = 'none';

    childUl.style.overflow = 'hidden';
    childUl.style.transition = 'max-height 260ms ease, opacity 260ms ease';
    childUl.style.maxHeight = '0';
    childUl.style.opacity = '0';
    childUl.dataset.open = 'false';

    // --- ВІДКРИТТЯ ---
    function openUl(ul) {
      ul.dataset.open = 'true';
      ul.style.visibility = 'visible';
      ul.style.opacity = '1';
      ul.style.maxHeight = ul.scrollHeight + 'px';

      ul.addEventListener(
        'transitionend',
        (e) => {
          if (e.propertyName === 'max-height' && ul.dataset.open === 'true') {
            ul.style.maxHeight = 'none';
          }
        },
        { once: true },
      );
    }

    function closeUl(ul) {
      ul.dataset.open = 'false';
      ul.style.maxHeight = ul.scrollHeight + 'px';

      requestAnimationFrame(() => {
        ul.style.maxHeight = '0';
        ul.style.opacity = '0';
      });

      setTimeout(() => {
        if (ul.dataset.open === 'false') {
          ul.style.visibility = 'hidden';
        }
      }, 260);
    }

    headerSpan.addEventListener('click', (e) => {
      e.stopPropagation();

      const isOpen = childUl.dataset.open === 'true';

      if (isOpen) {
        closeUl(childUl);
      } else {
        openUl(childUl);
      }
    });

    childUl.style.visibility = 'hidden';
  });
});
