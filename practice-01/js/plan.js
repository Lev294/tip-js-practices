"use strict";

const totalTasks = 10;
const completedTasks = 7;
const dailyLimit = 3;

if (
  typeof totalTasks !== "number" ||
  typeof completedTasks !== "number" ||
  typeof dailyLimit !== "number" ||
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks) ||
  !Number.isInteger(dailyLimit) ||
  totalTasks < 0 ||
  totalTasks > 1000 ||
  completedTasks < 0 ||
  completedTasks > totalTasks ||
  dailyLimit < 1 ||
  dailyLimit > 1000
) {
  console.log("Ошибка: проверьте целые значения общего количества, выполненных задач и дневного лимита.");
} else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет.");
  console.log("Потребуется дней: 0");
} else {
  let remainingTasks = totalTasks - completedTasks;
  let dayNumber = 0;

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены.");
    console.log("Потребуется дней: 0");
  } else {
    console.log("--- План выполнения оставшихся задач ---");
    console.log("Осталось задач:", remainingTasks);

    while (remainingTasks > 0) {
      dayNumber += 1;
      const tasksForDay = Math.min(dailyLimit, remainingTasks);
      remainingTasks -= tasksForDay;
      console.log(`День ${dayNumber}: выполнено ${tasksForDay}, осталось ${remainingTasks}`);
    }

    console.log("Потребуется дней:", dayNumber);
  }
}
