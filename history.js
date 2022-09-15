const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  console.log(questionText)
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took bnbn: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  console.log(previousTests)
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");
    newRow.classList.add("bg-dark");
    newRow.classList.add("col-lg-4");
    newRow.innerHTML = `
  <div class="text-center">
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${(test.timeTaken)}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  </div>
  `;

    histories.appendChild(newRow);
  });
}

