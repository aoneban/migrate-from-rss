let inputs = document.querySelectorAll(".input__donate__2");

inputs.forEach((el) => {
  el.addEventListener("input", (e) => {
    let newData = document.querySelector(".anoteher__amount").value;
    let newTarget = e.currentTarget.value;
    document.querySelector(".anoteher__amount").value = newTarget;
  });
});
