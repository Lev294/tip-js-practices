// Общий контрольный набор. Для своего варианта ниже предусмотрен отдельный массив.
// Идентификатор задачи не совпадает с её индексом в массиве.
export const demoTasks = [
  { id: 1, title: "Изучить функции", completed: true, priority: "medium" },
  { id: 4, title: "Подготовить модель задач", completed: false, priority: "high" },
  { id: 7, title: "Проверить методы массивов", completed: false, priority: "low" },
  { id: 10, title: "Оформить README", completed: true, priority: "medium" },
];

// Вариант 7: подготовка учебного релиза, все шесть исходных задач выполнены.
export const variantNumber = 7;
export const variantTasks = [
  { id: 11, title: "Проверить функции перед релизом", completed: true, priority: "high" },
  { id: 23, title: "Подготовить описание изменений", completed: true, priority: "medium" },
  { id: 37, title: "Проверить названия файлов", completed: true, priority: "low" },
  { id: 41, title: "Запустить контрольные сценарии", completed: true, priority: "high" },
  { id: 58, title: "Обновить инструкцию запуска", completed: true, priority: "medium" },
  { id: 64, title: "Проверить ссылки в отчёте", completed: true, priority: "low" },
];
