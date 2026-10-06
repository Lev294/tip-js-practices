import assert from "node:assert/strict";
import { demoTasks } from "./src/data.js";
import { addTask, removeTask, setTaskCompleted, renameTask, getTaskStats } from "./src/task-service.js";

const source = Object.freeze(demoTasks.map((task) => Object.freeze({ ...task })));
const before = JSON.stringify(source);

// Удалённый id можно использовать снова; новая запись добавляется в конец.
const removed = removeTask(source, 4);
assert.equal(removed.ok, true);
const restored = addTask(removed.tasks, 4, "Новая задача на месте удалённой", "low");
assert.equal(restored.ok, true);
assert.deepEqual(restored.tasks.map((task) => task.id), [1, 7, 10, 4]);
assert.equal(restored.tasks.at(-1).completed, false);
assert.equal(JSON.stringify(source), before);
console.log("OK: удаление и повторное добавление id 4 — порядок [1,7,10,4], исходный список сохранён");

// Обновления первого и последнего элементов не портят предыдущие состояния.
const first = setTaskCompleted(source, 1, false);
assert.equal(first.ok, true);
const last = renameTask(first.tasks, 10, "  Проверить первый и последний элементы  ");
assert.equal(last.ok, true);
assert.equal(last.tasks[0].completed, false);
assert.equal(last.tasks.at(-1).title, "Проверить первый и последний элементы");
assert.equal(first.tasks.at(-1).title, "Оформить README");
assert.notEqual(last.tasks.at(-1), first.tasks.at(-1));
assert.equal(JSON.stringify(source), before);
console.log("OK: изменение первого и последнего элементов — предыдущие версии сохранены");

// Последовательность действий даёт сводку, а поздняя ошибка её не меняет.
const completed = setTaskCompleted(source, 7, true);
const withoutFirst = removeTask(completed.tasks, 1);
const added = addTask(withoutFirst.tasks, 99, "Проверить последовательность", "high");
const renamed = renameTask(added.tasks, 99, "  Готовая последовательность  ");
assert.equal(renamed.ok, true);
assert.deepEqual(getTaskStats(renamed.tasks), { total: 4, completed: 2, pending: 2, progress: 50 });
const saved = JSON.stringify(renamed.tasks);
assert.equal(addTask(renamed.tasks, 99, "Дубликат").ok, false);
assert.equal(JSON.stringify(renamed.tasks), saved);
assert.equal(JSON.stringify(source), before);
console.log("OK: выполнение, удаление, добавление, переименование и отказ — сводка 4/2/2/50%, данные сохранены");
console.log("Собственных проверок: 3. Пройдено: 3. Ошибок: 0.");
