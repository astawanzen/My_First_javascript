let count = 0; //variable of the counter

//changing the inner html element by id "countLabel" equal to variable count -1 when decrease button is onclick

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

//changing the inner html element by id "countLabel" equal to variable count 0 when reset button is onclick

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

//changing the inner html element by id "countLabel" equal to variable count +1 when increase button is onclick

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};
