//Задание 1
//Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

//Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. /

let musicCollection = {
    albums: [
      {
        title: "Альбом 1",
        artist: "Исполнитель 1",
        year: "2000"
      },
      {
        title: "Альбом 2",
        artist: "Исполнитель 2",
        year: "2005"
      },
      {
        title: "Альбом 3",
        artist: "Исполнитель 3",
        year: "2010"
      }
    ],
    [Symbol.iterator]: function() {
      let index = 0;
      return {
        next: () => {
          if (index < this.albums.length) {
            return { value: this.albums[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  for (let album of musicCollection) {
    console.log({album.title} - {album.artist}({album.year}));
  }
  