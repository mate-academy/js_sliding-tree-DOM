'use strict';

// write code here
const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  // Знаходимо безпосередній дочірній <ul> — тільки пряме піддерево
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  } // якщо вкладеного списку немає — пропускаємо

  // ===== ВИЯВЛЕННЯ ЗАГОЛОВКА =====
  let headerNode = null;

  // спочатку шукаємо непорожній текстовий вузол
  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
      headerNode = node;
      break;
    }
  }

  // якщо не знайдено текстового — шукаємо перший елемент, який не є <ul>
  if (!headerNode) {
    const candidate = Array.from(li.children).find(
      (el) => el.tagName.toLowerCase() !== 'ul',
    );

    if (candidate) {
      headerNode = candidate;
    }
  }

  // якщо заголовка взагалі не знайдено — виходимо
  if (!headerNode) {
    return;
  }

  // ===== ОБГОРТАННЯ У SPAN =====
  const span = document.createElement('span');

  span.tabIndex = 0;
  span.style.cursor = 'pointer';

  if (headerNode.nodeType === Node.TEXT_NODE) {
    // Якщо це текстовий вузол
    span.textContent = headerNode.nodeValue.trim();
    li.replaceChild(span, headerNode);
  } else {
    // Якщо це елемент (наприклад, <a> або <strong>)
    const element = headerNode;

    li.replaceChild(span, element); // замінюємо елемент на span
    span.appendChild(element); // додаємо елемент всередину span
  }

  // ===== ПОВЕДІНКА =====
  // Початково приховуємо вкладений список
  childUl.style.display = 'none';

  const toggleSubtree = () => {
    const isHidden = childUl.style.display === 'none';

    childUl.style.display = isHidden ? 'block' : 'none';
  };

  // Клік — перемикання
  span.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSubtree();
  });

  // Клавіатура — Enter / Пробіл
  span.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      toggleSubtree();
    }
  });
});
