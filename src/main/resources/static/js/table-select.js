const tableSelect = document.querySelectorAll(".number");
const tableSelect2 = document.querySelectorAll(".numberone");

tableSelect.forEach((button, number) => {
  button.onclick = () => {
    console.log(tableSelect[number]);
    location.href = `/table/${number + 1}`;
  };
});

tableSelect2.forEach((button, number) => {
  button.onclick = () => {
    console.log(tableSelect[number + 10]);
    location.href = `/table/${number + 10}`;
  };
});
