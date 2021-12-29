
const isPrime = (number) => {
  if (number >= 2) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const primeNumber = (a, b) => {
  let primeArray = [];

  if (!a || !b) {
    return "Enter two numbers!";
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "Only numbers are allowed!";
  }
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
};

console.log(primeNumber(1, 10));

const primeValidator = () => {
  const containerView = document.querySelector("#root");
  const containerPrimeValidator = document.createElement("div");
  containerPrimeValidator.className =
    "containerPrimeValidator p-5 bg-dark overflow-auto vh-100 text-white";
  const primeValidatorTemplate = `
  <div class="
  contentValidator
  d-flex
  justify-content-center
  align-items-center
  flex-column
">
<h1>Prime Number Validator</h1>
<h6>What will be the prime numbers?</h6>
<div class="
    d-flex
    flex-column
    justify-content-center
    align-items-center
    bg-dark bg-gradient
    rounded
  " style="width: 80rem; height: 30rem">
<form id="validator__form" class="d-flex flex-column">
  <label for="tentacles">Rules: Enter two numbers. Decreasing range between A and B.</label>
  <div class="d-flex flex-row justify-content-center m-2">
    <input type="number" class="form-control m-2" style="width: 4rem; height: 4rem" id="minNumber"
      name="tentacles" min="1" max="10" />
    <input type="number" class="form-control m-2" style="width: 4rem; height: 4rem" id="maxNumber"
      name="tentacles" min="1" max="10" />
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" id="validator__button" class="btn btn-outline-warning">
      Verify
    </button>
  </div>
</form>
<h3 id="validator__result"></h3>
</div>
</div>`;
  containerPrimeValidator.innerHTML += primeValidatorTemplate;
  containerView.appendChild(containerPrimeValidator);

  const buttonValidator = containerPrimeValidator.querySelector("#validator__button");
  buttonValidator.addEventListener("click", (e) => {
    e.preventDefault;

    const minNumber = parseInt(
      containerPrimeValidator.querySelector("#minNumber").value
    );
    const maxNumber = parseInt(
      containerPrimeValidator.querySelector("#maxNumber").value
    );
    const validatorResult = containerPrimeValidator.querySelector("#validator__result");
    const result = primeNumber(minNumber, maxNumber);
    validatorResult.innerHTML = `RESULT: ${result}`;
  });
};

primeValidator();
