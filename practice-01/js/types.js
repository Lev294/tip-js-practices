"use strict";

console.log("1. Прогноз: значение \"82\", тип string.");
const res1 = "8" + 2;
console.log("Результат:", res1);
console.log("Тип результата:", typeof res1);

console.log("2. Прогноз: значение 6, тип number.");
const res2 = "8" - 2;
console.log("Результат:", res2);
console.log("Тип результата:", typeof res2);

console.log("3. Прогноз: значение 10, тип number.");
const res3 = Number("8") + 2;
console.log("Результат:", res3);
console.log("Тип результата:", typeof res3);

console.log("4. Прогноз: значение false, тип boolean.");
const res4 = "12" > "3";
console.log("Результат:", res4);
console.log("Тип результата:", typeof res4);

console.log("5. Прогноз: значение false, тип boolean.");
const res5 = 12 === "12";
console.log("Результат:", res5);
console.log("Тип результата:", typeof res5);

console.log("6. Прогноз: значение 0, тип number.");
const res6 = Number("");
console.log("Результат:", res6);
console.log("Тип результата:", typeof res6);

console.log("7. Прогноз: значение NaN, тип number.");
const res7 = Number("text");
console.log("Результат:", res7);
console.log("Тип результата:", typeof res7);

console.log("8. Прогноз: значение true, тип boolean.");
const res8 = Boolean("false");
console.log("Результат:", res8);
console.log("Тип результата:", typeof res8);

console.log("9. Прогноз: значение object, тип результата string.");
const res9 = typeof null;
console.log("Значение выражения typeof null:", res9);
console.log("Тип результата выражения:", typeof res9);

console.log("10. Прогноз: значение number, тип результата string.");
const res10 = typeof NaN;
console.log("Значение выражения typeof NaN:", res10);
console.log("Тип результата выражения:", typeof res10);
