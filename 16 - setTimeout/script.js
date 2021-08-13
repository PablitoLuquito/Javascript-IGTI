const ul = document.querySelector("ul");
const input = document.querySelector("input");

async function search(query) {
  if (query) {
    const employees = await fetch(
      `http://localhost:3000/employees?q=${encodeURIComponent(query)}`
    ).then((r) => r.json());
    ul.innerHTML = employees
      .map((employee) => `<li>${employee.name}</li>`)
      .join("");
  } else {
    ul.innerHTML = "";
  }
}

input.addEventListener("input", withDelay(onQueryChange, 500));

function onQueryChange() {
  search(input.value);
}

function withDelay(fn, delay) {
  let timeOut;
  return function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(fn, delay);
  };
}
