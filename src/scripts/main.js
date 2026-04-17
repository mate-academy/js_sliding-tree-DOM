'use strict';

// 1. Використовуємо CSS-селектор :has(ul),
// щоб знайти в дереві тільки ті пункти (li),
// які є "батьками" для інших списків. Це дозволяє нам не чіпати звичайні li.
const liWithChildren = document.querySelectorAll('li:has(ul)');

// Запускаємо цикл, щоб обробити кожен знайдений li окремо.
liWithChildren.forEach(element => {

  // 2. Створюємо новий порожній елемент <span>.
  // Він потрібен нам як "контейнер"
  // для тексту заголовка, щоб ми могли клікати саме на текст,
  // а не на весь рядок.
  const span = document.createElement('span');

  // 3. Знаходимо перший дочірній вузол у li.
  // У нас це Text Node (просто текст категорії).
  const textNode = element.firstChild;

  // 4. Переносимо текст всередину span.
  // append "вирізає" текст з li і "вставляє" його в span.
  span.append(textNode);

  // 5. Тепер вставляємо вже наповнений текстом span назад у li,
  // але на самий початок (перед <ul>).
  element.prepend(span);

  // 6. Змінюємо стиль курсору для span.
  // підказує що текст тепер працює як кнопка.
  span.style.cursor = 'pointer';

  // 7. Додаємо слухач подій.
  // Коли користувач клікне на span, спрацює функція нижче.
  span.addEventListener('click', () => {
    // 8. Шукаємо вкладений список <ul> саме всередині поточного li (element).
    const childUl = element.querySelector('ul');

    // 9. Якщо список знайдено,
    // ми інвертуємо його стан hidden (було true — стане false, і навпаки).
    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
