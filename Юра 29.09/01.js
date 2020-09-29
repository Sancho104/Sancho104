let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];


let usersMapped = users.map((a) => ({
  fullName : a.name + ' ' + a.surname, id : a.id
}));
console.log(usersMapped);