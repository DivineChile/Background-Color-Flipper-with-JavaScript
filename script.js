/**Declare Variables */
let btnChange = document.querySelector("a.button");
let btnEdit = document.querySelector("a.edit");
let btnSave = document.querySelector("a.save");
let inputContainer = document.querySelector("div.input-con");
let input = document.querySelector("input.input");
let body = document.body;

/** Event Listener to control space between elements */
btnChange.addEventListener("mouseover", () => {
  if (!btnChange.hasAttribute("mouseover")) {
    btnChange.toggleAttribute("mouseover", true);
    inputContainer.style.marginTop = "20px";
  }
});

btnChange.addEventListener("mouseout", () => {
  if (btnChange.hasAttribute("mouseover")) {
    btnChange.toggleAttribute("mouseover", false);
    inputContainer.style.marginTop = "0";
  }
});

/** Event listener to change background Color */
btnChange.addEventListener("click", changeColor);

function changeColor() {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  let color = `rgb(${r}, ${g}, ${b})`;

  body.style.backgroundColor = color;
  input.value = color;
}

/** Event Listener that controls Edit Button */
btnEdit.addEventListener("click", (e) => {
  let ans = prompt("Do you want to edit the color???");
  ans = ans.toLowerCase();

  if (ans == "") {
    ans = prompt("Please enter an answer");
    if (ans == "yes") {
      input.removeAttribute("disabled");
      input.value = "";
    } else {
      input.setAttribute("disabled", "");
    }
  } else if (ans == "yes") {
    input.removeAttribute("disabled");
    input.value = "";
  } else {
    input.setAttribute("disabled", "");
  }

  e.preventDefault();
});

/** Event Listener that controls Change Button */
btnSave.addEventListener("click", (e) => {
  if (!(input.value == "")) {
    body.style.backgroundColor = input.value;
  } else {
    alert("Field cannot be empty!!!");
  }

  e.preventDefault();
});
