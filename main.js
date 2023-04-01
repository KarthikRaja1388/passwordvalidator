let display = document.querySelector(".display");
let pwd = document.querySelector(".pwd");
let cpwd = document.querySelector(".cpwd");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let pwdValue = pwd.value;
  let cpwdValue = cpwd.value;

  if (pwdValue !== "" || cpwdValue !== "") {
    if (!pwdValue.length > 8 || !cpwdValue.length > 8) {
      if (pwdValue === cpwdValue) {
        display.innerHTML = "Password matched!";
        pwd.classList.add("match");
        cpwd.classList.add("match");
        display.style.color = "green";
      } else {
        display.innerHTML = "Password not matching";
        applyErrorStyle();
      }
    } else {
      display.innerHTML = "Password must have minimum of 8 characters";
      applyErrorStyle();
    }
  } else {
    display.innerHTML = "Password can't be empty";
    applyErrorStyle();
  }
});

function applyErrorStyle() {
  pwd.classList.add("mismatch");
  cpwd.classList.add("mismatch");
  display.style.color = "red";
}
