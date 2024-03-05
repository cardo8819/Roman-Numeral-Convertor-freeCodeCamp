document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById('number');
  const submit = document.getElementById('convert-btn');
  const outputDisplay = document.getElementsByClassName('display')[0];
 

  function passingInput(num) {
    console.log(num)
    const romanNumerals = {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1
    };
    let result = "";
    for (let prop in romanNumerals) {
      while (num >= romanNumerals[prop]) {
        result += prop;
        num -= romanNumerals[prop]
      }

    }
    return result
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    outputDisplay.style.display= "flex";
    if (input.value.length == 0) {
      outputDisplay.innerText = "Please enter a valid number.";
      outputDisplay.classList.add('bg-danger', "text-white");
      outputDisplay.classList.remove('bg-success');
    }
    else if (input.value <= 0) {
      outputDisplay.innerText = "Please enter a number greater than or equal to 1."
      outputDisplay.classList.add('bg-danger', "text-white");
      outputDisplay.classList.remove('bg-success');

        
    } else if (input.value >= 4000) {
      outputDisplay.innerText = "Please enter a number less than or equal to 3999."
      outputDisplay.classList.add('bg-danger', "text-white");
      outputDisplay.classList.remove('bg-success');
    }
    else {
      outputDisplay.innerText = passingInput(input.value);
      outputDisplay.classList.add('bg-success', "text-white");
      outputDisplay.classList.remove('bg-danger');
    }
})

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
      e.preventDefault();
      submit.click(); 
  }
});

});




