"use strict";

const totalTasks = 10;
const completedTasks = 7;

if (
  typeof totalTasks !== "number" ||
  typeof completedTasks !== "number" ||
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks) ||
  totalTasks < 0 ||
  totalTasks > 1000 ||
  completedTasks < 0 ||
  completedTasks > totalTasks
) {
  console.log("Ошибка: количество задач должно быть целым числом от 0 до 1000, а выполненных задач не может быть больше общего количества.");
} else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет.");
} else {
  const remainingTasks = totalTasks - completedTasks;
  const progressPercent = (completedTasks / totalTasks) * 100;
  let status;

  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log("--- Прогресс выполнения задач ---");
  console.log("Всего задач:", totalTasks);
  console.log("Выполнено:", completedTasks);
  console.log("Осталось:", remainingTasks);
  console.log("Прогресс:", `${progressPercent.toFixed(1)}%`);
  console.log("Статус:", status);
}
