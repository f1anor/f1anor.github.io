let currentColor = "#000";
const root = document.querySelector("#root");
const colors = document.querySelector(".colors");

const changeColor = (e) => {
  const target = e.target.closest("td[data-cell]");
  if (!target) return;
  target.style.backgroundColor = currentColor;
};

const getColor = (e) => {
  const target = e.target.closest("div[data-color]");
  if (!target) return;
  const color = target.getAttribute("data-color");
  currentColor = color;
};

root.addEventListener("click", changeColor);
colors.addEventListener("click", getColor);

const size = {
  width: parseInt(root.offsetWidth / 20),
  height: parseInt(root.offsetHeight / 20),
};

const makeTable = (size) => {
  const makeCell = () => {
    const cell = document.createElement("td");
    cell.className = "tableCell";
    cell.setAttribute("data-cell", true);
    return cell;
  };

  const tbody = document.querySelector("#tbody");

  for (let i = 1; i < size.height - 1; i++) {
    const row = document.createElement("tr");
    if (i % 5 === 0) {
      row.classList.add("borderedRow");
    }

    for (let i = 0; i < size.width; i++) {
      const cell = makeCell();
      if (i % 5 === 0) {
        cell.classList.add("borderedCell");
      }
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }
  return tbody;
};

makeTable(size);
