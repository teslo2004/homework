// Создать поле для ввода, которое используется для ввода e-mail-адреса,
// не позволяя пользователю ввести две точки подряд, две собачки,
// первый символ-цифру, а также любые символы кроме допустимых в e-mail.

const input = document.getElementById("email");
input.addEventListener("keydown", function(e) {
  key = e.key;
  value = this.value;
  if (value[value.length-1] == '@' && key == '@') {
    e.preventDefault();
  }
  if (value[value.length-1] == '.' && key == '.') {
    e.preventDefault();
  }
  if (value.length == 0 && Number(key)) {
    e.preventDefault();
  }
});
