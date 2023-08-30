const click_btn = document.getElementById("click-btn");
const scoreP = document.getElementById("score");
const deletebtn = document.getElementById("delete");
let score = 0;

click_btn.addEventListener("click", () => {
  score += 1;
  scoreP.textContent = `Score: ${score} `;

  ClickAudio.play();
});

deletebtn.addEventListener("click", () => {
  score = 0;
  scoreP.textContent = `Score: ${score} `;
});
