const cardValue = [
  "🫐",
  "🫐",
  "🍧",
  "🍧",
  "🥙",
  "🥙",
  "🍀",
  "🍀",
  "🌏",
  "🌏",
  "🍄",
  "🍄",
  "🌊",
  "🌊",
  "🧠",
  "🧠",
];
//const card=document.createElement("div")
console.log(cardValue);
function shuffle(value) {
  for (let i = value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [value[i], value[j]] = [value[j], value[i]];
  }
  console.log(value);
  return value;
}
//const game=document.createElement("div");
shuffle(cardValue);
cardValue.forEach((value) => {
  const card = document.createElement("div");
  card.classList.add("card");
  //   card.dataset.value = `<p > ${value}</p>`;
  card.innerHTML = `<p class="hidden"> ${value}</p>`;
  document.getElementById("gameContainer").appendChild(card);
  //   card.addEventListner("click",click);
});
document.querySelectorAll(".card").forEach((card, index) => {
  console.log(index);
  console.log(card);
  card.addEventListener("click", click)
  //card.onclick = click;
});
const firstClick=null;
const secondClick=null;
const result=false;
function click(event) {
    // console.log(event);
    // console.log(event.target);
    if(result) return ;
    let clickedElement=event.target;
    if(clickedElement===firstClick) return;
    clickedElement.classList.add("f");
    clickedElement.querySelector("p").classList.remove("hidden");
    // console.log(firstClick);
    // secondClick=e.querySelector("p").classList.remove("hidden");
    // console.log(secondClick);
  }
