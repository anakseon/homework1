//Задание 2
//Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

//Необходимо создать систему управления этими заказами, которая позволит:

//Отслеживать, какой повар готовит какое блюдо.
//Записывать, какие блюда заказал каждый клиент.

// Создание коллекции Map для хранения блюд и их поваров
let dishesAndChefs = new Map([
  ["Пицца 'Маргарита'", "Виктор"],
  ["Пицца 'Пепперони'", "Виктор"],
  ["Суши 'Филадельфия'", "Ольга"],
  ["Суши 'Калифорния'", "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"],
]);

// Создание коллекции Map для хранения заказов каждого клиента
let orders = new Map();

// Добавление заказов клиентов
orders.set({ name: "Алексей" }, ["Пицца 'Пепперони'", "Тирамису"]);
orders.set({ name: "Мария" }, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
orders.set({ name: "Ирина" }, ["Чизкейк"]);

// Вывод информации о заказах
orders.forEach((dishes, orders) => {
  console.log("Клиент {order.name} заказал:");
  dishes.forEach((dish) => {
    console.log("{dish} готовит повар: {dishesAndChefs.get(dish)})");
  });
  console.log("\n");
});