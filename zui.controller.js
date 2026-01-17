const consoleBox = document.getElementById("solver-console");
const input = document.getElementById("user-input");

function pushMessage(text, cls) {
  const div = document.createElement("div");
  div.className = `msg ${cls}`;
  div.innerHTML = text;
  consoleBox.appendChild(div);
  consoleBox.scrollTop = consoleBox.scrollHeight;
  animateMessage(div);
}

document.getElementById("solve-btn").onclick = () => {
  const q = input.value.trim();
  if (!q) return;

  pushMessage(q, "user");

  const res = solveMath(q);

  if (res.type === "solution") {
    pushMessage(`\\[ ${res.latex} \\]<br><small>${res.explanation}</small>`, "engine");
    MathJax.typeset();
  }

  if (res.type === "text") {
    pushMessage(res.text, "engine");
  }

  if (res.type === "error") {
    pushMessage(res.text, "engine");
  }

  input.value = "";
};
