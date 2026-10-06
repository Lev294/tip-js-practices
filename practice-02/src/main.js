import { demoTasks, variantNumber, variantTasks } from "./data.js";
import {
  getPendingTasks,
  getTaskTitles,
  getTaskStats,
  addTask,
  setTaskCompleted,
  renameTask,
  removeTask,
} from "./task-service.js";

function printState(label, tasks) {
  const { total, completed, pending, progress } = getTaskStats(tasks);
  console.log(`${label}: всего ${total}; выполнено ${completed}; осталось ${pending}`);
  console.log(total === 0 ? "Задач пока нет" : `Прогресс: ${progress.toFixed(1)}%`);
  console.log("Id:", JSON.stringify(tasks.map((task) => task.id)));
}

function applyResult(tasks, result, label) {
  if (!result.ok) {
    console.log(`Ошибка: ${result.error}`);
    printState("После отказа", tasks);
    return tasks;
  }
  printState(label, result.tasks);
  return result.tasks;
}

console.log("Общий сценарий");
const demoBefore = JSON.stringify(demoTasks);
let currentTasks = demoTasks;
console.table(currentTasks);
console.log("Названия:", getTaskTitles(currentTasks));
console.log("Невыполненные задачи:", getPendingTasks(currentTasks));
printState("Исходный набор", currentTasks);
currentTasks = applyResult(currentTasks, addTask(currentTasks, 20, "Добавить проверку", "high"), "Добавление 20");
currentTasks = applyResult(currentTasks, setTaskCompleted(currentTasks, 4, true), "Выполнение 4");
currentTasks = applyResult(currentTasks, renameTask(currentTasks, 10, "Подготовить инструкцию запуска"), "Переименование 10");
currentTasks = applyResult(currentTasks, removeTask(currentTasks, 7), "Удаление 7");
const beforeDemoError = currentTasks;
currentTasks = applyResult(currentTasks, addTask(currentTasks, 20, "Повторная задача", "high"), "Повторное добавление 20");
console.log("Состояние после отказа сохранено:", currentTasks === beforeDemoError);
console.table(currentTasks);
console.log("Остались невыполненными:", getPendingTasks(currentTasks).map((task) => task.id));
console.log("demoTasks не изменён:", JSON.stringify(demoTasks) === demoBefore);

console.log(`\nВариант ${variantNumber}: подготовка учебного релиза`);
const variantBefore = JSON.stringify(variantTasks);
let variantCurrent = variantTasks;
console.table(variantCurrent);
printState("Исходный вариант", variantCurrent);
variantCurrent = applyResult(variantCurrent, addTask(variantCurrent, 80, "Опубликовать учебный релиз", "high"), "Добавление 80");
variantCurrent = applyResult(variantCurrent, setTaskCompleted(variantCurrent, 11, true), "Выполнение 11");
variantCurrent = applyResult(variantCurrent, renameTask(variantCurrent, 23, "Проверить описание учебного релиза"), "Переименование 23");
variantCurrent = applyResult(variantCurrent, removeTask(variantCurrent, 37), "Удаление 37");
const beforeVariantError = variantCurrent;
variantCurrent = applyResult(variantCurrent, addTask(variantCurrent, 80, "Дубликат релиза", "high"), "Повторное добавление 80");
console.log("Состояние после отказа сохранено:", variantCurrent === beforeVariantError);
console.table(variantCurrent);
printState("Итог варианта", variantCurrent);
console.log("variantTasks не изменён:", JSON.stringify(variantTasks) === variantBefore);
