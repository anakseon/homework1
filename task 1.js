//Задание 1
//Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
//Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
//Реализуйте геттер allBooks, который возвращает текущий список книг.
//Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
//Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
//Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
//Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books;

  constructor(initialBooks) {
    const uniqueBooks = new Set(initialBooks);
    if (uniqueBooks.size !== initialBooks.length) {
      throw new Error("Начальный список книг содержит дубликаты");
    }
    this.#books = initialBooks;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием уже существует в списке");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error("Книги с таким названием нет в списке");
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

// Пример использования:
const library = new Library(["Книга 1", "Книга 2", "Книга 3"]);
console.log(library.allBooks); // ['Книга 1', 'Книга 2', 'Книга 3']

library.addBook("Новая книга");
console.log(library.allBooks); // ['Книга 1', 'Книга 2', 'Книга 3', 'Новая книга']

library.removeBook("Книга 2");
console.log(library.allBooks); // ['Книга 1', 'Книга 3', 'Новая книга']

console.log(library.hasBook("Книга 1")); // true
console.log(library.hasBook("Книга 4")); // false
