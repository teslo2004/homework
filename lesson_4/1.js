let numbers = "+375298981600sdfsfd +375234563412+37529898160 sdf sd"
//Будем отбирать телефонные номера такого формата: +375********* (* - цифра)
let phoneNumber = /\+375\d{9}/g;
console.log("numbers: ");
console.log(numbers.match(phoneNumber));
//Адрес сайта
let addreses = "vk.com sdfd.1ru hello world youtube.com sd.r  ok.ru"
let siteAddres = /[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}/g;
console.log("sites: ");
console.log(addreses.match(siteAddres));
//Адреса зданий
/* Будем считать адресом такую структуру:
"ул. {заглавная буква}{некоторое кол-во прописных}, {от одной до четырех цифр}{корпус} */
let buildings = /ул\. [А-Я][а-я]+\, \d{1,4}[а-я]?/g;
let addreses2 = "ул. Октябрьская, 10а, ул. Ульяновская, 8";
console.log("addres: ");
console.log(addreses2.match(buildings));
/* Будем считать html-тегом все, что имеет такую структуру:
"<название>"  */
let tag = /<(\w*)>/;
let html = "<div><h1>Hello, world!</h1></div>";
console.log("tag: ");
console.log(html.match(tag));
