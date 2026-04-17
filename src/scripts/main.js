'use strict';

// 1. Вибираємо всі <li>. Це надійніше за :has(ul), бо старі браузери
// та деякі тестові середовища можуть не підтримувати нові селектори.
const allLis = document.querySelectorAll('li');

allLis.forEach(element => {
  // 2. Шукаємо вкладений список <ul>, який є ПРЯМИМ нащадком цього <li>.
  // Використовуємо :scope,
  // щоб випадково не знайти список десь глибоко всередині.
  const childUl = element.querySelector(':scope > ul');

  // Якщо вкладеного списку немає — пропускаємо цей пункт меню
  if (!childUl) {
    return;
  }

  // 3. Шукаємо вузол з текстом. В DOM навіть пробіл між тегами — це вузол.
  // Ми перебираємо всі дочірні вузли (childNodes), поки не знайдемо текст.
  let textNode = null;

  for (const node of element.childNodes) {
    // nodeType === 3 означає, що це текстовий вузол.
    // trim() видаляє пробіли, щоб ми не обгорнули порожнечу.
    if (node.nodeType === 3 && node.textContent.trim() !== '') {
      textNode = node;
      break; // Знайшли заголовок — виходимо з циклу
    }
  }

  // 4. Якщо текст знайдено, створюємо <span> і переміщуємо текст туди.
  if (textNode) {
    const span = document.createElement('span');

    span.style.cursor = 'pointer'; // Робимо текст візуально клікабельним 👆

    // append() буквально виймає текст із LI і кладе його всередину SPAN.
    span.append(textNode);
    // prepend() ставить SPAN на самий початок LI (перед вкладеним списком).
    element.prepend(span);

    // 5. Додаємо подію кліку саме на обгортку (span).
    span.addEventListener('click', () => {
      // ! (оператор НЕ) перемикає стан: якщо було true, стане false.
      childUl.hidden = !childUl.hidden;
    });
  }
});
