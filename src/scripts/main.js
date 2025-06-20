const ul = document.querySelector('.tree');

[...ul.querySelectorAll('li')].forEach((li) => {
  const textNodes = [...li.childNodes].filter(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  if (textNodes.length > 0) {
    const span = document.createElement('span');

    span.textContent = textNodes
      .map((node) => node.textContent.trim())
      .join(' ');

    textNodes.forEach((node) => li.removeChild(node));

    li.insertBefore(span, li.firstChild);
  }
});

ul.addEventListener('click', (e) => {
  const liTarget = e.target.closest('li');

  if (!liTarget || e.target.tagName !== 'SPAN') {
    return;
  }

  const ulTarget = liTarget.querySelector('ul');

  if (!ulTarget) {
    return;
  }

  const computedDisplay = getComputedStyle(ulTarget).display;

  ulTarget.style.display = computedDisplay === 'none' ? 'block' : 'none';
});
