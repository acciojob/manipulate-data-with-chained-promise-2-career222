const output = document.getElementById("output");

function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

getArray()
  .then((arr) => {
    return new Promise((resolve) => {
      const evenNumbers = arr.filter((num) => num % 2 === 0);

      setTimeout(() => {
        output.innerText = evenNumbers;
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      const result = evenNumbers.map((num) => num * 2);

      setTimeout(() => {
        output.innerText = result;
        resolve(result);
      }, 2000);
    });
  });