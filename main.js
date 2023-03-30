let display = document.querySelector(".display");
let pwd = document.querySelector(".pwd");
let cpwd = document.querySelector(".cpwd");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (pwd.value.isEmpty() || cpwd.value.isEmpty()) {
    display.innerHTML = "Password is empty";
  } else if (pwd.value === cpwd.value) {
    display.innerHTML = "Password Matched";
  } else {
    display.innerHTML = "Password is not matching";
  }
});
