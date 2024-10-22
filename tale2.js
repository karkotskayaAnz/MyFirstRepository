
export const newYear = (personazh) =>
  personazh === "Дед Мороз" || personazh === "Снегурочка"
    ? `${personazh}!${personazh}!${personazh}!`
    : `Неизвестный персонаж ${personazh}. Доступные: Дед Мороз, Снегурочка.`;

//console.log(newYear("Дед Мороз"));
//console.log(newYear("Снегурочка"));
//console.log(newYear("ПуПуПу"));