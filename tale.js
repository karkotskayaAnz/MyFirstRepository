export function kolobok(personazh) {
  switch (personazh) {
    case "Дедушка":
      console.log("Я от дедушки ушел");
      break;
    case "Бабушка":
      console.log("И от бабушки ушел");
      break;
    case "Заяц":
      console.log("И от зайчика ушел");
      break;
    case "Лиса":
      console.log("А лиса меня сьела :(");
      break;
    default:
      console.log(
        "Неизвестный персонаж " +
          personazh +
          ". Доступные: Дедушка,  Бабушка, Заяц, Лиса.",
      );
  }
}