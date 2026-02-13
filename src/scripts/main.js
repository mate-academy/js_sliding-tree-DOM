'use strict';

const tree = document.querySelector('.tree');

if (!tree) {
} else {
    tree.querySelectorAll('li').forEach(li => {
    const firstNode = li.firstChild;
    if (firstNode && firstNode.nodeType === Node.TEXT_NODE && firstNode.textContent.trim() !== '') {
        const span = document.createElement('span');
        span.textContent = firstNode.textContent.trim();
        firstNode.textContent = '';
        li.insertBefore(span, firstNode);
    }
    });

    tree.addEventListener('click', evt => {
    const span = evt.target.closest('span');
    if (!span || !tree.contains(span)) return;

    const li = span.parentElement;
    if (!li) return;

    const subtree = li.querySelector(':scope > ul');
    if (!subtree) return;

    subtree.style.display = subtree.style.display === 'none' ? '' : 'none';
    });
}