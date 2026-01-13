document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');
  if (!tree) return;

  tree.querySelectorAll('li').forEach(li => {
    const text = li.firstChild;
    if (text.nodeType === 3) {
      const span = document.createElement('span');
      span.textContent = text.textContent.trim();
      li.prepend(span);
      text.remove();
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') return;

    const li = e.target.parentElement;
    const children = li.querySelector('ul');

    if (!children) return;

    children.hidden = !children.hidden;
  });
});
