let first_digit = "null";
let second_digit = "null"
let operator = "null";

const num_btn = document.querySelectorAll(".digit");
const operation_btn = document.querySelectorAll(".operator");
const display_operation_btn = document.querySelector(".display-operations");
const display_result_btn = document.querySelector(".display-result");
const decimal_btn = document.querySelector(".period");
const equal_btn = document.querySelector(".equal");
const clear_btn = document.querySelector(".clear");
const delete_btn = document.querySelector(".delete");

let num_array = [...num_btn];

num_array.forEach((button, index) => {
    button.textContent = index;  // Set the visible text
    button.value = index;       // Set the button's value attribute
  });

num_array.forEach(button => {
    button.addEventListener('click', () => {
      console.log(`Button value: ${button.value}`);
    });
  });


