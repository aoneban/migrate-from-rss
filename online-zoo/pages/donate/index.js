let inputs = document.querySelectorAll(".input__donate__2");
const sum = document.querySelectorAll(".choise__sum");
const dollarsBlack = document.querySelectorAll('.dollar-black')
const dollarsGold = document.querySelectorAll('.dollar-gold')
sum[2].style.color = "orange";
dollarsBlack[2].style.display = 'none'
dollarsGold[2].style.display = 'inline'
console.log(dollarsGold)

inputs.forEach((el) => {
  el.addEventListener("input", (e) => {
    let newTarget = e.currentTarget.value;
    document.querySelector(".anoteher__amount").value = newTarget;
    for (let i = 0; i < sum.length; i++) {
      if (sum[i].innerText == newTarget) {
        sum[i].style.color = "orange";
        dollarsBlack[i].style.display = 'none'
        dollarsGold[i].style.display = 'inline'
      } else {
        sum[i].style.color = "#555";
        dollarsBlack[i].style.display = 'inline'
        dollarsGold[i].style.display = 'none'

      }
    }
  });
});
